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
    const sbProject = document.querySelector('#projects');

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

    const task = (taskProject, taskObj) => {
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
        title.value = taskObj.getTitle();
        title.disabled = 'true';

        const displayDue = document.createElement('p');
        displayDue.classList.add('displayDue');
        if(taskObj.getDate() == undefined) {
            displayDue.textContent = '';
        }
        else {
            displayDue.textContent = taskObj.getDate();
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
        date.type = 'date';
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
            _task__WEBPACK_IMPORTED_MODULE_0__.app.removeTask(taskProject, taskObj);
            content.removeChild(div);
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
                _task__WEBPACK_IMPORTED_MODULE_0__.app.addNewProject(span.textContent.toLowerCase());
                updateProj();
            }
        });
    
        close.addEventListener('click', () => {
            _task__WEBPACK_IMPORTED_MODULE_0__.app.removeProject(span.textContent.toLowerCase());
            sbProject.removeChild(newItem);
            updateProj();
        });
    }

    const existingProjects = () => {
        _task__WEBPACK_IMPORTED_MODULE_0__.app.getProjects().forEach(project => {
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
                _task__WEBPACK_IMPORTED_MODULE_0__.app.removeProject(span.textContent.toLowerCase());
                sbProject.removeChild(existingItem);
                updateProj();
            });
        });
        updateProj();
    }

    return {task, newProject, existingProjects}
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
        ['personal']
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

    const removeTask = (project, taskObj) => {
        for(let i=0; i<taskArr.length; i++){
            if(taskArr[i][0] == project.toLowerCase()){
                taskArr[i].splice(taskArr[i].indexOf(taskObj), 1);
            }
        }
    }

    return {addNewProject, getProjects, getTasks, getNumOfProjs, getNumOfTasks, addTasktoArr, removeProject, removeTask}
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
projectAdder.addEventListener('click', _createdom__WEBPACK_IMPORTED_MODULE_0__["default"].newProject);

window.addEventListener('load', _createdom__WEBPACK_IMPORTED_MODULE_0__["default"].existingProjects);
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
        _createdom__WEBPACK_IMPORTED_MODULE_0__["default"].task(project.value, newTask);
        desc.value = '';
        date.value = '';
        priority.value = 'low';
        title.value = '';
        detailsDiv.style.display = 'none';
        _task__WEBPACK_IMPORTED_MODULE_1__.app.addTasktoArr(project.value, newTask);
    }
    else {
        alert('Please enter task title and specify which project it belongs to.');
    }
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTm9DO0FBQ0Q7O0FBRW5DO0FBQ0EsdUNBQXVDLDZEQUFvQjs7QUFFM0QsZ0NBQWdDLG1FQUEwQjtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLHNCQUFzQiwyQ0FBSTtBQUMxQixRQUFRLHVEQUFjO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLG1EQUFnQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3JlYXRlZG9tLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2FwcH0gZnJvbSAnLi90YXNrJztcblxuY29uc3QgZG9tQ3JlYXRlID0gKCgpID0+IHtcbiAgICBjb25zdCBwcm9qSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdCcpO1xuICAgIGNvbnN0IHNiUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0cycpO1xuXG4gICAgY29uc3QgYWRkUHJvak9wdGlvbnMgPSAoKSA9PiB7XG4gICAgICAgIGFwcC5nZXRQcm9qZWN0cygpLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3RbMF0udG9VcHBlckNhc2UoKSArIHByb2plY3Quc2xpY2UoMSk7XG4gICAgICAgICAgICBwcm9qSW5wdXQuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgdXBkYXRlUHJvaiA9ICgpID0+IHtcbiAgICAgICAgaWYocHJvaklucHV0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHByb2pJbnB1dC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgfVxuICAgICAgICBhZGRQcm9qT3B0aW9ucygpO1xuICAgIH1cblxuICAgIGNvbnN0IHRhc2sgPSAodGFza1Byb2plY3QsIHRhc2tPYmopID0+IHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgndGFza0NvbnQnKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHRvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0b3AuY2xhc3NMaXN0LmFkZCgndGFza1RvcCcpO1xuICAgICAgICBjb25zdCBhZGRJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgYWRkSW1nLnNyYyA9ICcuL2ljb25zL3BsdXMucG5nJztcbiAgICAgICAgYWRkSW1nLmNsYXNzTGlzdC5hZGQoJ3RpdGxlSWNvbicpO1xuICAgIFxuICAgICAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGNoZWNrYm94LnR5cGUgPSAnY2hlY2tib3gnO1xuICAgICAgICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKCdjaGVja2JveCcpO1xuICAgIFxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XG4gICAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ2luZm8nKTtcbiAgICAgICAgdGl0bGUudHlwZSA9ICd0ZXh0JztcbiAgICAgICAgdGl0bGUubmFtZSA9ICcgdGl0bGUnO1xuICAgICAgICB0aXRsZS52YWx1ZSA9IHRhc2tPYmouZ2V0VGl0bGUoKTtcbiAgICAgICAgdGl0bGUuZGlzYWJsZWQgPSAndHJ1ZSc7XG5cbiAgICAgICAgY29uc3QgZGlzcGxheUR1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgZGlzcGxheUR1ZS5jbGFzc0xpc3QuYWRkKCdkaXNwbGF5RHVlJyk7XG4gICAgICAgIGlmKHRhc2tPYmouZ2V0RGF0ZSgpID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZGlzcGxheUR1ZS50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZGlzcGxheUR1ZS50ZXh0Q29udGVudCA9IHRhc2tPYmouZ2V0RGF0ZSgpO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGNvbnN0IGRldGFpbHNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGV0YWlsc0Rpdi5jbGFzc0xpc3QuYWRkKCdkZXRhaWxzJyk7XG4gICAgICAgIGRldGFpbHNEaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgY29uc3QgZGV0YWlsc0xlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgZGV0YWlsc1JpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRldGFpbHNMZWZ0LmNsYXNzTGlzdC5hZGQoJ2RldGFpbHNMZWZ0Jyk7XG4gICAgICAgIGRldGFpbHNSaWdodC5jbGFzc0xpc3QuYWRkKCdkZXRhaWxzUmlnaHQnKTtcbiAgICBcbiAgICAgICAgY29uc3QgZGVzY0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgY29uc3QgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgICAgIGRlc2NMYWJlbC5jbGFzc0xpc3QuYWRkKCdsYWJlbHMnKTtcbiAgICAgICAgZGVzY0xhYmVsLnRleHRDb250ZW50ID0gJ0Rlc2NyaXB0aW9uJztcbiAgICAgICAgZGVzY0xhYmVsLmZvciA9ICdkZXNjJztcbiAgICAgICAgZGVzYy5jbGFzc0xpc3QuYWRkKCdkZXNjJyk7XG4gICAgICAgIGRlc2MuY2xhc3NMaXN0LmFkZCgnaW5mbycpO1xuICAgICAgICBkZXNjLnZhbHVlID0gdGFza09iai5nZXREZXNjKCk7XG4gICAgICAgIGRlc2MucGxhY2Vob2xkZXIgPSAnTm8gZGVzY3JpcHRpb24uLi4nO1xuICAgICAgICBkZXNjLmRpc2FibGVkID0gJ3RydWUnO1xuICAgIFxuICAgICAgICBjb25zdCBwcm9qZWN0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBwcm9qZWN0TGFiZWwuY2xhc3NMaXN0LmFkZCgnbGFiZWxzJyk7XG4gICAgICAgIHByb2plY3RMYWJlbC5mb3IgPSAncHJvamVjdCc7XG4gICAgICAgIHByb2plY3RMYWJlbC50ZXh0Q29udGVudCA9ICdQcm9qZWN0JztcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgICAgICBwcm9qZWN0Lm5hbWUgPSAncHJvamVjdCc7XG4gICAgICAgIHByb2plY3QuY2xhc3NMaXN0LmFkZCgnaW5wdXQnKTtcbiAgICAgICAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKCdpbmZvJyk7XG4gICAgICAgIGNvbnN0IHByb2pPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgcHJvak9wdGlvbi52YWx1ZSA9IHRhc2tQcm9qZWN0LnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHByb2pPcHRpb24udGV4dENvbnRlbnQgPSB0YXNrUHJvamVjdDtcbiAgICAgICAgcHJvamVjdC5kaXNhYmxlZCA9ICd0cnVlJztcbiAgICBcbiAgICAgICAgY29uc3QgZGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgZGF0ZUxhYmVsLmNsYXNzTGlzdC5hZGQoJ2xhYmVscycpO1xuICAgICAgICBkYXRlTGFiZWwuZm9yID0gJ2R1ZWRhdGUnO1xuICAgICAgICBkYXRlTGFiZWwudGV4dENvbnRlbnQgPSAnRHVlIERhdGUnO1xuICAgICAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgZGF0ZS50eXBlID0gJ2RhdGUnO1xuICAgICAgICBkYXRlLmNsYXNzTGlzdC5hZGQoJ2lucHV0Jyk7XG4gICAgICAgIGRhdGUuY2xhc3NMaXN0LmFkZCgnaW5mbycpO1xuICAgICAgICBkYXRlLm5hbWUgPSAnZHVlZGF0ZSc7XG4gICAgICAgIGRhdGUudmFsdWUgPSB0YXNrT2JqLmdldERhdGUoKTtcbiAgICAgICAgZGF0ZS5kaXNhYmxlZCA9IHRydWU7XG4gICAgXG4gICAgICAgIGNvbnN0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBwcmlvcml0eUxhYmVsLnRleHRDb250ZW50ID0gJ1ByaW9yaXR5JztcbiAgICAgICAgcHJpb3JpdHlMYWJlbC5jbGFzc0xpc3QuYWRkKCdsYWJlbHMnKTtcbiAgICAgICAgcHJpb3JpdHlMYWJlbC5mb3IgPSAncHJpb3JpdHknO1xuICAgICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgICAgICBwcmlvcml0eS5jbGFzc0xpc3QuYWRkKCdpbnB1dCcpO1xuICAgICAgICBwcmlvcml0eS5jbGFzc0xpc3QuYWRkKCdpbmZvJyk7XG4gICAgICAgIHByaW9yaXR5Lm5hbWUgPSAncHJpb3JpdHknO1xuICAgICAgICBwcmlvcml0eS5kaXNhYmxlZCA9ICd0cnVlJztcbiAgICAgICAgY29uc3QgcHJpb09wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBwcmlvT3B0aW9uLnZhbHVlID0gdGFza09iai5nZXRQcmlvcml0eSgpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHByaW9PcHRpb24udGV4dENvbnRlbnQgPSB0YXNrT2JqLmdldFByaW9yaXR5KCk7XG4gICAgXG4gICAgICAgIGNvbnN0IGJ0bkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBidG5EaXYuY2xhc3NMaXN0LmFkZCgnYnRuRGl2Jyk7XG4gICAgICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBkZWxldGVCdG4uY2xhc3NMaXN0LmFkZCgnYnRuJyk7XG4gICAgICAgIGRlbGV0ZUJ0bi50ZXh0Q29udGVudCA9ICdEZWxldGUgVGFzayc7XG4gICAgXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHRvcCk7XG4gICAgICAgIHRvcC5hcHBlbmRDaGlsZChhZGRJbWcpO1xuICAgICAgICB0b3AuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuICAgICAgICB0b3AuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgICB0b3AuYXBwZW5kQ2hpbGQoZGlzcGxheUR1ZSk7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChkZXRhaWxzRGl2KTtcbiAgICAgICAgZGV0YWlsc0Rpdi5hcHBlbmRDaGlsZChkZXRhaWxzTGVmdCk7XG4gICAgICAgIGRldGFpbHNEaXYuYXBwZW5kQ2hpbGQoZGV0YWlsc1JpZ2h0KTtcbiAgICAgICAgZGV0YWlsc0xlZnQuYXBwZW5kQ2hpbGQoZGVzY0xhYmVsKTtcbiAgICAgICAgZGV0YWlsc0xlZnQuYXBwZW5kQ2hpbGQoZGVzYyk7XG4gICAgICAgIGRldGFpbHNSaWdodC5hcHBlbmRDaGlsZChwcm9qZWN0TGFiZWwpO1xuICAgICAgICBkZXRhaWxzUmlnaHQuYXBwZW5kQ2hpbGQocHJvamVjdCk7XG4gICAgICAgIHByb2plY3QuYXBwZW5kQ2hpbGQocHJvak9wdGlvbik7XG4gICAgICAgIGRldGFpbHNSaWdodC5hcHBlbmRDaGlsZChkYXRlTGFiZWwpO1xuICAgICAgICBkZXRhaWxzUmlnaHQuYXBwZW5kQ2hpbGQoZGF0ZSk7XG4gICAgICAgIGRldGFpbHNSaWdodC5hcHBlbmRDaGlsZChwcmlvcml0eUxhYmVsKTtcbiAgICAgICAgZGV0YWlsc1JpZ2h0LmFwcGVuZENoaWxkKHByaW9yaXR5KTtcbiAgICAgICAgcHJpb3JpdHkuYXBwZW5kQ2hpbGQocHJpb09wdGlvbik7XG4gICAgICAgIGRldGFpbHNSaWdodC5hcHBlbmRDaGlsZChidG5EaXYpO1xuICAgICAgICBidG5EaXYuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcbiAgICAgICAgXG4gICAgICAgIGFkZEltZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGlmKGRldGFpbHNEaXYuc3R5bGUuZGlzcGxheSA9PSAnbm9uZScpIHtcbiAgICAgICAgICAgICAgICBkZXRhaWxzRGl2LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKGRldGFpbHNEaXYuc3R5bGUuZGlzcGxheSA9PSAnZmxleCcpIHtcbiAgICAgICAgICAgICAgICBkZXRhaWxzRGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGFwcC5yZW1vdmVUYXNrKHRhc2tQcm9qZWN0LCB0YXNrT2JqKTtcbiAgICAgICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoZGl2KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IG5ld1Byb2plY3QgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGlucHV0LnR5cGUgPSAndGV4dCc7XG4gICAgICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtaW5wdXQnKTtcbiAgICAgICAgbmV3SXRlbS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LW9wdGlvbnMnKTtcbiAgICAgICAgY29uc3QgY2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgY2xvc2Uuc3JjID0gJy4vaWNvbnMvZGVsZXRlLnBuZyc7XG4gICAgICAgIGNsb3NlLmNsYXNzTGlzdC5hZGQoJ2ljb24nKTtcbiAgICAgICAgbmV3SXRlbS5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICAgICAgc3Bhbi5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgICAgIHNiUHJvamVjdC5hcHBlbmRDaGlsZChuZXdJdGVtKTtcbiAgICAgICAgbmV3SXRlbS5hcHBlbmRDaGlsZChjbG9zZSk7XG4gICAgXG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBlID0+IHtcbiAgICAgICAgICAgIGlmKGUua2V5ID09ICdFbnRlcicpIHtcbiAgICAgICAgICAgICAgICBzcGFuLnRleHRDb250ZW50ID0gaW5wdXQudmFsdWVbMF0udG9VcHBlckNhc2UoKSArIGlucHV0LnZhbHVlLnNsaWNlKDEpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgYXBwLmFkZE5ld1Byb2plY3Qoc3Bhbi50ZXh0Q29udGVudC50b0xvd2VyQ2FzZSgpKTtcbiAgICAgICAgICAgICAgICB1cGRhdGVQcm9qKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIFxuICAgICAgICBjbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGFwcC5yZW1vdmVQcm9qZWN0KHNwYW4udGV4dENvbnRlbnQudG9Mb3dlckNhc2UoKSk7XG4gICAgICAgICAgICBzYlByb2plY3QucmVtb3ZlQ2hpbGQobmV3SXRlbSk7XG4gICAgICAgICAgICB1cGRhdGVQcm9qKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGV4aXN0aW5nUHJvamVjdHMgPSAoKSA9PiB7XG4gICAgICAgIGFwcC5nZXRQcm9qZWN0cygpLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgICAgICBjb25zdCBleGlzdGluZ0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIHNwYW4udGV4dENvbnRlbnQgPSBwcm9qZWN0WzBdLnRvVXBwZXJDYXNlKCkgKyBwcm9qZWN0LnNsaWNlKDEpO1xuICAgICAgICAgICAgZXhpc3RpbmdJdGVtLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3Qtb3B0aW9ucycpO1xuICAgICAgICAgICAgY29uc3QgY2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgIGNsb3NlLnNyYyA9ICcuL2ljb25zL2RlbGV0ZS5wbmcnO1xuICAgICAgICAgICAgY2xvc2UuY2xhc3NMaXN0LmFkZCgnaWNvbicpO1xuICAgICAgICAgICAgZXhpc3RpbmdJdGVtLmFwcGVuZENoaWxkKHNwYW4pO1xuICAgICAgICAgICAgc2JQcm9qZWN0LmFwcGVuZENoaWxkKGV4aXN0aW5nSXRlbSk7XG4gICAgICAgICAgICBleGlzdGluZ0l0ZW0uYXBwZW5kQ2hpbGQoY2xvc2UpO1xuXG4gICAgICAgICAgICBjbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBhcHAucmVtb3ZlUHJvamVjdChzcGFuLnRleHRDb250ZW50LnRvTG93ZXJDYXNlKCkpO1xuICAgICAgICAgICAgICAgIHNiUHJvamVjdC5yZW1vdmVDaGlsZChleGlzdGluZ0l0ZW0pO1xuICAgICAgICAgICAgICAgIHVwZGF0ZVByb2ooKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgdXBkYXRlUHJvaigpO1xuICAgIH1cblxuICAgIHJldHVybiB7dGFzaywgbmV3UHJvamVjdCwgZXhpc3RpbmdQcm9qZWN0c31cbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUNyZWF0ZTsiLCJjb25zdCBhcHAgPSAoKCkgPT4ge1xuICAgIGNvbnN0IHRhc2tBcnIgPSBbXG4gICAgICAgIFsncGVyc29uYWwnXVxuICAgIF07XG5cbiAgICBjb25zdCBhZGROZXdQcm9qZWN0ID0gcHJvamVjdCA9PiB7XG4gICAgICAgIHRhc2tBcnIucHVzaChbcHJvamVjdF0pO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbW92ZVByb2plY3QgPSBwcm9qZWN0ID0+IHtcbiAgICAgICAgZm9yKGxldCBpPTA7IGk8dGFza0Fyci5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBpZihwcm9qZWN0ID09IHRhc2tBcnJbaV1bMF0pe1xuICAgICAgICAgICAgICAgIHRhc2tBcnIuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0UHJvamVjdHMgPSAoKSA9PiB0YXNrQXJyLm1hcChlbGVtZW50cyA9PiBlbGVtZW50c1swXSk7XG5cbiAgICBjb25zdCBnZXRUYXNrcyA9IHByb2plY3QgPT4ge1xuICAgICAgICBmb3IobGV0IGk9MDsgaTx0YXNrQXJyLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGlmKHRhc2tBcnJbaV1bMF0gPT0gcHJvamVjdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0YXNrQXJyW2ldLnNwbGljZSgxLCB0YXNrQXJyW2ldLmxlbmd0aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBnZXROdW1PZlByb2pzID0gKCkgPT4gdGFza0Fyci5sZW5ndGg7XG5cbiAgICBjb25zdCBnZXROdW1PZlRhc2tzID0gcHJvamVjdCA9PiB7XG4gICAgICAgIGZvcihsZXQgaT0wOyBpPHRhc2tBcnIubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgaWYodGFza0FycltpXVswXSA9PSBwcm9qZWN0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICh0YXNrQXJyW2ldLmxlbmd0aC0xKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGFkZFRhc2t0b0FyciA9IChwcm9qZWN0LCB0YXNrKSA9PiB7XG4gICAgICAgIGZvcihsZXQgaT0wOyBpPHRhc2tBcnIubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgaWYodGFza0FycltpXVswXSA9PSBwcm9qZWN0LnRvTG93ZXJDYXNlKCkpe1xuICAgICAgICAgICAgICAgIHRhc2tBcnJbaV0ucHVzaCh0YXNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHJlbW92ZVRhc2sgPSAocHJvamVjdCwgdGFza09iaikgPT4ge1xuICAgICAgICBmb3IobGV0IGk9MDsgaTx0YXNrQXJyLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGlmKHRhc2tBcnJbaV1bMF0gPT0gcHJvamVjdC50b0xvd2VyQ2FzZSgpKXtcbiAgICAgICAgICAgICAgICB0YXNrQXJyW2ldLnNwbGljZSh0YXNrQXJyW2ldLmluZGV4T2YodGFza09iaiksIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHthZGROZXdQcm9qZWN0LCBnZXRQcm9qZWN0cywgZ2V0VGFza3MsIGdldE51bU9mUHJvanMsIGdldE51bU9mVGFza3MsIGFkZFRhc2t0b0FyciwgcmVtb3ZlUHJvamVjdCwgcmVtb3ZlVGFza31cbn0pKCk7XG5cbmNvbnN0IFRhc2sgPSAodGl0bGUsIGRlc2MsIGRhdGUsIHByaW9yaXR5KSA9PiB7XG4gICAgY29uc3QgZ2V0VGl0bGUgPSAoKSA9PiB0aXRsZTtcbiAgICBjb25zdCBnZXREZXNjID0gKCkgPT4gZGVzYztcbiAgICBjb25zdCBnZXREYXRlID0gKCkgPT4gZGF0ZTtcbiAgICBjb25zdCBnZXRQcmlvcml0eSA9ICgpID0+IHByaW9yaXR5WzBdLnRvVXBwZXJDYXNlKCkgKyBwcmlvcml0eS5zbGljZSgxKTtcblxuICAgIHJldHVybiB7Z2V0VGl0bGUsIGdldERlc2MsIGdldERhdGUsIGdldFByaW9yaXR5fVxufVxuXG5leHBvcnQge1Rhc2ssIGFwcH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgZG9tQ3JlYXRlIGZyb20gJy4vY3JlYXRlZG9tJztcbmltcG9ydCB7IGFwcCwgVGFzayB9IGZyb20gJy4vdGFzayc7XG5cbmNvbnN0IHByb2plY3RBZGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWFkZGVyJyk7XG5wcm9qZWN0QWRkZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkb21DcmVhdGUubmV3UHJvamVjdCk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZG9tQ3JlYXRlLmV4aXN0aW5nUHJvamVjdHMpO1xuY29uc3QgY29sb3JQaWNrZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29sb3ItcGlja2VyJyk7XG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbmNvbG9yUGlja2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICBjb250ZW50LnN0eWxlLmJhY2tncm91bmQgPSBjb2xvclBpY2tlci52YWx1ZTtcbn0pO1xuXG5jb25zdCBhZGRJbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGl0bGVJY29uJyk7XG5jb25zdCBkZXRhaWxzRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRldGFpbHMnKTtcbmRldGFpbHNEaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuYWRkSW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmKGRldGFpbHNEaXYuc3R5bGUuZGlzcGxheSA9PSAnZmxleCcpe1xuICAgICAgICBkZXRhaWxzRGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfVxuICAgIGVsc2UgaWYoZGV0YWlsc0Rpdi5zdHlsZS5kaXNwbGF5ID09ICdub25lJyl7XG4gICAgICAgIGRldGFpbHNEaXYuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICB9XG59KTtcblxuY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhbmNlbEJ0bicpO1xuY29uc3QgZGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjJyk7XG5jb25zdCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RhdGUnKTtcbmNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5Jyk7XG5jb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QnKTtcbmNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlJyk7XG5cbmNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBkZXNjLnZhbHVlID0gJyc7XG4gICAgZGF0ZS52YWx1ZSA9ICcnO1xuICAgIHByaW9yaXR5LnZhbHVlID0gJ2xvdyc7XG4gICAgcHJvamVjdC52YWx1ZSA9ICdub25lJztcbiAgICB0aXRsZS52YWx1ZSA9ICcnO1xuICAgIGRldGFpbHNEaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn0pO1xuXG5jb25zdCBhZGRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkQnRuJyk7XG5hZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjcmVhdGVOZXdUYXNrKTtcbnRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBlID0+IHtcbiAgICBpZihlLmtleSA9PSAnRW50ZXInKXtcbiAgICAgICAgY3JlYXRlTmV3VGFzaygpO1xuICAgIH1cbn0pO1xuXG5mdW5jdGlvbiBjcmVhdGVOZXdUYXNrKCkge1xuICAgIGlmKHRpdGxlLnZhbHVlICE9ICcnICYmIHByb2plY3QudmFsdWUgIT0gJycpIHtcbiAgICAgICAgbGV0IG5ld1Rhc2sgPSBUYXNrKHRpdGxlLnZhbHVlLCBkZXNjLnZhbHVlLCBkYXRlLnZhbHVlLCBwcmlvcml0eS52YWx1ZSk7XG4gICAgICAgIGRvbUNyZWF0ZS50YXNrKHByb2plY3QudmFsdWUsIG5ld1Rhc2spO1xuICAgICAgICBkZXNjLnZhbHVlID0gJyc7XG4gICAgICAgIGRhdGUudmFsdWUgPSAnJztcbiAgICAgICAgcHJpb3JpdHkudmFsdWUgPSAnbG93JztcbiAgICAgICAgdGl0bGUudmFsdWUgPSAnJztcbiAgICAgICAgZGV0YWlsc0Rpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBhcHAuYWRkVGFza3RvQXJyKHByb2plY3QudmFsdWUsIG5ld1Rhc2spO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgYWxlcnQoJ1BsZWFzZSBlbnRlciB0YXNrIHRpdGxlIGFuZCBzcGVjaWZ5IHdoaWNoIHByb2plY3QgaXQgYmVsb25ncyB0by4nKTtcbiAgICB9XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9