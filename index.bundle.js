/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/taskDOM.js":
/*!************************!*\
  !*** ./src/taskDOM.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ taskDOM)
/* harmony export */ });
function taskDOM() {
    let i=1;
    const content = document.querySelector('#content');

    function creator() {
        const div = document.createElement('div');
        div.classList.add('taskCont');

        const top = document.createElement('div');
        top.classList.add('taskTop');

        const addImg = new Image();
        addImg.src = './icons/plus.png';
        addImg.classList.add('titleIcon');

        const title = document.createElement('input');
        title.classList.add('title');
        title.type = 'text';
        title.name = ' title';
        title.placeholder = 'New Task...';

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
        desc.placeholder = 'Say something about this task...';

        const projectLabel = document.createElement('label');
        projectLabel.classList.add('labels');
        projectLabel.for = 'project';
        projectLabel.textContent = 'Project';
        const project = document.createElement('select');
        project.name = 'project';
        project.classList.add('input');
        const projectNone = document.createElement('option');
        projectNone.value = 'none';
        projectNone.textContent = 'None';

        const dateLabel = document.createElement('label');
        dateLabel.classList.add('labels');
        dateLabel.for = 'duedate';
        dateLabel.textContent = 'Due Date';
        const date = document.createElement('input');
        date.type = 'date';
        date.classList.add('input');
        date.name = 'duedate';

        const priorityLabel = document.createElement('label');
        priorityLabel.textContent = 'Priority';
        priorityLabel.classList.add('labels');
        priorityLabel.for = 'priority';
        const priority = document.createElement('select');
        priority.classList.add('input');
        priority.name = 'priority';

        const btnDiv = document.createElement('div');
        btnDiv.id = 'btnDiv';
        const cancelBtn = document.createElement('button');
        cancelBtn.classList.add('btn');
        cancelBtn.textContent = 'Cancel';
        const addBtn = document.createElement('button');
        addBtn.classList.add('btn');
        addBtn.textContent = 'Add Task';

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
        project.appendChild(projectNone);
        detailsRight.appendChild(dateLabel);
        detailsRight.appendChild(date);
        detailsRight.appendChild(priorityLabel);
        detailsRight.appendChild(priority);
        detailsRight.appendChild(btnDiv);
        btnDiv.appendChild(cancelBtn);
        btnDiv.appendChild(addBtn);

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

        addImg.addEventListener('click', () => {
            if(detailsDiv.style.display == 'none') {
                detailsDiv.style.display = 'flex';
            }
            else if(detailsDiv.style.display == 'flex') {
                detailsDiv.style.display = 'none';
            }
        });

        cancelBtn.addEventListener('click', () => {
            desc.value = '';
            date.value = '';
            priority.value = 'low';
            title.value = '';
            detailsDiv.style.display = 'none';
        });

        addBtn.addEventListener('click', modifyCreator);
    }
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
/* harmony import */ var _taskDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskDOM */ "./src/taskDOM.js");


const projects = ['personal', 'top', 'chores'];

const personal = [
    {
        title: 'push-up',
        description: '15x',
        dueDate: 'dec/20/2021',
        priority: 'medium'
    },
    {
        title: 'curl up',
        description: '20x',
        dueDate: 'dec/21/2021',
        priority: 'high'
    }
]

const top = [
    {
        title: 'make todo list',
        description: 'create your own app',
        dueDate: 'dec/25/2021',
        priority: 'high'
    },
    {
        title: 'figure out app logic',
        description: 'plan out logic',
        dueDate: 'dec/20/2021',
        priority: 'high'
    }
]

const chores = [
    {
        title: 'wash dishes',
        description: 'after meal',
        dueDate: 'dec/22/2021',
        priority: 'low'
    },
    {
        title: 'mop floor',
        description: 'morning',
        dueDate: 'dec/20/2021',
        priority: 'low'
    }
]


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLEtBQUs7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7Ozs7OztVQ3JJQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTmdDOztBQUVoQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90YXNrRE9NLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0YXNrRE9NKCkge1xuICAgIGxldCBpPTE7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cbiAgICBmdW5jdGlvbiBjcmVhdG9yKCkge1xuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2tDb250Jyk7XG5cbiAgICAgICAgY29uc3QgdG9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRvcC5jbGFzc0xpc3QuYWRkKCd0YXNrVG9wJyk7XG5cbiAgICAgICAgY29uc3QgYWRkSW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGFkZEltZy5zcmMgPSAnLi9pY29ucy9wbHVzLnBuZyc7XG4gICAgICAgIGFkZEltZy5jbGFzc0xpc3QuYWRkKCd0aXRsZUljb24nKTtcblxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XG4gICAgICAgIHRpdGxlLnR5cGUgPSAndGV4dCc7XG4gICAgICAgIHRpdGxlLm5hbWUgPSAnIHRpdGxlJztcbiAgICAgICAgdGl0bGUucGxhY2Vob2xkZXIgPSAnTmV3IFRhc2suLi4nO1xuXG4gICAgICAgIGNvbnN0IGRldGFpbHNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGV0YWlsc0Rpdi5jbGFzc0xpc3QuYWRkKCdkZXRhaWxzJyk7XG4gICAgICAgIGRldGFpbHNEaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgICAgICBjb25zdCBkZXRhaWxzTGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBkZXRhaWxzUmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGV0YWlsc0xlZnQuY2xhc3NMaXN0LmFkZCgnZGV0YWlsc0xlZnQnKTtcbiAgICAgICAgZGV0YWlsc1JpZ2h0LmNsYXNzTGlzdC5hZGQoJ2RldGFpbHNSaWdodCcpO1xuXG4gICAgICAgIGNvbnN0IGRlc2NMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGNvbnN0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgICAgICBkZXNjTGFiZWwuY2xhc3NMaXN0LmFkZCgnbGFiZWxzJyk7XG4gICAgICAgIGRlc2NMYWJlbC50ZXh0Q29udGVudCA9ICdEZXNjcmlwdGlvbic7XG4gICAgICAgIGRlc2NMYWJlbC5mb3IgPSAnZGVzYyc7XG4gICAgICAgIGRlc2MuY2xhc3NMaXN0LmFkZCgnZGVzYycpO1xuICAgICAgICBkZXNjLnBsYWNlaG9sZGVyID0gJ1NheSBzb21ldGhpbmcgYWJvdXQgdGhpcyB0YXNrLi4uJztcblxuICAgICAgICBjb25zdCBwcm9qZWN0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBwcm9qZWN0TGFiZWwuY2xhc3NMaXN0LmFkZCgnbGFiZWxzJyk7XG4gICAgICAgIHByb2plY3RMYWJlbC5mb3IgPSAncHJvamVjdCc7XG4gICAgICAgIHByb2plY3RMYWJlbC50ZXh0Q29udGVudCA9ICdQcm9qZWN0JztcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgICAgICBwcm9qZWN0Lm5hbWUgPSAncHJvamVjdCc7XG4gICAgICAgIHByb2plY3QuY2xhc3NMaXN0LmFkZCgnaW5wdXQnKTtcbiAgICAgICAgY29uc3QgcHJvamVjdE5vbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgcHJvamVjdE5vbmUudmFsdWUgPSAnbm9uZSc7XG4gICAgICAgIHByb2plY3ROb25lLnRleHRDb250ZW50ID0gJ05vbmUnO1xuXG4gICAgICAgIGNvbnN0IGRhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGRhdGVMYWJlbC5jbGFzc0xpc3QuYWRkKCdsYWJlbHMnKTtcbiAgICAgICAgZGF0ZUxhYmVsLmZvciA9ICdkdWVkYXRlJztcbiAgICAgICAgZGF0ZUxhYmVsLnRleHRDb250ZW50ID0gJ0R1ZSBEYXRlJztcbiAgICAgICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGRhdGUudHlwZSA9ICdkYXRlJztcbiAgICAgICAgZGF0ZS5jbGFzc0xpc3QuYWRkKCdpbnB1dCcpO1xuICAgICAgICBkYXRlLm5hbWUgPSAnZHVlZGF0ZSc7XG5cbiAgICAgICAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIHByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSAnUHJpb3JpdHknO1xuICAgICAgICBwcmlvcml0eUxhYmVsLmNsYXNzTGlzdC5hZGQoJ2xhYmVscycpO1xuICAgICAgICBwcmlvcml0eUxhYmVsLmZvciA9ICdwcmlvcml0eSc7XG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgICAgIHByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ2lucHV0Jyk7XG4gICAgICAgIHByaW9yaXR5Lm5hbWUgPSAncHJpb3JpdHknO1xuXG4gICAgICAgIGNvbnN0IGJ0bkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBidG5EaXYuaWQgPSAnYnRuRGl2JztcbiAgICAgICAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGNhbmNlbEJ0bi5jbGFzc0xpc3QuYWRkKCdidG4nKTtcbiAgICAgICAgY2FuY2VsQnRuLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XG4gICAgICAgIGNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBhZGRCdG4uY2xhc3NMaXN0LmFkZCgnYnRuJyk7XG4gICAgICAgIGFkZEJ0bi50ZXh0Q29udGVudCA9ICdBZGQgVGFzayc7XG5cbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQodG9wKTtcbiAgICAgICAgdG9wLmFwcGVuZENoaWxkKGFkZEltZyk7XG4gICAgICAgIHRvcC5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChkZXRhaWxzRGl2KTtcbiAgICAgICAgZGV0YWlsc0Rpdi5hcHBlbmRDaGlsZChkZXRhaWxzTGVmdCk7XG4gICAgICAgIGRldGFpbHNEaXYuYXBwZW5kQ2hpbGQoZGV0YWlsc1JpZ2h0KTtcbiAgICAgICAgZGV0YWlsc0xlZnQuYXBwZW5kQ2hpbGQoZGVzY0xhYmVsKTtcbiAgICAgICAgZGV0YWlsc0xlZnQuYXBwZW5kQ2hpbGQoZGVzYyk7XG4gICAgICAgIGRldGFpbHNSaWdodC5hcHBlbmRDaGlsZChwcm9qZWN0TGFiZWwpO1xuICAgICAgICBkZXRhaWxzUmlnaHQuYXBwZW5kQ2hpbGQocHJvamVjdCk7XG4gICAgICAgIHByb2plY3QuYXBwZW5kQ2hpbGQocHJvamVjdE5vbmUpO1xuICAgICAgICBkZXRhaWxzUmlnaHQuYXBwZW5kQ2hpbGQoZGF0ZUxhYmVsKTtcbiAgICAgICAgZGV0YWlsc1JpZ2h0LmFwcGVuZENoaWxkKGRhdGUpO1xuICAgICAgICBkZXRhaWxzUmlnaHQuYXBwZW5kQ2hpbGQocHJpb3JpdHlMYWJlbCk7XG4gICAgICAgIGRldGFpbHNSaWdodC5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG4gICAgICAgIGRldGFpbHNSaWdodC5hcHBlbmRDaGlsZChidG5EaXYpO1xuICAgICAgICBidG5EaXYuYXBwZW5kQ2hpbGQoY2FuY2VsQnRuKTtcbiAgICAgICAgYnRuRGl2LmFwcGVuZENoaWxkKGFkZEJ0bik7XG5cbiAgICAgICAgZm9yKGxldCBpPTA7IGk8MzsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgIHN3aXRjaChpKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICBvcHRpb24udmFsdWUgPSAnbG93JztcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gJ0xvdyc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnZhbHVlID0gJ21lZGl1bSc7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9ICdNZWRpdW0nO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbi52YWx1ZSA9ICdoaWdoJztcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gJ0hpZ2gnO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHByaW9yaXR5LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICBhZGRJbWcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBpZihkZXRhaWxzRGl2LnN0eWxlLmRpc3BsYXkgPT0gJ25vbmUnKSB7XG4gICAgICAgICAgICAgICAgZGV0YWlsc0Rpdi5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZihkZXRhaWxzRGl2LnN0eWxlLmRpc3BsYXkgPT0gJ2ZsZXgnKSB7XG4gICAgICAgICAgICAgICAgZGV0YWlsc0Rpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBkZXNjLnZhbHVlID0gJyc7XG4gICAgICAgICAgICBkYXRlLnZhbHVlID0gJyc7XG4gICAgICAgICAgICBwcmlvcml0eS52YWx1ZSA9ICdsb3cnO1xuICAgICAgICAgICAgdGl0bGUudmFsdWUgPSAnJztcbiAgICAgICAgICAgIGRldGFpbHNEaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbW9kaWZ5Q3JlYXRvcik7XG4gICAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHRhc2tET00gZnJvbSBcIi4vdGFza0RPTVwiO1xuXG5jb25zdCBwcm9qZWN0cyA9IFsncGVyc29uYWwnLCAndG9wJywgJ2Nob3JlcyddO1xuXG5jb25zdCBwZXJzb25hbCA9IFtcbiAgICB7XG4gICAgICAgIHRpdGxlOiAncHVzaC11cCcsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnMTV4JyxcbiAgICAgICAgZHVlRGF0ZTogJ2RlYy8yMC8yMDIxJyxcbiAgICAgICAgcHJpb3JpdHk6ICdtZWRpdW0nXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiAnY3VybCB1cCcsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnMjB4JyxcbiAgICAgICAgZHVlRGF0ZTogJ2RlYy8yMS8yMDIxJyxcbiAgICAgICAgcHJpb3JpdHk6ICdoaWdoJ1xuICAgIH1cbl1cblxuY29uc3QgdG9wID0gW1xuICAgIHtcbiAgICAgICAgdGl0bGU6ICdtYWtlIHRvZG8gbGlzdCcsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnY3JlYXRlIHlvdXIgb3duIGFwcCcsXG4gICAgICAgIGR1ZURhdGU6ICdkZWMvMjUvMjAyMScsXG4gICAgICAgIHByaW9yaXR5OiAnaGlnaCdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6ICdmaWd1cmUgb3V0IGFwcCBsb2dpYycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAncGxhbiBvdXQgbG9naWMnLFxuICAgICAgICBkdWVEYXRlOiAnZGVjLzIwLzIwMjEnLFxuICAgICAgICBwcmlvcml0eTogJ2hpZ2gnXG4gICAgfVxuXVxuXG5jb25zdCBjaG9yZXMgPSBbXG4gICAge1xuICAgICAgICB0aXRsZTogJ3dhc2ggZGlzaGVzJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdhZnRlciBtZWFsJyxcbiAgICAgICAgZHVlRGF0ZTogJ2RlYy8yMi8yMDIxJyxcbiAgICAgICAgcHJpb3JpdHk6ICdsb3cnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiAnbW9wIGZsb29yJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdtb3JuaW5nJyxcbiAgICAgICAgZHVlRGF0ZTogJ2RlYy8yMC8yMDIxJyxcbiAgICAgICAgcHJpb3JpdHk6ICdsb3cnXG4gICAgfVxuXVxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=