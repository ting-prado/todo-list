import { tasks } from './index';

function addNewProject() {
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
    project.appendChild(newItem);
    newItem.appendChild(close);

    input.addEventListener('keydown', e => {
        if(e.key == 'Enter') {
            span.textContent = input.value;
            tasks.push([`${span.textContent.toLowerCase()}`]);
        }
    });

    close.addEventListener('click', () => {
        let index;
        for(let i=0; i<tasks.length; i++) {
            if(span.textContent.toLowerCase() == tasks[i][0]){
                index=i;
            }
        }
        tasks.splice([index][0], 1);
        project.removeChild(newItem);
    });
}

const colorPicker = document.querySelector('#color-picker');
const content = document.querySelector('#content');
colorPicker.addEventListener('change', () => {
    content.style.background = colorPicker.value;
});

const addImg = document.querySelector('.titleIcon');
const detailsDiv = document.querySelector('.details');
detailsDiv.style.display = 'none';

addImg.addEventListener('click', () => {
    if(detailsDiv.style.display == 'flex'){
        detailsDiv.style.display = 'none';
    }
    else if(detailsDiv.style.display == 'none'){
        detailsDiv.style.display = 'flex';
    }
});

const cancelBtn = document.querySelector('#cancelBtn');
const desc = document.querySelector('#desc');
const date = document.querySelector('#date');
const priority = document.querySelector('#priority');
const project = document.querySelector('#projects');
const title = document.querySelector('#title');

cancelBtn.addEventListener('click', () => {
    desc.value = '';
    date.value = '';
    priority.value = 'low';
    project.value = 'none';
    title.value = '';
    detailsDiv.style.display = 'none';
});

const projectAdder = document.querySelector('#project-adder');
projectAdder.addEventListener('click', addNewProject);