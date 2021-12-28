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
/* harmony import */ var _createdom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createdom */ "./src/createdom.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/task.js");



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
projectAdder.addEventListener('click', _createdom__WEBPACK_IMPORTED_MODULE_0__["default"].project);

function createNewTask() {
    _createdom__WEBPACK_IMPORTED_MODULE_0__["default"].task('sample', 'hi', 'Personal', '2014-12-25', 'High');
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBLHVDQUF1QywwREFBaUI7O0FBRXhEO0FBQ0EsSUFBSSx1REFBYztBQUNsQixDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NyZWF0ZWRvbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHthcHB9IGZyb20gJy4vdGFzayc7XG5cbmNvbnN0IGRvbUNyZWF0ZSA9ICgoKSA9PiB7XG4gICAgY29uc3QgcHJvaklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QnKTtcbiAgICBjb25zdCBhZGRQcm9qT3B0aW9ucyA9ICgpID0+IHtcbiAgICAgICAgYXBwLmdldFByb2plY3RzKCkuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gcHJvamVjdFswXS50b1VwcGVyQ2FzZSgpICsgcHJvamVjdC5zbGljZSgxKTtcbiAgICAgICAgICAgIHByb2pJbnB1dC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCB1cGRhdGVQcm9qID0gKCkgPT4ge1xuICAgICAgICBpZihwcm9qSW5wdXQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcHJvaklucHV0LmlubmVySFRNTCA9ICcnO1xuICAgICAgICB9XG4gICAgICAgIGFkZFByb2pPcHRpb25zKCk7XG4gICAgfVxuXG4gICAgY29uc3QgdGFzayA9ICh0YXNrVGl0bGUsIHRhc2tEZXNjLCB0YXNrUHJvamVjdCwgdGFza0R1ZSwgdGFza1ByaW9yaXR5KSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2tDb250Jyk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCB0b3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdG9wLmNsYXNzTGlzdC5hZGQoJ3Rhc2tUb3AnKTtcbiAgICAgICAgY29uc3QgYWRkSW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGFkZEltZy5zcmMgPSAnLi9pY29ucy9wbHVzLnBuZyc7XG4gICAgICAgIGFkZEltZy5jbGFzc0xpc3QuYWRkKCd0aXRsZUljb24nKTtcbiAgICBcbiAgICAgICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBjaGVja2JveC50eXBlID0gJ2NoZWNrYm94JztcbiAgICAgICAgY2hlY2tib3guY2xhc3NMaXN0LmFkZCgnY2hlY2tib3gnKTtcbiAgICBcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdpbmZvJyk7XG4gICAgICAgIHRpdGxlLnR5cGUgPSAndGV4dCc7XG4gICAgICAgIHRpdGxlLm5hbWUgPSAnIHRpdGxlJztcbiAgICAgICAgdGl0bGUudmFsdWUgPSB0YXNrVGl0bGU7XG4gICAgICAgIHRpdGxlLmRpc2FibGVkID0gJ3RydWUnO1xuICAgIFxuICAgICAgICBjb25zdCBkZXRhaWxzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRldGFpbHNEaXYuY2xhc3NMaXN0LmFkZCgnZGV0YWlscycpO1xuICAgICAgICBkZXRhaWxzRGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIGNvbnN0IGRldGFpbHNMZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGRldGFpbHNSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkZXRhaWxzTGVmdC5jbGFzc0xpc3QuYWRkKCdkZXRhaWxzTGVmdCcpO1xuICAgICAgICBkZXRhaWxzUmlnaHQuY2xhc3NMaXN0LmFkZCgnZGV0YWlsc1JpZ2h0Jyk7XG4gICAgXG4gICAgICAgIGNvbnN0IGRlc2NMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGNvbnN0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgICAgICBkZXNjTGFiZWwuY2xhc3NMaXN0LmFkZCgnbGFiZWxzJyk7XG4gICAgICAgIGRlc2NMYWJlbC50ZXh0Q29udGVudCA9ICdEZXNjcmlwdGlvbic7XG4gICAgICAgIGRlc2NMYWJlbC5mb3IgPSAnZGVzYyc7XG4gICAgICAgIGRlc2MuY2xhc3NMaXN0LmFkZCgnZGVzYycpO1xuICAgICAgICBkZXNjLmNsYXNzTGlzdC5hZGQoJ2luZm8nKTtcbiAgICAgICAgZGVzYy52YWx1ZSA9IHRhc2tEZXNjO1xuICAgICAgICBkZXNjLmRpc2FibGVkID0gJ3RydWUnO1xuICAgIFxuICAgICAgICBjb25zdCBwcm9qZWN0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBwcm9qZWN0TGFiZWwuY2xhc3NMaXN0LmFkZCgnbGFiZWxzJyk7XG4gICAgICAgIHByb2plY3RMYWJlbC5mb3IgPSAncHJvamVjdCc7XG4gICAgICAgIHByb2plY3RMYWJlbC50ZXh0Q29udGVudCA9ICdQcm9qZWN0JztcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgICAgICBwcm9qZWN0Lm5hbWUgPSAncHJvamVjdCc7XG4gICAgICAgIHByb2plY3QuY2xhc3NMaXN0LmFkZCgnaW5wdXQnKTtcbiAgICAgICAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKCdpbmZvJyk7XG4gICAgICAgIGNvbnN0IHByb2pPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgcHJvak9wdGlvbi52YWx1ZSA9IHRhc2tQcm9qZWN0LnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHByb2pPcHRpb24udGV4dENvbnRlbnQgPSB0YXNrUHJvamVjdDtcbiAgICAgICAgcHJvamVjdC5kaXNhYmxlZCA9ICd0cnVlJztcbiAgICBcbiAgICAgICAgY29uc3QgZGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgZGF0ZUxhYmVsLmNsYXNzTGlzdC5hZGQoJ2xhYmVscycpO1xuICAgICAgICBkYXRlTGFiZWwuZm9yID0gJ2R1ZWRhdGUnO1xuICAgICAgICBkYXRlTGFiZWwudGV4dENvbnRlbnQgPSAnRHVlIERhdGUnO1xuICAgICAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgZGF0ZS50eXBlID0gJ2RhdGUnO1xuICAgICAgICBkYXRlLmNsYXNzTGlzdC5hZGQoJ2lucHV0Jyk7XG4gICAgICAgIGRhdGUuY2xhc3NMaXN0LmFkZCgnaW5mbycpO1xuICAgICAgICBkYXRlLm5hbWUgPSAnZHVlZGF0ZSc7XG4gICAgICAgIGRhdGUudmFsdWUgPSBgJHt0YXNrRHVlfWA7XG4gICAgICAgIGRhdGUuZGlzYWJsZWQgPSB0cnVlO1xuICAgIFxuICAgICAgICBjb25zdCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgcHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudCA9ICdQcmlvcml0eSc7XG4gICAgICAgIHByaW9yaXR5TGFiZWwuY2xhc3NMaXN0LmFkZCgnbGFiZWxzJyk7XG4gICAgICAgIHByaW9yaXR5TGFiZWwuZm9yID0gJ3ByaW9yaXR5JztcbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICAgICAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgnaW5wdXQnKTtcbiAgICAgICAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgnaW5mbycpO1xuICAgICAgICBwcmlvcml0eS5uYW1lID0gJ3ByaW9yaXR5JztcbiAgICAgICAgcHJpb3JpdHkuZGlzYWJsZWQgPSAndHJ1ZSc7XG4gICAgICAgIGNvbnN0IHByaW9PcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgcHJpb09wdGlvbi52YWx1ZSA9IHRhc2tQcmlvcml0eS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBwcmlvT3B0aW9uLnRleHRDb250ZW50ID0gdGFza1ByaW9yaXR5O1xuICAgIFxuICAgICAgICBjb25zdCBidG5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYnRuRGl2LmNsYXNzTGlzdC5hZGQoJ2J0bkRpdicpO1xuICAgICAgICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicpO1xuICAgICAgICBkZWxldGVCdG4udGV4dENvbnRlbnQgPSAnRGVsZXRlIFRhc2snO1xuICAgIFxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGRpdik7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZCh0b3ApO1xuICAgICAgICB0b3AuYXBwZW5kQ2hpbGQoYWRkSW1nKTtcbiAgICAgICAgdG9wLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcbiAgICAgICAgdG9wLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGRldGFpbHNEaXYpO1xuICAgICAgICBkZXRhaWxzRGl2LmFwcGVuZENoaWxkKGRldGFpbHNMZWZ0KTtcbiAgICAgICAgZGV0YWlsc0Rpdi5hcHBlbmRDaGlsZChkZXRhaWxzUmlnaHQpO1xuICAgICAgICBkZXRhaWxzTGVmdC5hcHBlbmRDaGlsZChkZXNjTGFiZWwpO1xuICAgICAgICBkZXRhaWxzTGVmdC5hcHBlbmRDaGlsZChkZXNjKTtcbiAgICAgICAgZGV0YWlsc1JpZ2h0LmFwcGVuZENoaWxkKHByb2plY3RMYWJlbCk7XG4gICAgICAgIGRldGFpbHNSaWdodC5hcHBlbmRDaGlsZChwcm9qZWN0KTtcbiAgICAgICAgcHJvamVjdC5hcHBlbmRDaGlsZChwcm9qT3B0aW9uKTtcbiAgICAgICAgZGV0YWlsc1JpZ2h0LmFwcGVuZENoaWxkKGRhdGVMYWJlbCk7XG4gICAgICAgIGRldGFpbHNSaWdodC5hcHBlbmRDaGlsZChkYXRlKTtcbiAgICAgICAgZGV0YWlsc1JpZ2h0LmFwcGVuZENoaWxkKHByaW9yaXR5TGFiZWwpO1xuICAgICAgICBkZXRhaWxzUmlnaHQuYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuICAgICAgICBwcmlvcml0eS5hcHBlbmRDaGlsZChwcmlvT3B0aW9uKTtcbiAgICAgICAgZGV0YWlsc1JpZ2h0LmFwcGVuZENoaWxkKGJ0bkRpdik7XG4gICAgICAgIGJ0bkRpdi5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xuICAgICAgICBcbiAgICAgICAgYWRkSW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYoZGV0YWlsc0Rpdi5zdHlsZS5kaXNwbGF5ID09ICdub25lJykge1xuICAgICAgICAgICAgICAgIGRldGFpbHNEaXYuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYoZGV0YWlsc0Rpdi5zdHlsZS5kaXNwbGF5ID09ICdmbGV4Jykge1xuICAgICAgICAgICAgICAgIGRldGFpbHNEaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHByb2plY3QgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdHMnKTtcbiAgICAgICAgY29uc3QgbmV3SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgaW5wdXQudHlwZSA9ICd0ZXh0JztcbiAgICAgICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1pbnB1dCcpO1xuICAgICAgICBuZXdJdGVtLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3Qtb3B0aW9ucycpO1xuICAgICAgICBjb25zdCBjbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBjbG9zZS5zcmMgPSAnLi9pY29ucy9kZWxldGUucG5nJztcbiAgICAgICAgY2xvc2UuY2xhc3NMaXN0LmFkZCgnaWNvbicpO1xuICAgICAgICBuZXdJdGVtLmFwcGVuZENoaWxkKHNwYW4pO1xuICAgICAgICBzcGFuLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICAgICAgcHJvamVjdC5hcHBlbmRDaGlsZChuZXdJdGVtKTtcbiAgICAgICAgbmV3SXRlbS5hcHBlbmRDaGlsZChjbG9zZSk7XG4gICAgXG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBlID0+IHtcbiAgICAgICAgICAgIGlmKGUua2V5ID09ICdFbnRlcicpIHtcbiAgICAgICAgICAgICAgICBzcGFuLnRleHRDb250ZW50ID0gaW5wdXQudmFsdWVbMF0udG9VcHBlckNhc2UoKSArIGlucHV0LnZhbHVlLnNsaWNlKDEpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgYXBwLmFkZE5ld1Byb2plY3Qoc3Bhbi50ZXh0Q29udGVudC50b0xvd2VyQ2FzZSgpKTtcbiAgICAgICAgICAgICAgICB1cGRhdGVQcm9qKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIFxuICAgICAgICBjbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGFwcC5yZW1vdmVQcm9qZWN0KHNwYW4udGV4dENvbnRlbnQudG9Mb3dlckNhc2UoKSk7XG4gICAgICAgICAgICBwcm9qZWN0LnJlbW92ZUNoaWxkKG5ld0l0ZW0pO1xuICAgICAgICAgICAgdXBkYXRlUHJvaigpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4ge3Rhc2ssIHByb2plY3QsIHVwZGF0ZVByb2p9XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBkb21DcmVhdGU7IiwiY29uc3QgYXBwID0gKCgpID0+IHtcbiAgICBjb25zdCB0YXNrQXJyID0gW1xuICAgICAgICAvLyBbJ3BlcnNvbmFsJywgJ2hpJywgJ2hvZScsICdtbGVtJ10sXG4gICAgICAgIC8vIFsnY2hvcmVzJywgJ2hlbGxvJywgJ2hpJ10sXG4gICAgICAgIC8vIFsndG9wJywgJ2hvZSddXG4gICAgXTtcblxuICAgIGNvbnN0IGFkZE5ld1Byb2plY3QgPSBwcm9qZWN0ID0+IHtcbiAgICAgICAgdGFza0Fyci5wdXNoKFtwcm9qZWN0XSk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlUHJvamVjdCA9IHByb2plY3QgPT4ge1xuICAgICAgICBmb3IobGV0IGk9MDsgaTx0YXNrQXJyLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGlmKHByb2plY3QgPT0gdGFza0FycltpXVswXSl7XG4gICAgICAgICAgICAgICAgdGFza0Fyci5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBnZXRQcm9qZWN0cyA9ICgpID0+IHRhc2tBcnIubWFwKGVsZW1lbnRzID0+IGVsZW1lbnRzWzBdKTtcblxuICAgIGNvbnN0IGdldFRhc2tzID0gcHJvamVjdCA9PiB7XG4gICAgICAgIGZvcihsZXQgaT0wOyBpPHRhc2tBcnIubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgaWYodGFza0FycltpXVswXSA9PSBwcm9qZWN0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhc2tBcnJbaV0uc3BsaWNlKDEsIHRhc2tBcnJbaV0ubGVuZ3RoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGdldE51bU9mUHJvanMgPSAoKSA9PiB0YXNrQXJyLmxlbmd0aDtcblxuICAgIGNvbnN0IGdldE51bU9mVGFza3MgPSBwcm9qZWN0ID0+IHtcbiAgICAgICAgZm9yKGxldCBpPTA7IGk8dGFza0Fyci5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBpZih0YXNrQXJyW2ldWzBdID09IHByb2plY3QpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKHRhc2tBcnJbaV0ubGVuZ3RoLTEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgYWRkVGFza3RvQXJyID0gKHByb2plY3QsIHRhc2spID0+IHtcbiAgICAgICAgZm9yKGxldCBpPTA7IGk8dGFza0Fyci5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBpZih0YXNrQXJyW2ldWzBdID09IHByb2plY3Qpe1xuICAgICAgICAgICAgICAgIHRhc2tBcnJbaV0ucHVzaCh0YXNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7YWRkTmV3UHJvamVjdCwgZ2V0UHJvamVjdHMsIGdldFRhc2tzLCBnZXROdW1PZlByb2pzLCBnZXROdW1PZlRhc2tzLCBhZGRUYXNrdG9BcnIsIHJlbW92ZVByb2plY3R9XG59KSgpO1xuXG5jb25zdCBUYXNrID0gKHRpdGxlLCBkZXNjLCBkYXRlLCBwcmlvcml0eSkgPT4ge1xuICAgIGNvbnN0IGdldFRpdGxlID0gKCkgPT4gdGl0bGU7XG4gICAgY29uc3QgZ2V0RGVzYyA9ICgpID0+IGRlc2M7XG4gICAgY29uc3QgZ2V0RGF0ZSA9ICgpID0+IGRhdGU7XG4gICAgY29uc3QgZ2V0UHJpb3JpdHkgPSAoKSA9PiBwcmlvcml0eTtcblxuICAgIHJldHVybiB7Z2V0VGl0bGUsIGdldERlc2MsIGdldERhdGUsIGdldFByaW9yaXR5fVxufVxuXG5leHBvcnQge1Rhc2ssIGFwcH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgZG9tQ3JlYXRlIGZyb20gJy4vY3JlYXRlZG9tJztcbmltcG9ydCB7IGFwcCwgVGFzayB9IGZyb20gJy4vdGFzayc7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZG9tQ3JlYXRlLnVwZGF0ZVByb2opO1xuY29uc3QgY29sb3JQaWNrZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29sb3ItcGlja2VyJyk7XG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbmNvbG9yUGlja2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICBjb250ZW50LnN0eWxlLmJhY2tncm91bmQgPSBjb2xvclBpY2tlci52YWx1ZTtcbn0pO1xuXG5jb25zdCBhZGRJbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGl0bGVJY29uJyk7XG5jb25zdCBkZXRhaWxzRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRldGFpbHMnKTtcbmRldGFpbHNEaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuYWRkSW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmKGRldGFpbHNEaXYuc3R5bGUuZGlzcGxheSA9PSAnZmxleCcpe1xuICAgICAgICBkZXRhaWxzRGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfVxuICAgIGVsc2UgaWYoZGV0YWlsc0Rpdi5zdHlsZS5kaXNwbGF5ID09ICdub25lJyl7XG4gICAgICAgIGRldGFpbHNEaXYuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICB9XG59KTtcblxuY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhbmNlbEJ0bicpO1xuY29uc3QgZGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjJyk7XG5jb25zdCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RhdGUnKTtcbmNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5Jyk7XG5jb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RzJyk7XG5jb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZScpO1xuXG5jYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZGVzYy52YWx1ZSA9ICcnO1xuICAgIGRhdGUudmFsdWUgPSAnJztcbiAgICBwcmlvcml0eS52YWx1ZSA9ICdsb3cnO1xuICAgIHByb2plY3QudmFsdWUgPSAnbm9uZSc7XG4gICAgdGl0bGUudmFsdWUgPSAnJztcbiAgICBkZXRhaWxzRGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59KTtcblxuY29uc3QgYWRkQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZEJ0bicpO1xuYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY3JlYXRlTmV3VGFzayk7XG5cbmNvbnN0IHByb2plY3RBZGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWFkZGVyJyk7XG5wcm9qZWN0QWRkZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkb21DcmVhdGUucHJvamVjdCk7XG5cbmZ1bmN0aW9uIGNyZWF0ZU5ld1Rhc2soKSB7XG4gICAgZG9tQ3JlYXRlLnRhc2soJ3NhbXBsZScsICdoaScsICdQZXJzb25hbCcsICcyMDE0LTEyLTI1JywgJ0hpZ2gnKTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=