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
    const title = document.createElement('input');
    title.classList.add('title');
    title.classList.add('info');
    title.type = 'text';
    title.name = ' title';
    title.value = taskTitle;

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

    const projectLabel = document.createElement('label');
    projectLabel.classList.add('labels');
    projectLabel.for = 'project';
    projectLabel.textContent = 'Project';
    const project = document.createElement('select');
    project.name = 'project';
    project.classList.add('input');
    project.classList.add('info');
    project.value = taskProject;

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

    const priorityLabel = document.createElement('label');
    priorityLabel.textContent = 'Priority';
    priorityLabel.classList.add('labels');
    priorityLabel.for = 'priority';
    const priority = document.createElement('select');
    priority.classList.add('input');
    priority.classList.add('info');
    priority.name = 'priority';

    const btnDiv = document.createElement('div');
    btnDiv.classList.add('btnDiv');
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('btn');
    deleteBtn.textContent = 'Delete Task';
    const saveBtn = document.createElement('button');
    saveBtn.classList.add('btn');
    saveBtn.textContent = 'Save Changes';

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
    detailsRight.appendChild(dateLabel);
    detailsRight.appendChild(date);
    detailsRight.appendChild(priorityLabel);
    detailsRight.appendChild(priority);
    detailsRight.appendChild(btnDiv);
    btnDiv.appendChild(deleteBtn);
    btnDiv.appendChild(saveBtn);
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
/* harmony export */   "taskLogic": () => (/* binding */ taskLogic),
/* harmony export */   "Task": () => (/* binding */ Task)
/* harmony export */ });
const taskLogic = (() => {
    const taskArr = [
        ['personal', 'hi', 'hoe', 'mlem'],
        ['chores', 'hello', 'hi'],
        ['top', 'hoe']
    ];

    const addNewProject = project => {
        taskArr.push([project]);
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

    return {addNewProject, getProjects, getTasks, getNumOfProjs, getNumOfTasks, addTasktoArr}
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



// function addNewProject() {
//     const newItem = document.createElement('li');
//     const span = document.createElement('span');
//     const input = document.createElement('input');
//     input.type = 'text';
//     input.classList.add('project-input');
//     newItem.classList.add('project-options');
//     const close = document.createElement('img');
//     close.src = './icons/delete.png';
//     close.classList.add('icon');
//     newItem.appendChild(span);
//     span.appendChild(input);
//     project.appendChild(newItem);
//     newItem.appendChild(close);

//     input.addEventListener('keydown', e => {
//         if(e.key == 'Enter') {
//             span.textContent = input.value;
//             tasks.push([`${span.textContent.toLowerCase()}`]);
//         }
//     });

//     close.addEventListener('click', () => {
//         let index;
//         for(let i=0; i<tasks.length; i++) {
//             if(span.textContent.toLowerCase() == tasks[i][0]){
//                 index=i;
//             }
//         }
//         tasks.splice([index][0], 1);
//         project.removeChild(newItem);
//     });
// }

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

addBtn.addEventListener('click', _newtaskdom__WEBPACK_IMPORTED_MODULE_0__["default"]);

//const projectAdder = document.querySelector('#project-adder');
//projectAdder.addEventListener('click', addNewProject);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFROztBQUU1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLEtBQUs7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7OztBQ3RIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCLGtCQUFrQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCLGtCQUFrQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLGtCQUFrQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQVk7QUFDWixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaOzs7Ozs7OztVQ2pEQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ055QztBQUNBOztBQUV6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QiwrQkFBK0I7QUFDN0Q7QUFDQSxRQUFROztBQUVSO0FBQ0E7QUFDQSx3QkFBd0IsZ0JBQWdCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELGlDQUFpQyxtREFBYTs7QUFFOUM7QUFDQSx3RCIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9uZXd0YXNrZG9tLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVUYXNrRE9NKHRhc2tUaXRsZSwgdGFza0Rlc2MsIHRhc2tQcm9qZWN0LCB0YXNrRHVlLCB0YXNrUHJpb3JpdHkpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgndGFza0NvbnQnKTtcbiAgICBcbiAgICBjb25zdCB0b3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b3AuY2xhc3NMaXN0LmFkZCgndGFza1RvcCcpO1xuICAgIGNvbnN0IGFkZEltZyA9IG5ldyBJbWFnZSgpO1xuICAgIGFkZEltZy5zcmMgPSAnLi9pY29ucy9wbHVzLnBuZyc7XG4gICAgYWRkSW1nLmNsYXNzTGlzdC5hZGQoJ3RpdGxlSWNvbicpO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ2luZm8nKTtcbiAgICB0aXRsZS50eXBlID0gJ3RleHQnO1xuICAgIHRpdGxlLm5hbWUgPSAnIHRpdGxlJztcbiAgICB0aXRsZS52YWx1ZSA9IHRhc2tUaXRsZTtcblxuICAgIGNvbnN0IGRldGFpbHNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkZXRhaWxzRGl2LmNsYXNzTGlzdC5hZGQoJ2RldGFpbHMnKTtcbiAgICBkZXRhaWxzRGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgY29uc3QgZGV0YWlsc0xlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBkZXRhaWxzUmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkZXRhaWxzTGVmdC5jbGFzc0xpc3QuYWRkKCdkZXRhaWxzTGVmdCcpO1xuICAgIGRldGFpbHNSaWdodC5jbGFzc0xpc3QuYWRkKCdkZXRhaWxzUmlnaHQnKTtcblxuICAgIGNvbnN0IGRlc2NMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgY29uc3QgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgZGVzY0xhYmVsLmNsYXNzTGlzdC5hZGQoJ2xhYmVscycpO1xuICAgIGRlc2NMYWJlbC50ZXh0Q29udGVudCA9ICdEZXNjcmlwdGlvbic7XG4gICAgZGVzY0xhYmVsLmZvciA9ICdkZXNjJztcbiAgICBkZXNjLmNsYXNzTGlzdC5hZGQoJ2Rlc2MnKTtcbiAgICBkZXNjLmNsYXNzTGlzdC5hZGQoJ2luZm8nKTtcbiAgICBkZXNjLnZhbHVlID0gdGFza0Rlc2M7XG5cbiAgICBjb25zdCBwcm9qZWN0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIHByb2plY3RMYWJlbC5jbGFzc0xpc3QuYWRkKCdsYWJlbHMnKTtcbiAgICBwcm9qZWN0TGFiZWwuZm9yID0gJ3Byb2plY3QnO1xuICAgIHByb2plY3RMYWJlbC50ZXh0Q29udGVudCA9ICdQcm9qZWN0JztcbiAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgcHJvamVjdC5uYW1lID0gJ3Byb2plY3QnO1xuICAgIHByb2plY3QuY2xhc3NMaXN0LmFkZCgnaW5wdXQnKTtcbiAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ2luZm8nKTtcbiAgICBwcm9qZWN0LnZhbHVlID0gdGFza1Byb2plY3Q7XG5cbiAgICBjb25zdCBkYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGRhdGVMYWJlbC5jbGFzc0xpc3QuYWRkKCdsYWJlbHMnKTtcbiAgICBkYXRlTGFiZWwuZm9yID0gJ2R1ZWRhdGUnO1xuICAgIGRhdGVMYWJlbC50ZXh0Q29udGVudCA9ICdEdWUgRGF0ZSc7XG4gICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZGF0ZS50eXBlID0gJ2RhdGUnO1xuICAgIGRhdGUuY2xhc3NMaXN0LmFkZCgnaW5wdXQnKTtcbiAgICBkYXRlLmNsYXNzTGlzdC5hZGQoJ2luZm8nKTtcbiAgICBkYXRlLm5hbWUgPSAnZHVlZGF0ZSc7XG4gICAgZGF0ZS52YWx1ZSA9IGAke3Rhc2tEdWV9YDtcblxuICAgIGNvbnN0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIHByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSAnUHJpb3JpdHknO1xuICAgIHByaW9yaXR5TGFiZWwuY2xhc3NMaXN0LmFkZCgnbGFiZWxzJyk7XG4gICAgcHJpb3JpdHlMYWJlbC5mb3IgPSAncHJpb3JpdHknO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgnaW5wdXQnKTtcbiAgICBwcmlvcml0eS5jbGFzc0xpc3QuYWRkKCdpbmZvJyk7XG4gICAgcHJpb3JpdHkubmFtZSA9ICdwcmlvcml0eSc7XG5cbiAgICBjb25zdCBidG5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBidG5EaXYuY2xhc3NMaXN0LmFkZCgnYnRuRGl2Jyk7XG4gICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicpO1xuICAgIGRlbGV0ZUJ0bi50ZXh0Q29udGVudCA9ICdEZWxldGUgVGFzayc7XG4gICAgY29uc3Qgc2F2ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHNhdmVCdG4uY2xhc3NMaXN0LmFkZCgnYnRuJyk7XG4gICAgc2F2ZUJ0bi50ZXh0Q29udGVudCA9ICdTYXZlIENoYW5nZXMnO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChkaXYpO1xuICAgIGRpdi5hcHBlbmRDaGlsZCh0b3ApO1xuICAgIHRvcC5hcHBlbmRDaGlsZChhZGRJbWcpO1xuICAgIHRvcC5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGRldGFpbHNEaXYpO1xuICAgIGRldGFpbHNEaXYuYXBwZW5kQ2hpbGQoZGV0YWlsc0xlZnQpO1xuICAgIGRldGFpbHNEaXYuYXBwZW5kQ2hpbGQoZGV0YWlsc1JpZ2h0KTtcbiAgICBkZXRhaWxzTGVmdC5hcHBlbmRDaGlsZChkZXNjTGFiZWwpO1xuICAgIGRldGFpbHNMZWZ0LmFwcGVuZENoaWxkKGRlc2MpO1xuICAgIGRldGFpbHNSaWdodC5hcHBlbmRDaGlsZChwcm9qZWN0TGFiZWwpO1xuICAgIGRldGFpbHNSaWdodC5hcHBlbmRDaGlsZChwcm9qZWN0KTtcbiAgICBkZXRhaWxzUmlnaHQuYXBwZW5kQ2hpbGQoZGF0ZUxhYmVsKTtcbiAgICBkZXRhaWxzUmlnaHQuYXBwZW5kQ2hpbGQoZGF0ZSk7XG4gICAgZGV0YWlsc1JpZ2h0LmFwcGVuZENoaWxkKHByaW9yaXR5TGFiZWwpO1xuICAgIGRldGFpbHNSaWdodC5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG4gICAgZGV0YWlsc1JpZ2h0LmFwcGVuZENoaWxkKGJ0bkRpdik7XG4gICAgYnRuRGl2LmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG4gICAgYnRuRGl2LmFwcGVuZENoaWxkKHNhdmVCdG4pO1xuICAgIGZvcihsZXQgaT0wOyBpPDM7IGkrKykge1xuICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgc3dpdGNoKGkpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBvcHRpb24udmFsdWUgPSAnbG93JztcbiAgICAgICAgICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSAnTG93JztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBvcHRpb24udmFsdWUgPSAnbWVkaXVtJztcbiAgICAgICAgICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSAnTWVkaXVtJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBvcHRpb24udmFsdWUgPSAnaGlnaCc7XG4gICAgICAgICAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gJ0hpZ2gnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHByaW9yaXR5LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgfVxuICAgIHByaW9yaXR5LnZhbHVlID0gdGFza1ByaW9yaXR5O1xuICAgIGFkZEltZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaWYoZGV0YWlsc0Rpdi5zdHlsZS5kaXNwbGF5ID09ICdub25lJykge1xuICAgICAgICAgICAgZGV0YWlsc0Rpdi5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoZGV0YWlsc0Rpdi5zdHlsZS5kaXNwbGF5ID09ICdmbGV4Jykge1xuICAgICAgICAgICAgZGV0YWlsc0Rpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9XG4gICAgfSk7XG59IiwiY29uc3QgdGFza0xvZ2ljID0gKCgpID0+IHtcbiAgICBjb25zdCB0YXNrQXJyID0gW1xuICAgICAgICBbJ3BlcnNvbmFsJywgJ2hpJywgJ2hvZScsICdtbGVtJ10sXG4gICAgICAgIFsnY2hvcmVzJywgJ2hlbGxvJywgJ2hpJ10sXG4gICAgICAgIFsndG9wJywgJ2hvZSddXG4gICAgXTtcblxuICAgIGNvbnN0IGFkZE5ld1Byb2plY3QgPSBwcm9qZWN0ID0+IHtcbiAgICAgICAgdGFza0Fyci5wdXNoKFtwcm9qZWN0XSk7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0UHJvamVjdHMgPSAoKSA9PiB0YXNrQXJyLm1hcChlbGVtZW50cyA9PiBlbGVtZW50c1swXSk7XG5cbiAgICBjb25zdCBnZXRUYXNrcyA9IHByb2plY3QgPT4ge1xuICAgICAgICBmb3IobGV0IGk9MDsgaTx0YXNrQXJyLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGlmKHRhc2tBcnJbaV1bMF0gPT0gcHJvamVjdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0YXNrQXJyW2ldLnNwbGljZSgxLCB0YXNrQXJyW2ldLmxlbmd0aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBnZXROdW1PZlByb2pzID0gKCkgPT4gdGFza0Fyci5sZW5ndGg7XG5cbiAgICBjb25zdCBnZXROdW1PZlRhc2tzID0gcHJvamVjdCA9PiB7XG4gICAgICAgIGZvcihsZXQgaT0wOyBpPHRhc2tBcnIubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgaWYodGFza0FycltpXVswXSA9PSBwcm9qZWN0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICh0YXNrQXJyW2ldLmxlbmd0aC0xKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGFkZFRhc2t0b0FyciA9IChwcm9qZWN0LCB0YXNrKSA9PiB7XG4gICAgICAgIGZvcihsZXQgaT0wOyBpPHRhc2tBcnIubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgaWYodGFza0FycltpXVswXSA9PSBwcm9qZWN0KXtcbiAgICAgICAgICAgICAgICB0YXNrQXJyW2ldLnB1c2godGFzayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge2FkZE5ld1Byb2plY3QsIGdldFByb2plY3RzLCBnZXRUYXNrcywgZ2V0TnVtT2ZQcm9qcywgZ2V0TnVtT2ZUYXNrcywgYWRkVGFza3RvQXJyfVxufSkoKTtcblxuY29uc3QgVGFzayA9ICh0aXRsZSwgZGVzYywgZGF0ZSwgcHJpb3JpdHkpID0+IHtcbiAgICBjb25zdCBnZXRUaXRsZSA9ICgpID0+IHRpdGxlO1xuICAgIGNvbnN0IGdldERlc2MgPSAoKSA9PiBkZXNjO1xuICAgIGNvbnN0IGdldERhdGUgPSAoKSA9PiBkYXRlO1xuICAgIGNvbnN0IGdldFByaW9yaXR5ID0gKCkgPT4gcHJpb3JpdHk7XG5cbiAgICByZXR1cm4ge2dldFRpdGxlLCBnZXREZXNjLCBnZXREYXRlLCBnZXRQcmlvcml0eX1cbn1cblxuZXhwb3J0IHt0YXNrTG9naWMsIFRhc2t9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGNyZWF0ZVRhc2tET00gZnJvbSAnLi9uZXd0YXNrZG9tJztcbmltcG9ydCB7IHRhc2tMb2dpYywgVGFzayB9IGZyb20gJy4vdGFzayc7XG5cbi8vIGZ1bmN0aW9uIGFkZE5ld1Byb2plY3QoKSB7XG4vLyAgICAgY29uc3QgbmV3SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4vLyAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbi8vICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4vLyAgICAgaW5wdXQudHlwZSA9ICd0ZXh0Jztcbi8vICAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWlucHV0Jyk7XG4vLyAgICAgbmV3SXRlbS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LW9wdGlvbnMnKTtcbi8vICAgICBjb25zdCBjbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuLy8gICAgIGNsb3NlLnNyYyA9ICcuL2ljb25zL2RlbGV0ZS5wbmcnO1xuLy8gICAgIGNsb3NlLmNsYXNzTGlzdC5hZGQoJ2ljb24nKTtcbi8vICAgICBuZXdJdGVtLmFwcGVuZENoaWxkKHNwYW4pO1xuLy8gICAgIHNwYW4uYXBwZW5kQ2hpbGQoaW5wdXQpO1xuLy8gICAgIHByb2plY3QuYXBwZW5kQ2hpbGQobmV3SXRlbSk7XG4vLyAgICAgbmV3SXRlbS5hcHBlbmRDaGlsZChjbG9zZSk7XG5cbi8vICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZSA9PiB7XG4vLyAgICAgICAgIGlmKGUua2V5ID09ICdFbnRlcicpIHtcbi8vICAgICAgICAgICAgIHNwYW4udGV4dENvbnRlbnQgPSBpbnB1dC52YWx1ZTtcbi8vICAgICAgICAgICAgIHRhc2tzLnB1c2goW2Ake3NwYW4udGV4dENvbnRlbnQudG9Mb3dlckNhc2UoKX1gXSk7XG4vLyAgICAgICAgIH1cbi8vICAgICB9KTtcblxuLy8gICAgIGNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuLy8gICAgICAgICBsZXQgaW5kZXg7XG4vLyAgICAgICAgIGZvcihsZXQgaT0wOyBpPHRhc2tzLmxlbmd0aDsgaSsrKSB7XG4vLyAgICAgICAgICAgICBpZihzcGFuLnRleHRDb250ZW50LnRvTG93ZXJDYXNlKCkgPT0gdGFza3NbaV1bMF0pe1xuLy8gICAgICAgICAgICAgICAgIGluZGV4PWk7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgdGFza3Muc3BsaWNlKFtpbmRleF1bMF0sIDEpO1xuLy8gICAgICAgICBwcm9qZWN0LnJlbW92ZUNoaWxkKG5ld0l0ZW0pO1xuLy8gICAgIH0pO1xuLy8gfVxuXG5jb25zdCBjb2xvclBpY2tlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb2xvci1waWNrZXInKTtcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuY29sb3JQaWNrZXIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgIGNvbnRlbnQuc3R5bGUuYmFja2dyb3VuZCA9IGNvbG9yUGlja2VyLnZhbHVlO1xufSk7XG5cbmNvbnN0IGFkZEltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aXRsZUljb24nKTtcbmNvbnN0IGRldGFpbHNEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGV0YWlscycpO1xuZGV0YWlsc0Rpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG5hZGRJbWcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYoZGV0YWlsc0Rpdi5zdHlsZS5kaXNwbGF5ID09ICdmbGV4Jyl7XG4gICAgICAgIGRldGFpbHNEaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG4gICAgZWxzZSBpZihkZXRhaWxzRGl2LnN0eWxlLmRpc3BsYXkgPT0gJ25vbmUnKXtcbiAgICAgICAgZGV0YWlsc0Rpdi5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIH1cbn0pO1xuXG5jb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FuY2VsQnRuJyk7XG5jb25zdCBkZXNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2MnKTtcbmNvbnN0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGF0ZScpO1xuY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpb3JpdHknKTtcbmNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdHMnKTtcbmNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlJyk7XG5cbmNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBkZXNjLnZhbHVlID0gJyc7XG4gICAgZGF0ZS52YWx1ZSA9ICcnO1xuICAgIHByaW9yaXR5LnZhbHVlID0gJ2xvdyc7XG4gICAgcHJvamVjdC52YWx1ZSA9ICdub25lJztcbiAgICB0aXRsZS52YWx1ZSA9ICcnO1xuICAgIGRldGFpbHNEaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn0pO1xuXG5hZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjcmVhdGVUYXNrRE9NKTtcblxuLy9jb25zdCBwcm9qZWN0QWRkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1hZGRlcicpO1xuLy9wcm9qZWN0QWRkZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGROZXdQcm9qZWN0KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=