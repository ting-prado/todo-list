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

    const removeTask = (project, taskObj) => {
        for(let i=0; i<taskArr.length; i++){
            if(taskArr[i][0] == project.toLowerCase()){
                taskArr[i].splice(taskArr[i].indexOf(taskObj), 1);
            }
        }
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
        _createdom__WEBPACK_IMPORTED_MODULE_0__["default"].task(project.value, newTask);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBMkI7O0FBRTNCO0FBQ0E7QUFDQTtBQUNBLFFBQVEsa0RBQWU7QUFDdkI7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBLFlBQVksaURBQWM7QUFDMUI7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLG9EQUFpQjtBQUNqQztBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxZQUFZLG9EQUFpQjtBQUM3QjtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBLFlBQVk7QUFDWixDQUFDOztBQUVELGlFQUFlLFNBQVM7Ozs7Ozs7Ozs7Ozs7OztBQ3pMeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQixrQkFBa0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQixrQkFBa0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQixrQkFBa0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQixrQkFBa0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQixrQkFBa0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZO0FBQ1osQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQVk7QUFDWjs7Ozs7Ozs7VUNqRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOb0M7QUFDRDs7QUFFbkM7QUFDQSx1Q0FBdUMsMERBQWlCOztBQUV4RCxnQ0FBZ0MsNkRBQW9CO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0Esc0JBQXNCLDJDQUFJO0FBQzFCLFFBQVEsdURBQWM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsbURBQWdCO0FBQ3hCLG9CQUFvQiw4Q0FBVztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3JlYXRlZG9tLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2FwcH0gZnJvbSAnLi90YXNrJztcblxuY29uc3QgZG9tQ3JlYXRlID0gKCgpID0+IHtcbiAgICBjb25zdCBwcm9qSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdCcpO1xuICAgIGNvbnN0IGFkZFByb2pPcHRpb25zID0gKCkgPT4ge1xuICAgICAgICBhcHAuZ2V0UHJvamVjdHMoKS5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0WzBdLnRvVXBwZXJDYXNlKCkgKyBwcm9qZWN0LnNsaWNlKDEpO1xuICAgICAgICAgICAgcHJvaklucHV0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IHVwZGF0ZVByb2ogPSAoKSA9PiB7XG4gICAgICAgIGlmKHByb2pJbnB1dC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBwcm9qSW5wdXQuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIH1cbiAgICAgICAgYWRkUHJvak9wdGlvbnMoKTtcbiAgICB9XG5cbiAgICBjb25zdCB0YXNrID0gKHRhc2tQcm9qZWN0LCB0YXNrT2JqKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2tDb250Jyk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCB0b3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdG9wLmNsYXNzTGlzdC5hZGQoJ3Rhc2tUb3AnKTtcbiAgICAgICAgY29uc3QgYWRkSW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGFkZEltZy5zcmMgPSAnLi9pY29ucy9wbHVzLnBuZyc7XG4gICAgICAgIGFkZEltZy5jbGFzc0xpc3QuYWRkKCd0aXRsZUljb24nKTtcbiAgICBcbiAgICAgICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBjaGVja2JveC50eXBlID0gJ2NoZWNrYm94JztcbiAgICAgICAgY2hlY2tib3guY2xhc3NMaXN0LmFkZCgnY2hlY2tib3gnKTtcbiAgICBcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdpbmZvJyk7XG4gICAgICAgIHRpdGxlLnR5cGUgPSAndGV4dCc7XG4gICAgICAgIHRpdGxlLm5hbWUgPSAnIHRpdGxlJztcbiAgICAgICAgdGl0bGUudmFsdWUgPSB0YXNrT2JqLmdldFRpdGxlKCk7XG4gICAgICAgIHRpdGxlLmRpc2FibGVkID0gJ3RydWUnO1xuXG4gICAgICAgIGNvbnN0IGRpc3BsYXlEdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGRpc3BsYXlEdWUuY2xhc3NMaXN0LmFkZCgnZGlzcGxheUR1ZScpO1xuICAgICAgICBpZih0YXNrT2JqLmdldERhdGUoKSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGRpc3BsYXlEdWUudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRpc3BsYXlEdWUudGV4dENvbnRlbnQgPSB0YXNrT2JqLmdldERhdGUoKTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBjb25zdCBkZXRhaWxzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRldGFpbHNEaXYuY2xhc3NMaXN0LmFkZCgnZGV0YWlscycpO1xuICAgICAgICBkZXRhaWxzRGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIGNvbnN0IGRldGFpbHNMZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGRldGFpbHNSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkZXRhaWxzTGVmdC5jbGFzc0xpc3QuYWRkKCdkZXRhaWxzTGVmdCcpO1xuICAgICAgICBkZXRhaWxzUmlnaHQuY2xhc3NMaXN0LmFkZCgnZGV0YWlsc1JpZ2h0Jyk7XG4gICAgXG4gICAgICAgIGNvbnN0IGRlc2NMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGNvbnN0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgICAgICBkZXNjTGFiZWwuY2xhc3NMaXN0LmFkZCgnbGFiZWxzJyk7XG4gICAgICAgIGRlc2NMYWJlbC50ZXh0Q29udGVudCA9ICdEZXNjcmlwdGlvbic7XG4gICAgICAgIGRlc2NMYWJlbC5mb3IgPSAnZGVzYyc7XG4gICAgICAgIGRlc2MuY2xhc3NMaXN0LmFkZCgnZGVzYycpO1xuICAgICAgICBkZXNjLmNsYXNzTGlzdC5hZGQoJ2luZm8nKTtcbiAgICAgICAgZGVzYy52YWx1ZSA9IHRhc2tPYmouZ2V0RGVzYygpO1xuICAgICAgICBkZXNjLnBsYWNlaG9sZGVyID0gJ05vIGRlc2NyaXB0aW9uLi4uJztcbiAgICAgICAgZGVzYy5kaXNhYmxlZCA9ICd0cnVlJztcbiAgICBcbiAgICAgICAgY29uc3QgcHJvamVjdExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgcHJvamVjdExhYmVsLmNsYXNzTGlzdC5hZGQoJ2xhYmVscycpO1xuICAgICAgICBwcm9qZWN0TGFiZWwuZm9yID0gJ3Byb2plY3QnO1xuICAgICAgICBwcm9qZWN0TGFiZWwudGV4dENvbnRlbnQgPSAnUHJvamVjdCc7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICAgICAgcHJvamVjdC5uYW1lID0gJ3Byb2plY3QnO1xuICAgICAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ2lucHV0Jyk7XG4gICAgICAgIHByb2plY3QuY2xhc3NMaXN0LmFkZCgnaW5mbycpO1xuICAgICAgICBjb25zdCBwcm9qT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIHByb2pPcHRpb24udmFsdWUgPSB0YXNrUHJvamVjdC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBwcm9qT3B0aW9uLnRleHRDb250ZW50ID0gdGFza1Byb2plY3Q7XG4gICAgICAgIHByb2plY3QuZGlzYWJsZWQgPSAndHJ1ZSc7XG4gICAgXG4gICAgICAgIGNvbnN0IGRhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGRhdGVMYWJlbC5jbGFzc0xpc3QuYWRkKCdsYWJlbHMnKTtcbiAgICAgICAgZGF0ZUxhYmVsLmZvciA9ICdkdWVkYXRlJztcbiAgICAgICAgZGF0ZUxhYmVsLnRleHRDb250ZW50ID0gJ0R1ZSBEYXRlJztcbiAgICAgICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGRhdGUudHlwZSA9ICdkYXRlJztcbiAgICAgICAgZGF0ZS5jbGFzc0xpc3QuYWRkKCdpbnB1dCcpO1xuICAgICAgICBkYXRlLmNsYXNzTGlzdC5hZGQoJ2luZm8nKTtcbiAgICAgICAgZGF0ZS5uYW1lID0gJ2R1ZWRhdGUnO1xuICAgICAgICBkYXRlLnZhbHVlID0gdGFza09iai5nZXREYXRlKCk7XG4gICAgICAgIGRhdGUuZGlzYWJsZWQgPSB0cnVlO1xuICAgIFxuICAgICAgICBjb25zdCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgcHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudCA9ICdQcmlvcml0eSc7XG4gICAgICAgIHByaW9yaXR5TGFiZWwuY2xhc3NMaXN0LmFkZCgnbGFiZWxzJyk7XG4gICAgICAgIHByaW9yaXR5TGFiZWwuZm9yID0gJ3ByaW9yaXR5JztcbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICAgICAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgnaW5wdXQnKTtcbiAgICAgICAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgnaW5mbycpO1xuICAgICAgICBwcmlvcml0eS5uYW1lID0gJ3ByaW9yaXR5JztcbiAgICAgICAgcHJpb3JpdHkuZGlzYWJsZWQgPSAndHJ1ZSc7XG4gICAgICAgIGNvbnN0IHByaW9PcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgcHJpb09wdGlvbi52YWx1ZSA9IHRhc2tPYmouZ2V0UHJpb3JpdHkoKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBwcmlvT3B0aW9uLnRleHRDb250ZW50ID0gdGFza09iai5nZXRQcmlvcml0eSgpO1xuICAgIFxuICAgICAgICBjb25zdCBidG5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYnRuRGl2LmNsYXNzTGlzdC5hZGQoJ2J0bkRpdicpO1xuICAgICAgICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicpO1xuICAgICAgICBkZWxldGVCdG4udGV4dENvbnRlbnQgPSAnRGVsZXRlIFRhc2snO1xuICAgIFxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGRpdik7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZCh0b3ApO1xuICAgICAgICB0b3AuYXBwZW5kQ2hpbGQoYWRkSW1nKTtcbiAgICAgICAgdG9wLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcbiAgICAgICAgdG9wLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgICAgdG9wLmFwcGVuZENoaWxkKGRpc3BsYXlEdWUpO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoZGV0YWlsc0Rpdik7XG4gICAgICAgIGRldGFpbHNEaXYuYXBwZW5kQ2hpbGQoZGV0YWlsc0xlZnQpO1xuICAgICAgICBkZXRhaWxzRGl2LmFwcGVuZENoaWxkKGRldGFpbHNSaWdodCk7XG4gICAgICAgIGRldGFpbHNMZWZ0LmFwcGVuZENoaWxkKGRlc2NMYWJlbCk7XG4gICAgICAgIGRldGFpbHNMZWZ0LmFwcGVuZENoaWxkKGRlc2MpO1xuICAgICAgICBkZXRhaWxzUmlnaHQuYXBwZW5kQ2hpbGQocHJvamVjdExhYmVsKTtcbiAgICAgICAgZGV0YWlsc1JpZ2h0LmFwcGVuZENoaWxkKHByb2plY3QpO1xuICAgICAgICBwcm9qZWN0LmFwcGVuZENoaWxkKHByb2pPcHRpb24pO1xuICAgICAgICBkZXRhaWxzUmlnaHQuYXBwZW5kQ2hpbGQoZGF0ZUxhYmVsKTtcbiAgICAgICAgZGV0YWlsc1JpZ2h0LmFwcGVuZENoaWxkKGRhdGUpO1xuICAgICAgICBkZXRhaWxzUmlnaHQuYXBwZW5kQ2hpbGQocHJpb3JpdHlMYWJlbCk7XG4gICAgICAgIGRldGFpbHNSaWdodC5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG4gICAgICAgIHByaW9yaXR5LmFwcGVuZENoaWxkKHByaW9PcHRpb24pO1xuICAgICAgICBkZXRhaWxzUmlnaHQuYXBwZW5kQ2hpbGQoYnRuRGl2KTtcbiAgICAgICAgYnRuRGl2LmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG4gICAgICAgIFxuICAgICAgICBhZGRJbWcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBpZihkZXRhaWxzRGl2LnN0eWxlLmRpc3BsYXkgPT0gJ25vbmUnKSB7XG4gICAgICAgICAgICAgICAgZGV0YWlsc0Rpdi5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZihkZXRhaWxzRGl2LnN0eWxlLmRpc3BsYXkgPT0gJ2ZsZXgnKSB7XG4gICAgICAgICAgICAgICAgZGV0YWlsc0Rpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBhcHAucmVtb3ZlVGFzayh0YXNrUHJvamVjdCwgdGFza09iaik7XG4gICAgICAgICAgICBjb250ZW50LnJlbW92ZUNoaWxkKGRpdik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBwcm9qZWN0ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RzJyk7XG4gICAgICAgIGNvbnN0IG5ld0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGlucHV0LnR5cGUgPSAndGV4dCc7XG4gICAgICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtaW5wdXQnKTtcbiAgICAgICAgbmV3SXRlbS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LW9wdGlvbnMnKTtcbiAgICAgICAgY29uc3QgY2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgY2xvc2Uuc3JjID0gJy4vaWNvbnMvZGVsZXRlLnBuZyc7XG4gICAgICAgIGNsb3NlLmNsYXNzTGlzdC5hZGQoJ2ljb24nKTtcbiAgICAgICAgbmV3SXRlbS5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICAgICAgc3Bhbi5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgICAgIHByb2plY3QuYXBwZW5kQ2hpbGQobmV3SXRlbSk7XG4gICAgICAgIG5ld0l0ZW0uYXBwZW5kQ2hpbGQoY2xvc2UpO1xuICAgIFxuICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZSA9PiB7XG4gICAgICAgICAgICBpZihlLmtleSA9PSAnRW50ZXInKSB7XG4gICAgICAgICAgICAgICAgc3Bhbi50ZXh0Q29udGVudCA9IGlucHV0LnZhbHVlWzBdLnRvVXBwZXJDYXNlKCkgKyBpbnB1dC52YWx1ZS5zbGljZSgxKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICAgIGFwcC5hZGROZXdQcm9qZWN0KHNwYW4udGV4dENvbnRlbnQudG9Mb3dlckNhc2UoKSk7XG4gICAgICAgICAgICAgICAgdXBkYXRlUHJvaigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICBcbiAgICAgICAgY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBhcHAucmVtb3ZlUHJvamVjdChzcGFuLnRleHRDb250ZW50LnRvTG93ZXJDYXNlKCkpO1xuICAgICAgICAgICAgcHJvamVjdC5yZW1vdmVDaGlsZChuZXdJdGVtKTtcbiAgICAgICAgICAgIHVwZGF0ZVByb2ooKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHt0YXNrLCBwcm9qZWN0LCB1cGRhdGVQcm9qfVxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQ3JlYXRlOyIsImNvbnN0IGFwcCA9ICgoKSA9PiB7XG4gICAgY29uc3QgdGFza0FyciA9IFtcbiAgICAgICAgLy8gWydwZXJzb25hbCcsICdoaScsICdob2UnLCAnbWxlbSddLFxuICAgICAgICAvLyBbJ2Nob3JlcycsICdoZWxsbycsICdoaSddLFxuICAgICAgICAvLyBbJ3RvcCcsICdob2UnXVxuICAgIF07XG5cbiAgICBjb25zdCBhZGROZXdQcm9qZWN0ID0gcHJvamVjdCA9PiB7XG4gICAgICAgIHRhc2tBcnIucHVzaChbcHJvamVjdF0pO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbW92ZVByb2plY3QgPSBwcm9qZWN0ID0+IHtcbiAgICAgICAgZm9yKGxldCBpPTA7IGk8dGFza0Fyci5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBpZihwcm9qZWN0ID09IHRhc2tBcnJbaV1bMF0pe1xuICAgICAgICAgICAgICAgIHRhc2tBcnIuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0UHJvamVjdHMgPSAoKSA9PiB0YXNrQXJyLm1hcChlbGVtZW50cyA9PiBlbGVtZW50c1swXSk7XG5cbiAgICBjb25zdCBnZXRUYXNrcyA9IHByb2plY3QgPT4ge1xuICAgICAgICBmb3IobGV0IGk9MDsgaTx0YXNrQXJyLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGlmKHRhc2tBcnJbaV1bMF0gPT0gcHJvamVjdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0YXNrQXJyW2ldLnNwbGljZSgxLCB0YXNrQXJyW2ldLmxlbmd0aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBnZXROdW1PZlByb2pzID0gKCkgPT4gdGFza0Fyci5sZW5ndGg7XG5cbiAgICBjb25zdCBnZXROdW1PZlRhc2tzID0gcHJvamVjdCA9PiB7XG4gICAgICAgIGZvcihsZXQgaT0wOyBpPHRhc2tBcnIubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgaWYodGFza0FycltpXVswXSA9PSBwcm9qZWN0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICh0YXNrQXJyW2ldLmxlbmd0aC0xKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGFkZFRhc2t0b0FyciA9IChwcm9qZWN0LCB0YXNrKSA9PiB7XG4gICAgICAgIGZvcihsZXQgaT0wOyBpPHRhc2tBcnIubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgaWYodGFza0FycltpXVswXSA9PSBwcm9qZWN0LnRvTG93ZXJDYXNlKCkpe1xuICAgICAgICAgICAgICAgIHRhc2tBcnJbaV0ucHVzaCh0YXNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHJlbW92ZVRhc2sgPSAocHJvamVjdCwgdGFza09iaikgPT4ge1xuICAgICAgICBmb3IobGV0IGk9MDsgaTx0YXNrQXJyLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGlmKHRhc2tBcnJbaV1bMF0gPT0gcHJvamVjdC50b0xvd2VyQ2FzZSgpKXtcbiAgICAgICAgICAgICAgICB0YXNrQXJyW2ldLnNwbGljZSh0YXNrQXJyW2ldLmluZGV4T2YodGFza09iaiksIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHt0YXNrQXJyLCBhZGROZXdQcm9qZWN0LCBnZXRQcm9qZWN0cywgZ2V0VGFza3MsIGdldE51bU9mUHJvanMsIGdldE51bU9mVGFza3MsIGFkZFRhc2t0b0FyciwgcmVtb3ZlUHJvamVjdCwgcmVtb3ZlVGFza31cbn0pKCk7XG5cbmNvbnN0IFRhc2sgPSAodGl0bGUsIGRlc2MsIGRhdGUsIHByaW9yaXR5KSA9PiB7XG4gICAgY29uc3QgZ2V0VGl0bGUgPSAoKSA9PiB0aXRsZTtcbiAgICBjb25zdCBnZXREZXNjID0gKCkgPT4gZGVzYztcbiAgICBjb25zdCBnZXREYXRlID0gKCkgPT4gZGF0ZTtcbiAgICBjb25zdCBnZXRQcmlvcml0eSA9ICgpID0+IHByaW9yaXR5WzBdLnRvVXBwZXJDYXNlKCkgKyBwcmlvcml0eS5zbGljZSgxKTtcblxuICAgIHJldHVybiB7Z2V0VGl0bGUsIGdldERlc2MsIGdldERhdGUsIGdldFByaW9yaXR5fVxufVxuXG5leHBvcnQge1Rhc2ssIGFwcH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgZG9tQ3JlYXRlIGZyb20gJy4vY3JlYXRlZG9tJztcbmltcG9ydCB7IGFwcCwgVGFzayB9IGZyb20gJy4vdGFzayc7XG5cbmNvbnN0IHByb2plY3RBZGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWFkZGVyJyk7XG5wcm9qZWN0QWRkZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkb21DcmVhdGUucHJvamVjdCk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZG9tQ3JlYXRlLnVwZGF0ZVByb2opO1xuY29uc3QgY29sb3JQaWNrZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29sb3ItcGlja2VyJyk7XG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbmNvbG9yUGlja2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICBjb250ZW50LnN0eWxlLmJhY2tncm91bmQgPSBjb2xvclBpY2tlci52YWx1ZTtcbn0pO1xuXG5jb25zdCBhZGRJbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGl0bGVJY29uJyk7XG5jb25zdCBkZXRhaWxzRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRldGFpbHMnKTtcbmRldGFpbHNEaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuYWRkSW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmKGRldGFpbHNEaXYuc3R5bGUuZGlzcGxheSA9PSAnZmxleCcpe1xuICAgICAgICBkZXRhaWxzRGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfVxuICAgIGVsc2UgaWYoZGV0YWlsc0Rpdi5zdHlsZS5kaXNwbGF5ID09ICdub25lJyl7XG4gICAgICAgIGRldGFpbHNEaXYuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICB9XG59KTtcblxuY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhbmNlbEJ0bicpO1xuY29uc3QgZGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjJyk7XG5jb25zdCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RhdGUnKTtcbmNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5Jyk7XG5jb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QnKTtcbmNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlJyk7XG5cbmNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBkZXNjLnZhbHVlID0gJyc7XG4gICAgZGF0ZS52YWx1ZSA9ICcnO1xuICAgIHByaW9yaXR5LnZhbHVlID0gJ2xvdyc7XG4gICAgcHJvamVjdC52YWx1ZSA9ICdub25lJztcbiAgICB0aXRsZS52YWx1ZSA9ICcnO1xuICAgIGRldGFpbHNEaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn0pO1xuXG5jb25zdCBhZGRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkQnRuJyk7XG5hZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjcmVhdGVOZXdUYXNrKTtcbnRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBlID0+IHtcbiAgICBpZihlLmtleSA9PSAnRW50ZXInKXtcbiAgICAgICAgY3JlYXRlTmV3VGFzaygpO1xuICAgIH1cbn0pO1xuXG5mdW5jdGlvbiBjcmVhdGVOZXdUYXNrKCkge1xuICAgIGlmKHRpdGxlLnZhbHVlICE9ICcnICYmIHByb2plY3QudmFsdWUgIT0gJycpIHtcbiAgICAgICAgbGV0IG5ld1Rhc2sgPSBUYXNrKHRpdGxlLnZhbHVlLCBkZXNjLnZhbHVlLCBkYXRlLnZhbHVlLCBwcmlvcml0eS52YWx1ZSk7XG4gICAgICAgIGRvbUNyZWF0ZS50YXNrKHByb2plY3QudmFsdWUsIG5ld1Rhc2spO1xuICAgICAgICBkZXNjLnZhbHVlID0gJyc7XG4gICAgICAgIGRhdGUudmFsdWUgPSAnJztcbiAgICAgICAgcHJpb3JpdHkudmFsdWUgPSAnbG93JztcbiAgICAgICAgdGl0bGUudmFsdWUgPSAnJztcbiAgICAgICAgZGV0YWlsc0Rpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBhcHAuYWRkVGFza3RvQXJyKHByb2plY3QudmFsdWUsIG5ld1Rhc2spO1xuICAgICAgICBjb25zb2xlLmxvZyhhcHAudGFza0Fycik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBhbGVydCgnUGxlYXNlIGVudGVyIHRhc2sgdGl0bGUgYW5kIHNwZWNpZnkgd2hpY2ggcHJvamVjdCBpdCBiZWxvbmdzIHRvLicpO1xuICAgIH1cbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=