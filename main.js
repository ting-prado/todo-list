/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/newtaskdom.js":
/*!***************************!*\
  !*** ./src/newtaskdom.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createTaskDOM)
/* harmony export */ });
function createTaskDOM(taskTitle, taskDesc, taskProject, taskDue, taskPriority) {
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
    desc.disabled = 'true';

    const projectLabel = document.createElement('label');
    projectLabel.classList.add('labels');
    projectLabel.for = 'project';
    projectLabel.textContent = 'Project';
    const project = document.createElement('select');
    project.name = 'project';
    project.classList.add('input');
    project.classList.add('info');
    const option = document.createElement('option');
    option.value = taskProject.toLowerCase();
    option.textContent = taskProject;
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
    div.appendChild(detailsDiv);
    detailsDiv.appendChild(detailsLeft);
    detailsDiv.appendChild(detailsRight);
    detailsLeft.appendChild(descLabel);
    detailsLeft.appendChild(desc);
    detailsRight.appendChild(projectLabel);
    detailsRight.appendChild(project);
    project.appendChild(option);
    detailsRight.appendChild(dateLabel);
    detailsRight.appendChild(date);
    detailsRight.appendChild(priorityLabel);
    detailsRight.appendChild(priority);
    detailsRight.appendChild(btnDiv);
    btnDiv.appendChild(deleteBtn);
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

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "app": () => (/* binding */ app),
/* harmony export */   "Task": () => (/* binding */ Task)
/* harmony export */ });
const app = (() => {
    const taskArr = [
        ['personal', 'hi', 'hoe', 'mlem'],
        ['chores', 'hello', 'hi'],
        ['top', 'hoe']
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
            if(taskArr[i][0] == project){
                taskArr[i].push(task);
            }
        }
    }

    return {addNewProject, getProjects, getTasks, getNumOfProjs, getNumOfTasks, addTasktoArr, removeProject}
})();

const Task = (title, desc, date, priority) => {
    const getTitle = () => title;
    const getDesc = () => desc;
    const getDate = () => date;
    const getPriority = () => priority;

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
/* harmony import */ var _newtaskdom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newtaskdom */ "./src/newtaskdom.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/task.js");



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
            _task__WEBPACK_IMPORTED_MODULE_1__.app.addNewProject(span.textContent.toLowerCase());
        }
    });

    close.addEventListener('click', () => {
        _task__WEBPACK_IMPORTED_MODULE_1__.app.removeProject(span.textContent.toLowerCase());
        project.removeChild(newItem);
    });
}

function createNewTask() {
    (0,_newtaskdom__WEBPACK_IMPORTED_MODULE_0__["default"])('sample', 'hi', 'Personal', '2014-12-25', 'high');
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


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLEtBQUs7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7OztBQ2hJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLGtCQUFrQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCLGtCQUFrQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCLGtCQUFrQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLGtCQUFrQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQVk7QUFDWixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaOzs7Ozs7OztVQ3pEQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ055QztBQUNOOztBQUVuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVksb0RBQWlCO0FBQzdCO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLFFBQVEsb0RBQWlCO0FBQ3pCO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsSUFBSSx1REFBYTtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9uZXd0YXNrZG9tLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVUYXNrRE9NKHRhc2tUaXRsZSwgdGFza0Rlc2MsIHRhc2tQcm9qZWN0LCB0YXNrRHVlLCB0YXNrUHJpb3JpdHkpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgndGFza0NvbnQnKTtcbiAgICBcbiAgICBjb25zdCB0b3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b3AuY2xhc3NMaXN0LmFkZCgndGFza1RvcCcpO1xuICAgIGNvbnN0IGFkZEltZyA9IG5ldyBJbWFnZSgpO1xuICAgIGFkZEltZy5zcmMgPSAnLi9pY29ucy9wbHVzLnBuZyc7XG4gICAgYWRkSW1nLmNsYXNzTGlzdC5hZGQoJ3RpdGxlSWNvbicpO1xuXG4gICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNoZWNrYm94LnR5cGUgPSAnY2hlY2tib3gnO1xuICAgIGNoZWNrYm94LmNsYXNzTGlzdC5hZGQoJ2NoZWNrYm94Jyk7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdpbmZvJyk7XG4gICAgdGl0bGUudHlwZSA9ICd0ZXh0JztcbiAgICB0aXRsZS5uYW1lID0gJyB0aXRsZSc7XG4gICAgdGl0bGUudmFsdWUgPSB0YXNrVGl0bGU7XG4gICAgdGl0bGUuZGlzYWJsZWQgPSAndHJ1ZSc7XG5cbiAgICBjb25zdCBkZXRhaWxzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGV0YWlsc0Rpdi5jbGFzc0xpc3QuYWRkKCdkZXRhaWxzJyk7XG4gICAgZGV0YWlsc0Rpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGNvbnN0IGRldGFpbHNMZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZGV0YWlsc1JpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGV0YWlsc0xlZnQuY2xhc3NMaXN0LmFkZCgnZGV0YWlsc0xlZnQnKTtcbiAgICBkZXRhaWxzUmlnaHQuY2xhc3NMaXN0LmFkZCgnZGV0YWlsc1JpZ2h0Jyk7XG5cbiAgICBjb25zdCBkZXNjTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGNvbnN0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgIGRlc2NMYWJlbC5jbGFzc0xpc3QuYWRkKCdsYWJlbHMnKTtcbiAgICBkZXNjTGFiZWwudGV4dENvbnRlbnQgPSAnRGVzY3JpcHRpb24nO1xuICAgIGRlc2NMYWJlbC5mb3IgPSAnZGVzYyc7XG4gICAgZGVzYy5jbGFzc0xpc3QuYWRkKCdkZXNjJyk7XG4gICAgZGVzYy5jbGFzc0xpc3QuYWRkKCdpbmZvJyk7XG4gICAgZGVzYy52YWx1ZSA9IHRhc2tEZXNjO1xuICAgIGRlc2MuZGlzYWJsZWQgPSAndHJ1ZSc7XG5cbiAgICBjb25zdCBwcm9qZWN0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIHByb2plY3RMYWJlbC5jbGFzc0xpc3QuYWRkKCdsYWJlbHMnKTtcbiAgICBwcm9qZWN0TGFiZWwuZm9yID0gJ3Byb2plY3QnO1xuICAgIHByb2plY3RMYWJlbC50ZXh0Q29udGVudCA9ICdQcm9qZWN0JztcbiAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgcHJvamVjdC5uYW1lID0gJ3Byb2plY3QnO1xuICAgIHByb2plY3QuY2xhc3NMaXN0LmFkZCgnaW5wdXQnKTtcbiAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ2luZm8nKTtcbiAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBvcHRpb24udmFsdWUgPSB0YXNrUHJvamVjdC50b0xvd2VyQ2FzZSgpO1xuICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHRhc2tQcm9qZWN0O1xuICAgIHByb2plY3QuZGlzYWJsZWQgPSAndHJ1ZSc7XG5cbiAgICBjb25zdCBkYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGRhdGVMYWJlbC5jbGFzc0xpc3QuYWRkKCdsYWJlbHMnKTtcbiAgICBkYXRlTGFiZWwuZm9yID0gJ2R1ZWRhdGUnO1xuICAgIGRhdGVMYWJlbC50ZXh0Q29udGVudCA9ICdEdWUgRGF0ZSc7XG4gICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZGF0ZS50eXBlID0gJ2RhdGUnO1xuICAgIGRhdGUuY2xhc3NMaXN0LmFkZCgnaW5wdXQnKTtcbiAgICBkYXRlLmNsYXNzTGlzdC5hZGQoJ2luZm8nKTtcbiAgICBkYXRlLm5hbWUgPSAnZHVlZGF0ZSc7XG4gICAgZGF0ZS52YWx1ZSA9IGAke3Rhc2tEdWV9YDtcbiAgICBkYXRlLmRpc2FibGVkID0gdHJ1ZTtcblxuICAgIGNvbnN0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIHByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSAnUHJpb3JpdHknO1xuICAgIHByaW9yaXR5TGFiZWwuY2xhc3NMaXN0LmFkZCgnbGFiZWxzJyk7XG4gICAgcHJpb3JpdHlMYWJlbC5mb3IgPSAncHJpb3JpdHknO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgnaW5wdXQnKTtcbiAgICBwcmlvcml0eS5jbGFzc0xpc3QuYWRkKCdpbmZvJyk7XG4gICAgcHJpb3JpdHkubmFtZSA9ICdwcmlvcml0eSc7XG4gICAgcHJpb3JpdHkuZGlzYWJsZWQgPSAndHJ1ZSc7XG5cbiAgICBjb25zdCBidG5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBidG5EaXYuY2xhc3NMaXN0LmFkZCgnYnRuRGl2Jyk7XG4gICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicpO1xuICAgIGRlbGV0ZUJ0bi50ZXh0Q29udGVudCA9ICdEZWxldGUgVGFzayc7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGRpdik7XG4gICAgZGl2LmFwcGVuZENoaWxkKHRvcCk7XG4gICAgdG9wLmFwcGVuZENoaWxkKGFkZEltZyk7XG4gICAgdG9wLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcbiAgICB0b3AuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChkZXRhaWxzRGl2KTtcbiAgICBkZXRhaWxzRGl2LmFwcGVuZENoaWxkKGRldGFpbHNMZWZ0KTtcbiAgICBkZXRhaWxzRGl2LmFwcGVuZENoaWxkKGRldGFpbHNSaWdodCk7XG4gICAgZGV0YWlsc0xlZnQuYXBwZW5kQ2hpbGQoZGVzY0xhYmVsKTtcbiAgICBkZXRhaWxzTGVmdC5hcHBlbmRDaGlsZChkZXNjKTtcbiAgICBkZXRhaWxzUmlnaHQuYXBwZW5kQ2hpbGQocHJvamVjdExhYmVsKTtcbiAgICBkZXRhaWxzUmlnaHQuYXBwZW5kQ2hpbGQocHJvamVjdCk7XG4gICAgcHJvamVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgIGRldGFpbHNSaWdodC5hcHBlbmRDaGlsZChkYXRlTGFiZWwpO1xuICAgIGRldGFpbHNSaWdodC5hcHBlbmRDaGlsZChkYXRlKTtcbiAgICBkZXRhaWxzUmlnaHQuYXBwZW5kQ2hpbGQocHJpb3JpdHlMYWJlbCk7XG4gICAgZGV0YWlsc1JpZ2h0LmFwcGVuZENoaWxkKHByaW9yaXR5KTtcbiAgICBkZXRhaWxzUmlnaHQuYXBwZW5kQ2hpbGQoYnRuRGl2KTtcbiAgICBidG5EaXYuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcbiAgICBmb3IobGV0IGk9MDsgaTwzOyBpKyspIHtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIHN3aXRjaChpKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgb3B0aW9uLnZhbHVlID0gJ2xvdyc7XG4gICAgICAgICAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gJ0xvdyc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgb3B0aW9uLnZhbHVlID0gJ21lZGl1bSc7XG4gICAgICAgICAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gJ01lZGl1bSc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgb3B0aW9uLnZhbHVlID0gJ2hpZ2gnO1xuICAgICAgICAgICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9ICdIaWdoJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBwcmlvcml0eS5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgIH1cbiAgICBwcmlvcml0eS52YWx1ZSA9IHRhc2tQcmlvcml0eTtcbiAgICBhZGRJbWcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGlmKGRldGFpbHNEaXYuc3R5bGUuZGlzcGxheSA9PSAnbm9uZScpIHtcbiAgICAgICAgICAgIGRldGFpbHNEaXYuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGRldGFpbHNEaXYuc3R5bGUuZGlzcGxheSA9PSAnZmxleCcpIHtcbiAgICAgICAgICAgIGRldGFpbHNEaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfVxuICAgIH0pO1xufSIsImNvbnN0IGFwcCA9ICgoKSA9PiB7XG4gICAgY29uc3QgdGFza0FyciA9IFtcbiAgICAgICAgWydwZXJzb25hbCcsICdoaScsICdob2UnLCAnbWxlbSddLFxuICAgICAgICBbJ2Nob3JlcycsICdoZWxsbycsICdoaSddLFxuICAgICAgICBbJ3RvcCcsICdob2UnXVxuICAgIF07XG5cbiAgICBjb25zdCBhZGROZXdQcm9qZWN0ID0gcHJvamVjdCA9PiB7XG4gICAgICAgIHRhc2tBcnIucHVzaChbcHJvamVjdF0pO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbW92ZVByb2plY3QgPSBwcm9qZWN0ID0+IHtcbiAgICAgICAgZm9yKGxldCBpPTA7IGk8dGFza0Fyci5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBpZihwcm9qZWN0ID09IHRhc2tBcnJbaV1bMF0pe1xuICAgICAgICAgICAgICAgIHRhc2tBcnIuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0UHJvamVjdHMgPSAoKSA9PiB0YXNrQXJyLm1hcChlbGVtZW50cyA9PiBlbGVtZW50c1swXSk7XG5cbiAgICBjb25zdCBnZXRUYXNrcyA9IHByb2plY3QgPT4ge1xuICAgICAgICBmb3IobGV0IGk9MDsgaTx0YXNrQXJyLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGlmKHRhc2tBcnJbaV1bMF0gPT0gcHJvamVjdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0YXNrQXJyW2ldLnNwbGljZSgxLCB0YXNrQXJyW2ldLmxlbmd0aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBnZXROdW1PZlByb2pzID0gKCkgPT4gdGFza0Fyci5sZW5ndGg7XG5cbiAgICBjb25zdCBnZXROdW1PZlRhc2tzID0gcHJvamVjdCA9PiB7XG4gICAgICAgIGZvcihsZXQgaT0wOyBpPHRhc2tBcnIubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgaWYodGFza0FycltpXVswXSA9PSBwcm9qZWN0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICh0YXNrQXJyW2ldLmxlbmd0aC0xKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGFkZFRhc2t0b0FyciA9IChwcm9qZWN0LCB0YXNrKSA9PiB7XG4gICAgICAgIGZvcihsZXQgaT0wOyBpPHRhc2tBcnIubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgaWYodGFza0FycltpXVswXSA9PSBwcm9qZWN0KXtcbiAgICAgICAgICAgICAgICB0YXNrQXJyW2ldLnB1c2godGFzayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge2FkZE5ld1Byb2plY3QsIGdldFByb2plY3RzLCBnZXRUYXNrcywgZ2V0TnVtT2ZQcm9qcywgZ2V0TnVtT2ZUYXNrcywgYWRkVGFza3RvQXJyLCByZW1vdmVQcm9qZWN0fVxufSkoKTtcblxuY29uc3QgVGFzayA9ICh0aXRsZSwgZGVzYywgZGF0ZSwgcHJpb3JpdHkpID0+IHtcbiAgICBjb25zdCBnZXRUaXRsZSA9ICgpID0+IHRpdGxlO1xuICAgIGNvbnN0IGdldERlc2MgPSAoKSA9PiBkZXNjO1xuICAgIGNvbnN0IGdldERhdGUgPSAoKSA9PiBkYXRlO1xuICAgIGNvbnN0IGdldFByaW9yaXR5ID0gKCkgPT4gcHJpb3JpdHk7XG5cbiAgICByZXR1cm4ge2dldFRpdGxlLCBnZXREZXNjLCBnZXREYXRlLCBnZXRQcmlvcml0eX1cbn1cblxuZXhwb3J0IHthcHAsIFRhc2t9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGNyZWF0ZVRhc2tET00gZnJvbSAnLi9uZXd0YXNrZG9tJztcbmltcG9ydCB7IGFwcCwgVGFzayB9IGZyb20gJy4vdGFzayc7XG5cbmZ1bmN0aW9uIGFkZE5ld1Byb2plY3QoKSB7XG4gICAgY29uc3QgbmV3SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaW5wdXQudHlwZSA9ICd0ZXh0JztcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWlucHV0Jyk7XG4gICAgbmV3SXRlbS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LW9wdGlvbnMnKTtcbiAgICBjb25zdCBjbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGNsb3NlLnNyYyA9ICcuL2ljb25zL2RlbGV0ZS5wbmcnO1xuICAgIGNsb3NlLmNsYXNzTGlzdC5hZGQoJ2ljb24nKTtcbiAgICBuZXdJdGVtLmFwcGVuZENoaWxkKHNwYW4pO1xuICAgIHNwYW4uYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgIHByb2plY3QuYXBwZW5kQ2hpbGQobmV3SXRlbSk7XG4gICAgbmV3SXRlbS5hcHBlbmRDaGlsZChjbG9zZSk7XG5cbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZSA9PiB7XG4gICAgICAgIGlmKGUua2V5ID09ICdFbnRlcicpIHtcbiAgICAgICAgICAgIHNwYW4udGV4dENvbnRlbnQgPSBpbnB1dC52YWx1ZTtcbiAgICAgICAgICAgIGFwcC5hZGROZXdQcm9qZWN0KHNwYW4udGV4dENvbnRlbnQudG9Mb3dlckNhc2UoKSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBhcHAucmVtb3ZlUHJvamVjdChzcGFuLnRleHRDb250ZW50LnRvTG93ZXJDYXNlKCkpO1xuICAgICAgICBwcm9qZWN0LnJlbW92ZUNoaWxkKG5ld0l0ZW0pO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVOZXdUYXNrKCkge1xuICAgIGNyZWF0ZVRhc2tET00oJ3NhbXBsZScsICdoaScsICdQZXJzb25hbCcsICcyMDE0LTEyLTI1JywgJ2hpZ2gnKTtcbn1cblxuY29uc3QgY29sb3JQaWNrZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29sb3ItcGlja2VyJyk7XG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbmNvbG9yUGlja2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICBjb250ZW50LnN0eWxlLmJhY2tncm91bmQgPSBjb2xvclBpY2tlci52YWx1ZTtcbn0pO1xuXG5jb25zdCBhZGRJbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGl0bGVJY29uJyk7XG5jb25zdCBkZXRhaWxzRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRldGFpbHMnKTtcbmRldGFpbHNEaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuYWRkSW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmKGRldGFpbHNEaXYuc3R5bGUuZGlzcGxheSA9PSAnZmxleCcpe1xuICAgICAgICBkZXRhaWxzRGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfVxuICAgIGVsc2UgaWYoZGV0YWlsc0Rpdi5zdHlsZS5kaXNwbGF5ID09ICdub25lJyl7XG4gICAgICAgIGRldGFpbHNEaXYuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICB9XG59KTtcblxuY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhbmNlbEJ0bicpO1xuY29uc3QgZGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjJyk7XG5jb25zdCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RhdGUnKTtcbmNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5Jyk7XG5jb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RzJyk7XG5jb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZScpO1xuXG5jYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZGVzYy52YWx1ZSA9ICcnO1xuICAgIGRhdGUudmFsdWUgPSAnJztcbiAgICBwcmlvcml0eS52YWx1ZSA9ICdsb3cnO1xuICAgIHByb2plY3QudmFsdWUgPSAnbm9uZSc7XG4gICAgdGl0bGUudmFsdWUgPSAnJztcbiAgICBkZXRhaWxzRGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59KTtcblxuY29uc3QgYWRkQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZEJ0bicpO1xuYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY3JlYXRlTmV3VGFzayk7XG5cbmNvbnN0IHByb2plY3RBZGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWFkZGVyJyk7XG5wcm9qZWN0QWRkZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGROZXdQcm9qZWN0KTtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9