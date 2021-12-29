import domCreate from './createdom';
import { app, Task } from './task';

const projectAdder = document.querySelector('#project-adder');
projectAdder.addEventListener('click', domCreate.project);

window.addEventListener('load', domCreate.updateProj);
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
const project = document.querySelector('#project');
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
title.addEventListener('keydown', e => {
    if(e.key == 'Enter'){
        createNewTask();
    }
});

function createNewTask() {
    if(title.value != '' && project.value != '') {
        let newTask = Task(title.value, desc.value, date.value, priority.value);
        domCreate.task(newTask.getTitle(), newTask.getDesc(), project.value, newTask.getDate(), newTask.getPriority());
        desc.value = '';
        date.value = '';
        priority.value = 'low';
        title.value = '';
        detailsDiv.style.display = 'none';
        app.addTasktoArr(project.value, newTask);
        console.log(app.taskArr);
    }
    else {
        alert('Please enter task title and specify which project it belongs to.');
    }
}