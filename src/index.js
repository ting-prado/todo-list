import createTaskDOM from './newtaskdom';
import { app, Task } from './task';

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
            app.addNewProject(span.textContent.toLowerCase());
        }
    });

    close.addEventListener('click', () => {
        app.removeProject(span.textContent.toLowerCase());
        project.removeChild(newItem);
    });
}

function createNewTask() {
    createTaskDOM('sample', 'hi', 'Personal', '2014-12-25', 'high');
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

const addBtn = document.querySelector('#addBtn');
addBtn.addEventListener('click', createNewTask);

const projectAdder = document.querySelector('#project-adder');
projectAdder.addEventListener('click', addNewProject);

