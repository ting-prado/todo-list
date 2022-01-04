import domCreate from './createdom';
import { app, Task } from './task';
import { parseISO, isSameDay, isSameWeek } from 'date-fns';

const projectAdder = document.querySelector('#project-adder');
const content = document.querySelector('#content');
const cancelBtn = document.querySelector('#cancelBtn');
const desc = document.querySelector('#desc');
const date = document.querySelector('#date');
const priority = document.querySelector('#priority');
const project = document.querySelector('#project');
const title = document.querySelector('#title');
const colorPicker = document.querySelector('#color-picker');
const addBtn = document.querySelector('#addBtn');
const addImg = document.querySelector('.titleIcon');
const detailsDiv = document.querySelector('.details');
const tasksCont = document.querySelector('#tasksCont');
const allTasksBtn = document.querySelector('#allTasks');
const todayTasksBtn = document.querySelector('#todayTasks');
const weekTasksBtn = document.querySelector('#weekTasks');
const dispSidebarBtn = document.querySelector('#dispSidebar');
detailsDiv.style.display = 'none';

window.addEventListener('load', domCreate.existingProjects);
window.addEventListener('load', () => {
    content.style.background = localStorage.getItem('bgColor');

    for(let i=0; i<app.getNumOfProjs(); i++){
        app.getTasksWithinProj(app.getProjects()[i]).forEach(task => {
            domCreate.task(app.getProjects()[i], task);
        });
    }
});

colorPicker.addEventListener('change', () => {
    content.style.background = colorPicker.value;
    localStorage.setItem('bgColor', content.style.background);
});

addImg.addEventListener('click', () => {
    if(detailsDiv.style.display == 'flex'){
        detailsDiv.style.display = 'none';
    }
    else if(detailsDiv.style.display == 'none'){
        detailsDiv.style.display = 'flex';
    }
});

cancelBtn.addEventListener('click', () => {
    desc.value = '';
    date.value = '';
    priority.value = 'low';
    project.value = 'none';
    title.value = '';
    detailsDiv.style.display = 'none';
});

projectAdder.addEventListener('click', domCreate.newProject);

addBtn.addEventListener('click', createNewTask);

title.addEventListener('keydown', e => {
    if(e.key == 'Enter'){
        createNewTask();
    }
});

allTasksBtn.addEventListener('click', () => {
    allTasksBtn.style.color = 'skyblue';
    todayTasksBtn.style.color = 'whitesmoke';
    weekTasksBtn.style.color = 'whitesmoke';
    tasksCont.innerHTML = '';

    for(let i=0; i<app.getNumOfProjs(); i++){
        app.getTasksWithinProj(app.getProjects()[i]).forEach(task => {
            domCreate.task(app.getProjects()[i], task);
        });
    }
});

todayTasksBtn.addEventListener('click', () => {
    allTasksBtn.style.color = 'whitesmoke';
    todayTasksBtn.style.color = 'skyblue';
    weekTasksBtn.style.color = 'whitesmoke';
    tasksCont.innerHTML = '';
    
    for(let i=0; i<app.getNumOfProjs(); i++){
        app.getTasksWithinProj(app.getProjects()[i]).forEach(task => {
            if(isSameDay(
                new Date(),
                parseISO(task.date)
                )){
                domCreate.task(app.getProjects()[i], task);
            }
        });
    }
});

weekTasksBtn.addEventListener('click', () => {
    allTasksBtn.style.color = 'whitesmoke';
    todayTasksBtn.style.color = 'whitesmoke';
    weekTasksBtn.style.color = 'skyblue';
    tasksCont.innerHTML = '';
    
    for(let i=0; i<app.getNumOfProjs(); i++){
        app.getTasksWithinProj(app.getProjects()[i]).forEach(task => {
            if(isSameWeek(
                new Date(),
                parseISO(task.date)
                )){
                domCreate.task(app.getProjects()[i], task);
            }
        });
    }
});

dispSidebarBtn.addEventListener('click', () => {
    const sidebar = document.querySelector('#sidebar');
    if(sidebar.style.display == 'none') {
        sidebar.style.display = 'block';
    }
    else {
        sidebar.style.display = 'none';
    }
});

function createNewTask() {
    if(title.value != '' && project.value != '') {
        let newTask = Task(title.value, desc.value, date.value, priority.value);
        domCreate.task(project.value, newTask);
        app.addTasktoArr(project.value, newTask);
        desc.value = '';
        date.value = '';
        priority.value = 'low';
        title.value = '';
        detailsDiv.style.display = 'none';
    }
    else {
        alert('Please enter task title and specify which project it belongs to.');
    }
}