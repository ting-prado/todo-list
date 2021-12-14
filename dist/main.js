/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/newtaskDOM.js":
/*!***************************!*\
  !*** ./src/newtaskDOM.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ newTaskDiv)
/* harmony export */ });
function newTaskDiv() {
    const content = document.querySelector('#content');
    const div = document.createElement('div');
    div.id = 'newTaskCont';

    const addImg = new Image();
    addImg.src = './icons/plus.png';

    const title = document.createElement('input');
    title.classList.add('title');
    title.type = 'text';
    title.name = ' title';
    title.placeholder = 'New Task...';

    const detailsDiv = document.createElement('div');
    detailsDiv.id = 'details';
    detailsDiv.style.display = 'none';

    const detailsLeft = document.createElement('div');
    const detailsRight = document.createElement('div');
    detailsLeft.id = 'detailsLeft';
    detailsRight.id = 'detailsRight';

    const descLabel = document.createElement('label');
    const desc = document.createElement('textarea');
    descLabel.classList.add('labels');
    descLabel.textContent = 'Description';
    descLabel.for = 'desc';
    desc.id = 'desc';
    desc.placeholder = 'Say something about this task...';

    const dateLabel = document.createElement('label');
    dateLabel.classList.add('labels');
    dateLabel.for = 'duedate';
    dateLabel.textContent = 'Due Date';
    const date = document.createElement('input');
    date.type = 'date';
    date.id = 'duedate';
    date.name = 'duedate';

    const priorityLabel = document.createElement('label');
    priorityLabel.textContent = 'Priority';
    priorityLabel.classList.add('labels');
    priorityLabel.classList.add('priorityLabel');
    priorityLabel.for = 'priority';
    const priority = document.createElement('select');
    priority.id = 'priority';
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
    div.appendChild(addImg);
    div.appendChild(title);
    content.appendChild(detailsDiv);
    detailsDiv.appendChild(detailsLeft);
    detailsDiv.appendChild(detailsRight);
    detailsLeft.appendChild(descLabel);
    detailsLeft.appendChild(desc);
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
/*!************************!*\
  !*** ./src/mainDOM.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _newtaskDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newtaskDOM */ "./src/newtaskDOM.js");


(0,_newtaskDOM__WEBPACK_IMPORTED_MODULE_0__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixLQUFLO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7Ozs7O1VDN0dBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOc0M7O0FBRXRDLHVEQUFVLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbmV3dGFza0RPTS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbWFpbkRPTS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBuZXdUYXNrRGl2KCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5pZCA9ICduZXdUYXNrQ29udCc7XG5cbiAgICBjb25zdCBhZGRJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBhZGRJbWcuc3JjID0gJy4vaWNvbnMvcGx1cy5wbmcnO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XG4gICAgdGl0bGUudHlwZSA9ICd0ZXh0JztcbiAgICB0aXRsZS5uYW1lID0gJyB0aXRsZSc7XG4gICAgdGl0bGUucGxhY2Vob2xkZXIgPSAnTmV3IFRhc2suLi4nO1xuXG4gICAgY29uc3QgZGV0YWlsc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRldGFpbHNEaXYuaWQgPSAnZGV0YWlscyc7XG4gICAgZGV0YWlsc0Rpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgY29uc3QgZGV0YWlsc0xlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBkZXRhaWxzUmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkZXRhaWxzTGVmdC5pZCA9ICdkZXRhaWxzTGVmdCc7XG4gICAgZGV0YWlsc1JpZ2h0LmlkID0gJ2RldGFpbHNSaWdodCc7XG5cbiAgICBjb25zdCBkZXNjTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGNvbnN0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgIGRlc2NMYWJlbC5jbGFzc0xpc3QuYWRkKCdsYWJlbHMnKTtcbiAgICBkZXNjTGFiZWwudGV4dENvbnRlbnQgPSAnRGVzY3JpcHRpb24nO1xuICAgIGRlc2NMYWJlbC5mb3IgPSAnZGVzYyc7XG4gICAgZGVzYy5pZCA9ICdkZXNjJztcbiAgICBkZXNjLnBsYWNlaG9sZGVyID0gJ1NheSBzb21ldGhpbmcgYWJvdXQgdGhpcyB0YXNrLi4uJztcblxuICAgIGNvbnN0IGRhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgZGF0ZUxhYmVsLmNsYXNzTGlzdC5hZGQoJ2xhYmVscycpO1xuICAgIGRhdGVMYWJlbC5mb3IgPSAnZHVlZGF0ZSc7XG4gICAgZGF0ZUxhYmVsLnRleHRDb250ZW50ID0gJ0R1ZSBEYXRlJztcbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBkYXRlLnR5cGUgPSAnZGF0ZSc7XG4gICAgZGF0ZS5pZCA9ICdkdWVkYXRlJztcbiAgICBkYXRlLm5hbWUgPSAnZHVlZGF0ZSc7XG5cbiAgICBjb25zdCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBwcmlvcml0eUxhYmVsLnRleHRDb250ZW50ID0gJ1ByaW9yaXR5JztcbiAgICBwcmlvcml0eUxhYmVsLmNsYXNzTGlzdC5hZGQoJ2xhYmVscycpO1xuICAgIHByaW9yaXR5TGFiZWwuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHlMYWJlbCcpO1xuICAgIHByaW9yaXR5TGFiZWwuZm9yID0gJ3ByaW9yaXR5JztcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIHByaW9yaXR5LmlkID0gJ3ByaW9yaXR5JztcbiAgICBwcmlvcml0eS5uYW1lID0gJ3ByaW9yaXR5JztcblxuICAgIGNvbnN0IGJ0bkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJ0bkRpdi5pZCA9ICdidG5EaXYnO1xuICAgIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNhbmNlbEJ0bi5jbGFzc0xpc3QuYWRkKCdidG4nKTtcbiAgICBjYW5jZWxCdG4udGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcbiAgICBjb25zdCBhZGRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhZGRCdG4uY2xhc3NMaXN0LmFkZCgnYnRuJyk7XG4gICAgYWRkQnRuLnRleHRDb250ZW50ID0gJ0FkZCBUYXNrJztcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoYWRkSW1nKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGV0YWlsc0Rpdik7XG4gICAgZGV0YWlsc0Rpdi5hcHBlbmRDaGlsZChkZXRhaWxzTGVmdCk7XG4gICAgZGV0YWlsc0Rpdi5hcHBlbmRDaGlsZChkZXRhaWxzUmlnaHQpO1xuICAgIGRldGFpbHNMZWZ0LmFwcGVuZENoaWxkKGRlc2NMYWJlbCk7XG4gICAgZGV0YWlsc0xlZnQuYXBwZW5kQ2hpbGQoZGVzYyk7XG4gICAgZGV0YWlsc1JpZ2h0LmFwcGVuZENoaWxkKGRhdGVMYWJlbCk7XG4gICAgZGV0YWlsc1JpZ2h0LmFwcGVuZENoaWxkKGRhdGUpO1xuICAgIGRldGFpbHNSaWdodC5hcHBlbmRDaGlsZChwcmlvcml0eUxhYmVsKTtcbiAgICBkZXRhaWxzUmlnaHQuYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuICAgIGRldGFpbHNSaWdodC5hcHBlbmRDaGlsZChidG5EaXYpO1xuICAgIGJ0bkRpdi5hcHBlbmRDaGlsZChjYW5jZWxCdG4pO1xuICAgIGJ0bkRpdi5hcHBlbmRDaGlsZChhZGRCdG4pO1xuXG4gICAgZm9yKGxldCBpPTA7IGk8MzsgaSsrKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBzd2l0Y2goaSkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIG9wdGlvbi52YWx1ZSA9ICdsb3cnO1xuICAgICAgICAgICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9ICdMb3cnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIG9wdGlvbi52YWx1ZSA9ICdtZWRpdW0nO1xuICAgICAgICAgICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9ICdNZWRpdW0nO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIG9wdGlvbi52YWx1ZSA9ICdoaWdoJztcbiAgICAgICAgICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSAnSGlnaCc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgcHJpb3JpdHkuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICB9XG5cbiAgICBhZGRJbWcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGlmKGRldGFpbHNEaXYuc3R5bGUuZGlzcGxheSA9PSAnbm9uZScpIHtcbiAgICAgICAgICAgIGRldGFpbHNEaXYuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGRldGFpbHNEaXYuc3R5bGUuZGlzcGxheSA9PSAnZmxleCcpIHtcbiAgICAgICAgICAgIGRldGFpbHNEaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBkZXNjLnZhbHVlID0gJyc7XG4gICAgICAgIGRhdGUudmFsdWUgPSAnJztcbiAgICAgICAgcHJpb3JpdHkudmFsdWUgPSAnbG93JztcbiAgICAgICAgdGl0bGUudmFsdWUgPSAnJztcbiAgICAgICAgZGV0YWlsc0Rpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH0pO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IG5ld1Rhc2tEaXYgZnJvbSBcIi4vbmV3dGFza0RPTVwiO1xuXG5uZXdUYXNrRGl2KCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9