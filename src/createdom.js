import {app} from './task';
import { formatDistance } from 'date-fns';

const domCreate = (() => {
    const projInput = document.querySelector('#project');
    const sbProject = document.querySelector('#projects');

    const addProjOptions = () => {
        app.getProjects().forEach(project => {
            const option = document.createElement('option');
            option.textContent = project[0].toUpperCase() + project.slice(1);
            projInput.appendChild(option);
        });
    }

    const updateProj = () => {
        if(projInput.length > 0) {
            projInput.innerHTML = '';
        }
        addProjOptions();
    }

    const task = (taskProject, taskObj) => {
        const tasksCont = document.querySelector('#tasksCont');
        const div = document.createElement('div');
        div.classList.add('taskCont');
        
        const top = document.createElement('div');
        top.classList.add('taskTop');
        const addImg = new Image();
        addImg.src = './icons/plus.png';
        addImg.classList.add('titleIcon');
    
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('checkbox');
    
        const title = document.createElement('input');
        title.classList.add('title');
        title.classList.add('info');
        title.type = 'text';
        title.name = ' title';
        title.value = taskObj.getTitle();
        title.disabled = 'true';

        const displayDue = document.createElement('p');
        displayDue.classList.add('displayDue');
        if(taskObj.getDate() == undefined) {
            displayDue.textContent = '';
        }
        else {
            displayDue.textContent = formatDistance(
                new Date(taskObj.getDate()),
                new Date(),
                {addSuffix: true}
            );
        }
    
        const detailsDiv = document.createElement('div');
        detailsDiv.classList.add('details');
        detailsDiv.style.display = 'none';
        const detailsLeft = document.createElement('div');
        const detailsRight = document.createElement('div');
        detailsLeft.classList.add('detailsLeft');
        detailsRight.classList.add('detailsRight');
    
        const descLabel = document.createElement('label');
        const desc = document.createElement('textarea');
        descLabel.classList.add('labels');
        descLabel.textContent = 'Description';
        descLabel.for = 'desc';
        desc.classList.add('desc');
        desc.classList.add('info');
        desc.value = taskObj.getDesc();
        desc.placeholder = 'No description...';
        desc.disabled = 'true';
    
        const projectLabel = document.createElement('label');
        projectLabel.classList.add('labels');
        projectLabel.for = 'project';
        projectLabel.textContent = 'Project';
        const project = document.createElement('select');
        project.name = 'project';
        project.classList.add('input');
        project.classList.add('info');
        const projOption = document.createElement('option');
        projOption.value = taskProject.toLowerCase();
        projOption.textContent = taskProject;
        project.disabled = 'true';
    
        const dateLabel = document.createElement('label');
        dateLabel.classList.add('labels');
        dateLabel.for = 'duedate';
        dateLabel.textContent = 'Due Date';
        const date = document.createElement('input');
        date.type = 'datetime-local';
        date.classList.add('input');
        date.classList.add('info');
        date.name = 'duedate';
        date.value = taskObj.getDate();
        date.disabled = true;
    
        const priorityLabel = document.createElement('label');
        priorityLabel.textContent = 'Priority';
        priorityLabel.classList.add('labels');
        priorityLabel.for = 'priority';
        const priority = document.createElement('select');
        priority.classList.add('input');
        priority.classList.add('info');
        priority.name = 'priority';
        priority.disabled = 'true';
        const prioOption = document.createElement('option');
        prioOption.value = taskObj.getPriority().toLowerCase();
        prioOption.textContent = taskObj.getPriority();
    
        const btnDiv = document.createElement('div');
        btnDiv.classList.add('btnDiv');
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('btn');
        deleteBtn.textContent = 'Delete Task';
    
        tasksCont.appendChild(div);
        div.appendChild(top);
        top.appendChild(addImg);
        top.appendChild(checkbox);
        top.appendChild(title);
        top.appendChild(displayDue);
        div.appendChild(detailsDiv);
        detailsDiv.appendChild(detailsLeft);
        detailsDiv.appendChild(detailsRight);
        detailsLeft.appendChild(descLabel);
        detailsLeft.appendChild(desc);
        detailsRight.appendChild(projectLabel);
        detailsRight.appendChild(project);
        project.appendChild(projOption);
        detailsRight.appendChild(dateLabel);
        detailsRight.appendChild(date);
        detailsRight.appendChild(priorityLabel);
        detailsRight.appendChild(priority);
        priority.appendChild(prioOption);
        detailsRight.appendChild(btnDiv);
        btnDiv.appendChild(deleteBtn);
        
        addImg.addEventListener('click', () => {
            if(detailsDiv.style.display == 'none') {
                detailsDiv.style.display = 'flex';
            }
            else if(detailsDiv.style.display == 'flex') {
                detailsDiv.style.display = 'none';
            }
        });

        deleteBtn.addEventListener('click', () => {
            app.removeTask(taskProject, taskObj);
            tasksCont.removeChild(div);
        });

        checkbox.addEventListener('change', e => {
            if(e.target.checked) {
                app.removeTask(taskProject, taskObj);
                tasksCont.removeChild(div);
            }
        });
    }
    
    const newProject = () => {
        const newItem = document.createElement('li');
        const span = document.createElement('span');
        const input = document.createElement('input');
        input.type = 'text';
        input.classList.add('project-input');
        newItem.classList.add('project-options');
        const close = document.createElement('img');
        close.src = './icons/delete.png';
        close.classList.add('icon');
        newItem.appendChild(span);
        span.appendChild(input);
        sbProject.appendChild(newItem);
        newItem.appendChild(close);
    
        input.addEventListener('keydown', e => {
            if(e.key == 'Enter') {
                span.textContent = input.value[0].toUpperCase() + input.value.slice(1).toLowerCase();
                app.addNewProject(span.textContent.toLowerCase());
                updateProj();
            }
        });
    
        close.addEventListener('click', () => {
            app.removeProject(span.textContent.toLowerCase());
            sbProject.removeChild(newItem);
            updateProj();
        });
    }

    const existingProjects = () => {
        app.getProjects().forEach(project => {
            const existingItem = document.createElement('li');
            const span = document.createElement('span');
            span.textContent = project[0].toUpperCase() + project.slice(1);
            existingItem.classList.add('project-options');
            const close = document.createElement('img');
            close.src = './icons/delete.png';
            close.classList.add('icon');
            existingItem.appendChild(span);
            sbProject.appendChild(existingItem);
            existingItem.appendChild(close);

            close.addEventListener('click', () => {
                app.removeProject(span.textContent.toLowerCase());
                sbProject.removeChild(existingItem);
                updateProj();
            });
        });
        updateProj();
    }

    return {task, newProject, existingProjects}
})();

export default domCreate;