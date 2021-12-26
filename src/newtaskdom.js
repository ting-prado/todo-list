export default function createTaskDOM(taskTitle, taskDesc, taskProject, taskDue, taskPriority) {
    const content = document.querySelector('#content');
    const div = document.createElement('div');
    div.classList.add('taskCont');
    
    const top = document.createElement('div');
    top.classList.add('taskTop');
    const addImg = new Image();
    addImg.src = './icons/plus.png';
    addImg.classList.add('titleIcon');
    const title = document.createElement('input');
    title.classList.add('title');
    title.classList.add('info');
    title.type = 'text';
    title.name = ' title';
    title.value = taskTitle;

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
    desc.value = taskDesc;

    const projectLabel = document.createElement('label');
    projectLabel.classList.add('labels');
    projectLabel.for = 'project';
    projectLabel.textContent = 'Project';
    const project = document.createElement('select');
    project.name = 'project';
    project.classList.add('input');
    project.classList.add('info');
    project.value = taskProject;

    const dateLabel = document.createElement('label');
    dateLabel.classList.add('labels');
    dateLabel.for = 'duedate';
    dateLabel.textContent = 'Due Date';
    const date = document.createElement('input');
    date.type = 'date';
    date.classList.add('input');
    date.classList.add('info');
    date.name = 'duedate';
    date.value = `${taskDue}`;

    const priorityLabel = document.createElement('label');
    priorityLabel.textContent = 'Priority';
    priorityLabel.classList.add('labels');
    priorityLabel.for = 'priority';
    const priority = document.createElement('select');
    priority.classList.add('input');
    priority.classList.add('info');
    priority.name = 'priority';

    const btnDiv = document.createElement('div');
    btnDiv.classList.add('btnDiv');
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('btn');
    deleteBtn.textContent = 'Delete Task';
    const saveBtn = document.createElement('button');
    saveBtn.classList.add('btn');
    saveBtn.textContent = 'Save Changes';

    content.appendChild(div);
    div.appendChild(top);
    top.appendChild(addImg);
    top.appendChild(title);
    div.appendChild(detailsDiv);
    detailsDiv.appendChild(detailsLeft);
    detailsDiv.appendChild(detailsRight);
    detailsLeft.appendChild(descLabel);
    detailsLeft.appendChild(desc);
    detailsRight.appendChild(projectLabel);
    detailsRight.appendChild(project);
    detailsRight.appendChild(dateLabel);
    detailsRight.appendChild(date);
    detailsRight.appendChild(priorityLabel);
    detailsRight.appendChild(priority);
    detailsRight.appendChild(btnDiv);
    btnDiv.appendChild(deleteBtn);
    btnDiv.appendChild(saveBtn);
    for(let i=0; i<3; i++) {
        const option = document.createElement('option');
        switch(i) {
            case 0:
                option.value = 'low';
                option.textContent = 'Low';
                break;
            case 1:
                option.value = 'medium';
                option.textContent = 'Medium';
                break;
            case 2:
                option.value = 'high';
                option.textContent = 'High';
                break;
        }
        priority.appendChild(option);
    }
    priority.value = taskPriority;
    addImg.addEventListener('click', () => {
        if(detailsDiv.style.display == 'none') {
            detailsDiv.style.display = 'flex';
        }
        else if(detailsDiv.style.display == 'flex') {
            detailsDiv.style.display = 'none';
        }
    });
}