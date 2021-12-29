/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/createdom.js":
/*!**************************!*\
  !*** ./src/createdom.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/task.js");


const domCreate = (() => {
    const projInput = document.querySelector('#project');
    const addProjOptions = () => {
        _task__WEBPACK_IMPORTED_MODULE_0__.app.getProjects().forEach(project => {
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

    const task = (taskTitle, taskDesc, taskProject, taskDue, taskPriority) => {
        const content = document.querySelector('#content');
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
        title.value = taskTitle;
        title.disabled = 'true';

        const displayDue = document.createElement('p');
        displayDue.classList.add('displayDue');
        if(taskDue == undefined) {
            displayDue.textContent = '';
        }
        else {
            displayDue.textContent = taskDue;
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
        desc.value = taskDesc;
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
        date.type = 'date';
        date.classList.add('input');
        date.classList.add('info');
        date.name = 'duedate';
        date.value = `${taskDue}`;
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
        prioOption.value = taskPriority.toLowerCase();
        prioOption.textContent = taskPriority;
    
        const btnDiv = document.createElement('div');
        btnDiv.classList.add('btnDiv');
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('btn');
        deleteBtn.textContent = 'Delete Task';
    
        content.appendChild(div);
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
            _task__WEBPACK_IMPORTED_MODULE_0__.app.removeTask(taskProject, taskTitle);
            console.log(_task__WEBPACK_IMPORTED_MODULE_0__.app.taskArr);
            content.removeChild(div);
        });
    }
    
    const project = () => {
        const project = document.querySelector('#projects');
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
                span.textContent = input.value[0].toUpperCase() + input.value.slice(1).toLowerCase();
                _task__WEBPACK_IMPORTED_MODULE_0__.app.addNewProject(span.textContent.toLowerCase());
                updateProj();
            }
        });
    
        close.addEventListener('click', () => {
            _task__WEBPACK_IMPORTED_MODULE_0__.app.removeProject(span.textContent.toLowerCase());
            project.removeChild(newItem);
            updateProj();
        });
    }

    return {task, project, updateProj}
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (domCreate);

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Task": () => (/* binding */ Task),
/* harmony export */   "app": () => (/* binding */ app)
/* harmony export */ });
const app = (() => {
    const taskArr = [
        // ['personal', 'hi', 'hoe', 'mlem'],
        // ['chores', 'hello', 'hi'],
        // ['top', 'hoe']
    ];

    const addNewProject = project => {
        taskArr.push([project]);
    }

    const removeProject = project => {
        for(let i=0; i<taskArr.length; i++){
            if(project == taskArr[i][0]){
                taskArr.splice(i, 1);
            }
        }
    }

    const getProjects = () => taskArr.map(elements => elements[0]);

    const getTasks = project => {
        for(let i=0; i<taskArr.length; i++){
            if(taskArr[i][0] == project) {
                return taskArr[i].splice(1, taskArr[i].length);
            }
        }
    }

    const getNumOfProjs = () => taskArr.length;

    const getNumOfTasks = project => {
        for(let i=0; i<taskArr.length; i++){
            if(taskArr[i][0] == project) {
                return (taskArr[i].length-1);
            }
        }
    }

    const addTasktoArr = (project, task) => {
        for(let i=0; i<taskArr.length; i++){
            if(taskArr[i][0] == project.toLowerCase()){
                taskArr[i].push(task);
            }
        }
    }

    const removeTask = (project, taskTitle) => {
        // for(let i=0; i<taskArr.length; i++){
        //     if(taskArr[i][0] == project.toLowerCase()){
        //         for(let j=0; j<taskArr[i].length; j++) {
        //             if(taskArr[i][j].title == taskTitle){
        //                 taskArr[i].splice(j, 1);
        //             }
        //         }
        //     }
        // }
    }

    return {taskArr, addNewProject, getProjects, getTasks, getNumOfProjs, getNumOfTasks, addTasktoArr, removeProject, removeTask}
})();

const Task = (title, desc, date, priority) => {
    const getTitle = () => title;
    const getDesc = () => desc;
    const getDate = () => date;
    const getPriority = () => priority[0].toUpperCase() + priority.slice(1);

    return {getTitle, getDesc, getDate, getPriority}
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createdom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createdom */ "./src/createdom.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/task.js");



const projectAdder = document.querySelector('#project-adder');
projectAdder.addEventListener('click', _createdom__WEBPACK_IMPORTED_MODULE_0__["default"].project);

window.addEventListener('load', _createdom__WEBPACK_IMPORTED_MODULE_0__["default"].updateProj);
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
        let newTask = (0,_task__WEBPACK_IMPORTED_MODULE_1__.Task)(title.value, desc.value, date.value, priority.value);
        _createdom__WEBPACK_IMPORTED_MODULE_0__["default"].task(newTask.getTitle(), newTask.getDesc(), project.value, newTask.getDate(), newTask.getPriority());
        desc.value = '';
        date.value = '';
        priority.value = 'low';
        title.value = '';
        detailsDiv.style.display = 'none';
        _task__WEBPACK_IMPORTED_MODULE_1__.app.addTasktoArr(project.value, newTask);
        console.log(_task__WEBPACK_IMPORTED_MODULE_1__.app.taskArr);
    }
    else {
        alert('Please enter task title and specify which project it belongs to.');
    }
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dUNBQXVDLDBEQUFpQjs7QUFFeEQsZ0NBQWdDLDZEQUFvQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLHNCQUFzQiwyQ0FBSTtBQUMxQixRQUFRLHVEQUFjO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLG1EQUFnQjtBQUN4QixvQkFBb0IsOENBQVc7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NyZWF0ZWRvbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHthcHB9IGZyb20gJy4vdGFzayc7XG5cbmNvbnN0IGRvbUNyZWF0ZSA9ICgoKSA9PiB7XG4gICAgY29uc3QgcHJvaklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QnKTtcbiAgICBjb25zdCBhZGRQcm9qT3B0aW9ucyA9ICgpID0+IHtcbiAgICAgICAgYXBwLmdldFByb2plY3RzKCkuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gcHJvamVjdFswXS50b1VwcGVyQ2FzZSgpICsgcHJvamVjdC5zbGljZSgxKTtcbiAgICAgICAgICAgIHByb2pJbnB1dC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCB1cGRhdGVQcm9qID0gKCkgPT4ge1xuICAgICAgICBpZihwcm9qSW5wdXQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcHJvaklucHV0LmlubmVySFRNTCA9ICcnO1xuICAgICAgICB9XG4gICAgICAgIGFkZFByb2pPcHRpb25zKCk7XG4gICAgfVxuXG4gICAgY29uc3QgdGFzayA9ICh0YXNrVGl0bGUsIHRhc2tEZXNjLCB0YXNrUHJvamVjdCwgdGFza0R1ZSwgdGFza1ByaW9yaXR5KSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2tDb250Jyk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCB0b3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdG9wLmNsYXNzTGlzdC5hZGQoJ3Rhc2tUb3AnKTtcbiAgICAgICAgY29uc3QgYWRkSW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGFkZEltZy5zcmMgPSAnLi9pY29ucy9wbHVzLnBuZyc7XG4gICAgICAgIGFkZEltZy5jbGFzc0xpc3QuYWRkKCd0aXRsZUljb24nKTtcbiAgICBcbiAgICAgICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBjaGVja2JveC50eXBlID0gJ2NoZWNrYm94JztcbiAgICAgICAgY2hlY2tib3guY2xhc3NMaXN0LmFkZCgnY2hlY2tib3gnKTtcbiAgICBcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdpbmZvJyk7XG4gICAgICAgIHRpdGxlLnR5cGUgPSAndGV4dCc7XG4gICAgICAgIHRpdGxlLm5hbWUgPSAnIHRpdGxlJztcbiAgICAgICAgdGl0bGUudmFsdWUgPSB0YXNrVGl0bGU7XG4gICAgICAgIHRpdGxlLmRpc2FibGVkID0gJ3RydWUnO1xuXG4gICAgICAgIGNvbnN0IGRpc3BsYXlEdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGRpc3BsYXlEdWUuY2xhc3NMaXN0LmFkZCgnZGlzcGxheUR1ZScpO1xuICAgICAgICBpZih0YXNrRHVlID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZGlzcGxheUR1ZS50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZGlzcGxheUR1ZS50ZXh0Q29udGVudCA9IHRhc2tEdWU7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgY29uc3QgZGV0YWlsc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkZXRhaWxzRGl2LmNsYXNzTGlzdC5hZGQoJ2RldGFpbHMnKTtcbiAgICAgICAgZGV0YWlsc0Rpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBjb25zdCBkZXRhaWxzTGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBkZXRhaWxzUmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGV0YWlsc0xlZnQuY2xhc3NMaXN0LmFkZCgnZGV0YWlsc0xlZnQnKTtcbiAgICAgICAgZGV0YWlsc1JpZ2h0LmNsYXNzTGlzdC5hZGQoJ2RldGFpbHNSaWdodCcpO1xuICAgIFxuICAgICAgICBjb25zdCBkZXNjTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBjb25zdCBkZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICAgICAgZGVzY0xhYmVsLmNsYXNzTGlzdC5hZGQoJ2xhYmVscycpO1xuICAgICAgICBkZXNjTGFiZWwudGV4dENvbnRlbnQgPSAnRGVzY3JpcHRpb24nO1xuICAgICAgICBkZXNjTGFiZWwuZm9yID0gJ2Rlc2MnO1xuICAgICAgICBkZXNjLmNsYXNzTGlzdC5hZGQoJ2Rlc2MnKTtcbiAgICAgICAgZGVzYy5jbGFzc0xpc3QuYWRkKCdpbmZvJyk7XG4gICAgICAgIGRlc2MudmFsdWUgPSB0YXNrRGVzYztcbiAgICAgICAgZGVzYy5wbGFjZWhvbGRlciA9ICdObyBkZXNjcmlwdGlvbi4uLic7XG4gICAgICAgIGRlc2MuZGlzYWJsZWQgPSAndHJ1ZSc7XG4gICAgXG4gICAgICAgIGNvbnN0IHByb2plY3RMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIHByb2plY3RMYWJlbC5jbGFzc0xpc3QuYWRkKCdsYWJlbHMnKTtcbiAgICAgICAgcHJvamVjdExhYmVsLmZvciA9ICdwcm9qZWN0JztcbiAgICAgICAgcHJvamVjdExhYmVsLnRleHRDb250ZW50ID0gJ1Byb2plY3QnO1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgICAgIHByb2plY3QubmFtZSA9ICdwcm9qZWN0JztcbiAgICAgICAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKCdpbnB1dCcpO1xuICAgICAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ2luZm8nKTtcbiAgICAgICAgY29uc3QgcHJvak9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBwcm9qT3B0aW9uLnZhbHVlID0gdGFza1Byb2plY3QudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgcHJvak9wdGlvbi50ZXh0Q29udGVudCA9IHRhc2tQcm9qZWN0O1xuICAgICAgICBwcm9qZWN0LmRpc2FibGVkID0gJ3RydWUnO1xuICAgIFxuICAgICAgICBjb25zdCBkYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBkYXRlTGFiZWwuY2xhc3NMaXN0LmFkZCgnbGFiZWxzJyk7XG4gICAgICAgIGRhdGVMYWJlbC5mb3IgPSAnZHVlZGF0ZSc7XG4gICAgICAgIGRhdGVMYWJlbC50ZXh0Q29udGVudCA9ICdEdWUgRGF0ZSc7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBkYXRlLnR5cGUgPSAnZGF0ZSc7XG4gICAgICAgIGRhdGUuY2xhc3NMaXN0LmFkZCgnaW5wdXQnKTtcbiAgICAgICAgZGF0ZS5jbGFzc0xpc3QuYWRkKCdpbmZvJyk7XG4gICAgICAgIGRhdGUubmFtZSA9ICdkdWVkYXRlJztcbiAgICAgICAgZGF0ZS52YWx1ZSA9IGAke3Rhc2tEdWV9YDtcbiAgICAgICAgZGF0ZS5kaXNhYmxlZCA9IHRydWU7XG4gICAgXG4gICAgICAgIGNvbnN0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBwcmlvcml0eUxhYmVsLnRleHRDb250ZW50ID0gJ1ByaW9yaXR5JztcbiAgICAgICAgcHJpb3JpdHlMYWJlbC5jbGFzc0xpc3QuYWRkKCdsYWJlbHMnKTtcbiAgICAgICAgcHJpb3JpdHlMYWJlbC5mb3IgPSAncHJpb3JpdHknO1xuICAgICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgICAgICBwcmlvcml0eS5jbGFzc0xpc3QuYWRkKCdpbnB1dCcpO1xuICAgICAgICBwcmlvcml0eS5jbGFzc0xpc3QuYWRkKCdpbmZvJyk7XG4gICAgICAgIHByaW9yaXR5Lm5hbWUgPSAncHJpb3JpdHknO1xuICAgICAgICBwcmlvcml0eS5kaXNhYmxlZCA9ICd0cnVlJztcbiAgICAgICAgY29uc3QgcHJpb09wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBwcmlvT3B0aW9uLnZhbHVlID0gdGFza1ByaW9yaXR5LnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHByaW9PcHRpb24udGV4dENvbnRlbnQgPSB0YXNrUHJpb3JpdHk7XG4gICAgXG4gICAgICAgIGNvbnN0IGJ0bkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBidG5EaXYuY2xhc3NMaXN0LmFkZCgnYnRuRGl2Jyk7XG4gICAgICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBkZWxldGVCdG4uY2xhc3NMaXN0LmFkZCgnYnRuJyk7XG4gICAgICAgIGRlbGV0ZUJ0bi50ZXh0Q29udGVudCA9ICdEZWxldGUgVGFzayc7XG4gICAgXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHRvcCk7XG4gICAgICAgIHRvcC5hcHBlbmRDaGlsZChhZGRJbWcpO1xuICAgICAgICB0b3AuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuICAgICAgICB0b3AuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgICB0b3AuYXBwZW5kQ2hpbGQoZGlzcGxheUR1ZSk7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChkZXRhaWxzRGl2KTtcbiAgICAgICAgZGV0YWlsc0Rpdi5hcHBlbmRDaGlsZChkZXRhaWxzTGVmdCk7XG4gICAgICAgIGRldGFpbHNEaXYuYXBwZW5kQ2hpbGQoZGV0YWlsc1JpZ2h0KTtcbiAgICAgICAgZGV0YWlsc0xlZnQuYXBwZW5kQ2hpbGQoZGVzY0xhYmVsKTtcbiAgICAgICAgZGV0YWlsc0xlZnQuYXBwZW5kQ2hpbGQoZGVzYyk7XG4gICAgICAgIGRldGFpbHNSaWdodC5hcHBlbmRDaGlsZChwcm9qZWN0TGFiZWwpO1xuICAgICAgICBkZXRhaWxzUmlnaHQuYXBwZW5kQ2hpbGQocHJvamVjdCk7XG4gICAgICAgIHByb2plY3QuYXBwZW5kQ2hpbGQocHJvak9wdGlvbik7XG4gICAgICAgIGRldGFpbHNSaWdodC5hcHBlbmRDaGlsZChkYXRlTGFiZWwpO1xuICAgICAgICBkZXRhaWxzUmlnaHQuYXBwZW5kQ2hpbGQoZGF0ZSk7XG4gICAgICAgIGRldGFpbHNSaWdodC5hcHBlbmRDaGlsZChwcmlvcml0eUxhYmVsKTtcbiAgICAgICAgZGV0YWlsc1JpZ2h0LmFwcGVuZENoaWxkKHByaW9yaXR5KTtcbiAgICAgICAgcHJpb3JpdHkuYXBwZW5kQ2hpbGQocHJpb09wdGlvbik7XG4gICAgICAgIGRldGFpbHNSaWdodC5hcHBlbmRDaGlsZChidG5EaXYpO1xuICAgICAgICBidG5EaXYuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcbiAgICAgICAgXG4gICAgICAgIGFkZEltZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGlmKGRldGFpbHNEaXYuc3R5bGUuZGlzcGxheSA9PSAnbm9uZScpIHtcbiAgICAgICAgICAgICAgICBkZXRhaWxzRGl2LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKGRldGFpbHNEaXYuc3R5bGUuZGlzcGxheSA9PSAnZmxleCcpIHtcbiAgICAgICAgICAgICAgICBkZXRhaWxzRGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGFwcC5yZW1vdmVUYXNrKHRhc2tQcm9qZWN0LCB0YXNrVGl0bGUpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYXBwLnRhc2tBcnIpO1xuICAgICAgICAgICAgY29udGVudC5yZW1vdmVDaGlsZChkaXYpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgcHJvamVjdCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0cycpO1xuICAgICAgICBjb25zdCBuZXdJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBpbnB1dC50eXBlID0gJ3RleHQnO1xuICAgICAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWlucHV0Jyk7XG4gICAgICAgIG5ld0l0ZW0uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1vcHRpb25zJyk7XG4gICAgICAgIGNvbnN0IGNsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGNsb3NlLnNyYyA9ICcuL2ljb25zL2RlbGV0ZS5wbmcnO1xuICAgICAgICBjbG9zZS5jbGFzc0xpc3QuYWRkKCdpY29uJyk7XG4gICAgICAgIG5ld0l0ZW0uYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgICAgIHNwYW4uYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgICAgICBwcm9qZWN0LmFwcGVuZENoaWxkKG5ld0l0ZW0pO1xuICAgICAgICBuZXdJdGVtLmFwcGVuZENoaWxkKGNsb3NlKTtcbiAgICBcbiAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGUgPT4ge1xuICAgICAgICAgICAgaWYoZS5rZXkgPT0gJ0VudGVyJykge1xuICAgICAgICAgICAgICAgIHNwYW4udGV4dENvbnRlbnQgPSBpbnB1dC52YWx1ZVswXS50b1VwcGVyQ2FzZSgpICsgaW5wdXQudmFsdWUuc2xpY2UoMSkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgICBhcHAuYWRkTmV3UHJvamVjdChzcGFuLnRleHRDb250ZW50LnRvTG93ZXJDYXNlKCkpO1xuICAgICAgICAgICAgICAgIHVwZGF0ZVByb2ooKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgXG4gICAgICAgIGNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgYXBwLnJlbW92ZVByb2plY3Qoc3Bhbi50ZXh0Q29udGVudC50b0xvd2VyQ2FzZSgpKTtcbiAgICAgICAgICAgIHByb2plY3QucmVtb3ZlQ2hpbGQobmV3SXRlbSk7XG4gICAgICAgICAgICB1cGRhdGVQcm9qKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB7dGFzaywgcHJvamVjdCwgdXBkYXRlUHJvan1cbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUNyZWF0ZTsiLCJjb25zdCBhcHAgPSAoKCkgPT4ge1xuICAgIGNvbnN0IHRhc2tBcnIgPSBbXG4gICAgICAgIC8vIFsncGVyc29uYWwnLCAnaGknLCAnaG9lJywgJ21sZW0nXSxcbiAgICAgICAgLy8gWydjaG9yZXMnLCAnaGVsbG8nLCAnaGknXSxcbiAgICAgICAgLy8gWyd0b3AnLCAnaG9lJ11cbiAgICBdO1xuXG4gICAgY29uc3QgYWRkTmV3UHJvamVjdCA9IHByb2plY3QgPT4ge1xuICAgICAgICB0YXNrQXJyLnB1c2goW3Byb2plY3RdKTtcbiAgICB9XG5cbiAgICBjb25zdCByZW1vdmVQcm9qZWN0ID0gcHJvamVjdCA9PiB7XG4gICAgICAgIGZvcihsZXQgaT0wOyBpPHRhc2tBcnIubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgaWYocHJvamVjdCA9PSB0YXNrQXJyW2ldWzBdKXtcbiAgICAgICAgICAgICAgICB0YXNrQXJyLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGdldFByb2plY3RzID0gKCkgPT4gdGFza0Fyci5tYXAoZWxlbWVudHMgPT4gZWxlbWVudHNbMF0pO1xuXG4gICAgY29uc3QgZ2V0VGFza3MgPSBwcm9qZWN0ID0+IHtcbiAgICAgICAgZm9yKGxldCBpPTA7IGk8dGFza0Fyci5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBpZih0YXNrQXJyW2ldWzBdID09IHByb2plY3QpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFza0FycltpXS5zcGxpY2UoMSwgdGFza0FycltpXS5sZW5ndGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0TnVtT2ZQcm9qcyA9ICgpID0+IHRhc2tBcnIubGVuZ3RoO1xuXG4gICAgY29uc3QgZ2V0TnVtT2ZUYXNrcyA9IHByb2plY3QgPT4ge1xuICAgICAgICBmb3IobGV0IGk9MDsgaTx0YXNrQXJyLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGlmKHRhc2tBcnJbaV1bMF0gPT0gcHJvamVjdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAodGFza0FycltpXS5sZW5ndGgtMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBhZGRUYXNrdG9BcnIgPSAocHJvamVjdCwgdGFzaykgPT4ge1xuICAgICAgICBmb3IobGV0IGk9MDsgaTx0YXNrQXJyLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGlmKHRhc2tBcnJbaV1bMF0gPT0gcHJvamVjdC50b0xvd2VyQ2FzZSgpKXtcbiAgICAgICAgICAgICAgICB0YXNrQXJyW2ldLnB1c2godGFzayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCByZW1vdmVUYXNrID0gKHByb2plY3QsIHRhc2tUaXRsZSkgPT4ge1xuICAgICAgICAvLyBmb3IobGV0IGk9MDsgaTx0YXNrQXJyLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgLy8gICAgIGlmKHRhc2tBcnJbaV1bMF0gPT0gcHJvamVjdC50b0xvd2VyQ2FzZSgpKXtcbiAgICAgICAgLy8gICAgICAgICBmb3IobGV0IGo9MDsgajx0YXNrQXJyW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIC8vICAgICAgICAgICAgIGlmKHRhc2tBcnJbaV1bal0udGl0bGUgPT0gdGFza1RpdGxlKXtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHRhc2tBcnJbaV0uc3BsaWNlKGosIDEpO1xuICAgICAgICAvLyAgICAgICAgICAgICB9XG4gICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHt0YXNrQXJyLCBhZGROZXdQcm9qZWN0LCBnZXRQcm9qZWN0cywgZ2V0VGFza3MsIGdldE51bU9mUHJvanMsIGdldE51bU9mVGFza3MsIGFkZFRhc2t0b0FyciwgcmVtb3ZlUHJvamVjdCwgcmVtb3ZlVGFza31cbn0pKCk7XG5cbmNvbnN0IFRhc2sgPSAodGl0bGUsIGRlc2MsIGRhdGUsIHByaW9yaXR5KSA9PiB7XG4gICAgY29uc3QgZ2V0VGl0bGUgPSAoKSA9PiB0aXRsZTtcbiAgICBjb25zdCBnZXREZXNjID0gKCkgPT4gZGVzYztcbiAgICBjb25zdCBnZXREYXRlID0gKCkgPT4gZGF0ZTtcbiAgICBjb25zdCBnZXRQcmlvcml0eSA9ICgpID0+IHByaW9yaXR5WzBdLnRvVXBwZXJDYXNlKCkgKyBwcmlvcml0eS5zbGljZSgxKTtcblxuICAgIHJldHVybiB7Z2V0VGl0bGUsIGdldERlc2MsIGdldERhdGUsIGdldFByaW9yaXR5fVxufVxuXG5leHBvcnQge1Rhc2ssIGFwcH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgZG9tQ3JlYXRlIGZyb20gJy4vY3JlYXRlZG9tJztcbmltcG9ydCB7IGFwcCwgVGFzayB9IGZyb20gJy4vdGFzayc7XG5cbmNvbnN0IHByb2plY3RBZGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWFkZGVyJyk7XG5wcm9qZWN0QWRkZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkb21DcmVhdGUucHJvamVjdCk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZG9tQ3JlYXRlLnVwZGF0ZVByb2opO1xuY29uc3QgY29sb3JQaWNrZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29sb3ItcGlja2VyJyk7XG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbmNvbG9yUGlja2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICBjb250ZW50LnN0eWxlLmJhY2tncm91bmQgPSBjb2xvclBpY2tlci52YWx1ZTtcbn0pO1xuXG5jb25zdCBhZGRJbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGl0bGVJY29uJyk7XG5jb25zdCBkZXRhaWxzRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRldGFpbHMnKTtcbmRldGFpbHNEaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuYWRkSW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmKGRldGFpbHNEaXYuc3R5bGUuZGlzcGxheSA9PSAnZmxleCcpe1xuICAgICAgICBkZXRhaWxzRGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfVxuICAgIGVsc2UgaWYoZGV0YWlsc0Rpdi5zdHlsZS5kaXNwbGF5ID09ICdub25lJyl7XG4gICAgICAgIGRldGFpbHNEaXYuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICB9XG59KTtcblxuY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhbmNlbEJ0bicpO1xuY29uc3QgZGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjJyk7XG5jb25zdCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RhdGUnKTtcbmNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5Jyk7XG5jb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QnKTtcbmNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlJyk7XG5cbmNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBkZXNjLnZhbHVlID0gJyc7XG4gICAgZGF0ZS52YWx1ZSA9ICcnO1xuICAgIHByaW9yaXR5LnZhbHVlID0gJ2xvdyc7XG4gICAgcHJvamVjdC52YWx1ZSA9ICdub25lJztcbiAgICB0aXRsZS52YWx1ZSA9ICcnO1xuICAgIGRldGFpbHNEaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn0pO1xuXG5jb25zdCBhZGRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkQnRuJyk7XG5hZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjcmVhdGVOZXdUYXNrKTtcbnRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBlID0+IHtcbiAgICBpZihlLmtleSA9PSAnRW50ZXInKXtcbiAgICAgICAgY3JlYXRlTmV3VGFzaygpO1xuICAgIH1cbn0pO1xuXG5mdW5jdGlvbiBjcmVhdGVOZXdUYXNrKCkge1xuICAgIGlmKHRpdGxlLnZhbHVlICE9ICcnICYmIHByb2plY3QudmFsdWUgIT0gJycpIHtcbiAgICAgICAgbGV0IG5ld1Rhc2sgPSBUYXNrKHRpdGxlLnZhbHVlLCBkZXNjLnZhbHVlLCBkYXRlLnZhbHVlLCBwcmlvcml0eS52YWx1ZSk7XG4gICAgICAgIGRvbUNyZWF0ZS50YXNrKG5ld1Rhc2suZ2V0VGl0bGUoKSwgbmV3VGFzay5nZXREZXNjKCksIHByb2plY3QudmFsdWUsIG5ld1Rhc2suZ2V0RGF0ZSgpLCBuZXdUYXNrLmdldFByaW9yaXR5KCkpO1xuICAgICAgICBkZXNjLnZhbHVlID0gJyc7XG4gICAgICAgIGRhdGUudmFsdWUgPSAnJztcbiAgICAgICAgcHJpb3JpdHkudmFsdWUgPSAnbG93JztcbiAgICAgICAgdGl0bGUudmFsdWUgPSAnJztcbiAgICAgICAgZGV0YWlsc0Rpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBhcHAuYWRkVGFza3RvQXJyKHByb2plY3QudmFsdWUsIG5ld1Rhc2spO1xuICAgICAgICBjb25zb2xlLmxvZyhhcHAudGFza0Fycik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBhbGVydCgnUGxlYXNlIGVudGVyIHRhc2sgdGl0bGUgYW5kIHNwZWNpZnkgd2hpY2ggcHJvamVjdCBpdCBiZWxvbmdzIHRvLicpO1xuICAgIH1cbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=