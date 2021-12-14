export default function newTaskDiv() {
    const content = document.querySelector('#content');
    const div = document.createElement('div');
    div.id = 'newTaskCont';

    const addImg = new Image();
    addImg.src = './icons/plus.png';

    const title = document.createElement('input');
    title.classList.add('title');
    title.type = 'text';
    title.name = ' title';
    title.placeholder = 'New Task...';

    const detailsDiv = document.createElement('div');
    detailsDiv.id = 'details';
    detailsDiv.style.display = 'none';

    const detailsLeft = document.createElement('div');
    const detailsRight = document.createElement('div');
    detailsLeft.id = 'detailsLeft';
    detailsRight.id = 'detailsRight';

    const descLabel = document.createElement('label');
    const desc = document.createElement('textarea');
    descLabel.classList.add('labels');
    descLabel.textContent = 'Description';
    descLabel.for = 'desc';
    desc.id = 'desc';
    desc.placeholder = 'Say something about this task...';

    const dateLabel = document.createElement('label');
    dateLabel.classList.add('labels');
    dateLabel.for = 'duedate';
    dateLabel.textContent = 'Due Date';
    const date = document.createElement('input');
    date.type = 'date';
    date.id = 'duedate';
    date.name = 'duedate';

    const priorityLabel = document.createElement('label');
    priorityLabel.textContent = 'Priority';
    priorityLabel.classList.add('labels');
    priorityLabel.classList.add('priorityLabel');
    priorityLabel.for = 'priority';
    const priority = document.createElement('select');
    priority.id = 'priority';
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
    div.appendChild(addImg);
    div.appendChild(title);
    content.appendChild(detailsDiv);
    detailsDiv.appendChild(detailsLeft);
    detailsDiv.appendChild(detailsRight);
    detailsLeft.appendChild(descLabel);
    detailsLeft.appendChild(desc);
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
}