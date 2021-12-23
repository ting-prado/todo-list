export default function taskDOM() {
    let i=1;
    const content = document.querySelector('#content');

    function creator() {
        const div = document.createElement('div');
        div.classList.add('taskCont');

        const top = document.createElement('div');
        top.classList.add('taskTop');

        const addImg = new Image();
        addImg.src = './icons/plus.png';
        addImg.classList.add('titleIcon');

        const title = document.createElement('input');
        title.classList.add('title');
        title.type = 'text';
        title.name = ' title';
        title.placeholder = 'New Task...';

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
        desc.placeholder = 'Say something about this task...';

        const projectLabel = document.createElement('label');
        projectLabel.classList.add('labels');
        projectLabel.for = 'project';
        projectLabel.textContent = 'Project';
        const project = document.createElement('select');
        project.name = 'project';
        project.classList.add('input');
        const projectNone = document.createElement('option');
        projectNone.value = 'none';
        projectNone.textContent = 'None';

        const dateLabel = document.createElement('label');
        dateLabel.classList.add('labels');
        dateLabel.for = 'duedate';
        dateLabel.textContent = 'Due Date';
        const date = document.createElement('input');
        date.type = 'date';
        date.classList.add('input');
        date.name = 'duedate';

        const priorityLabel = document.createElement('label');
        priorityLabel.textContent = 'Priority';
        priorityLabel.classList.add('labels');
        priorityLabel.for = 'priority';
        const priority = document.createElement('select');
        priority.classList.add('input');
        priority.name = 'priority';

        const btnDiv = document.createElement('div');
        btnDiv.id = 'btnDiv';
        const cancelBtn = document.createElement('button');
        cancelBtn.classList.add('btn');
        cancelBtn.textContent = 'Cancel';
        const addBtn = document.createElement('button');
        addBtn.classList.add('btn');
        addBtn.textContent = 'Add Task';

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
        project.appendChild(projectNone);
        detailsRight.appendChild(dateLabel);
        detailsRight.appendChild(date);
        detailsRight.appendChild(priorityLabel);
        detailsRight.appendChild(priority);
        detailsRight.appendChild(btnDiv);
        btnDiv.appendChild(cancelBtn);
        btnDiv.appendChild(addBtn);

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

        addImg.addEventListener('click', () => {
            if(detailsDiv.style.display == 'none') {
                detailsDiv.style.display = 'flex';
            }
            else if(detailsDiv.style.display == 'flex') {
                detailsDiv.style.display = 'none';
            }
        });

        cancelBtn.addEventListener('click', () => {
            desc.value = '';
            date.value = '';
            priority.value = 'low';
            title.value = '';
            detailsDiv.style.display = 'none';
        });

        addBtn.addEventListener('click', modifyCreator);
    }
}