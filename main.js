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


const colorPicker = document.querySelector('#color-picker');
const content = document.querySelector('#content');
colorPicker.addEventListener('change', () => {
    content.style.background = colorPicker.value;
});

(0,_newtaskDOM__WEBPACK_IMPORTED_MODULE_0__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixLQUFLO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7Ozs7O1VDN0dBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOc0M7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCx1REFBVSxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL25ld3Rhc2tET00uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21haW5ET00uanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbmV3VGFza0RpdigpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuaWQgPSAnbmV3VGFza0NvbnQnO1xuXG4gICAgY29uc3QgYWRkSW1nID0gbmV3IEltYWdlKCk7XG4gICAgYWRkSW1nLnNyYyA9ICcuL2ljb25zL3BsdXMucG5nJztcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuICAgIHRpdGxlLnR5cGUgPSAndGV4dCc7XG4gICAgdGl0bGUubmFtZSA9ICcgdGl0bGUnO1xuICAgIHRpdGxlLnBsYWNlaG9sZGVyID0gJ05ldyBUYXNrLi4uJztcblxuICAgIGNvbnN0IGRldGFpbHNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkZXRhaWxzRGl2LmlkID0gJ2RldGFpbHMnO1xuICAgIGRldGFpbHNEaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgIGNvbnN0IGRldGFpbHNMZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZGV0YWlsc1JpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGV0YWlsc0xlZnQuaWQgPSAnZGV0YWlsc0xlZnQnO1xuICAgIGRldGFpbHNSaWdodC5pZCA9ICdkZXRhaWxzUmlnaHQnO1xuXG4gICAgY29uc3QgZGVzY0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBjb25zdCBkZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICBkZXNjTGFiZWwuY2xhc3NMaXN0LmFkZCgnbGFiZWxzJyk7XG4gICAgZGVzY0xhYmVsLnRleHRDb250ZW50ID0gJ0Rlc2NyaXB0aW9uJztcbiAgICBkZXNjTGFiZWwuZm9yID0gJ2Rlc2MnO1xuICAgIGRlc2MuaWQgPSAnZGVzYyc7XG4gICAgZGVzYy5wbGFjZWhvbGRlciA9ICdTYXkgc29tZXRoaW5nIGFib3V0IHRoaXMgdGFzay4uLic7XG5cbiAgICBjb25zdCBkYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGRhdGVMYWJlbC5jbGFzc0xpc3QuYWRkKCdsYWJlbHMnKTtcbiAgICBkYXRlTGFiZWwuZm9yID0gJ2R1ZWRhdGUnO1xuICAgIGRhdGVMYWJlbC50ZXh0Q29udGVudCA9ICdEdWUgRGF0ZSc7XG4gICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZGF0ZS50eXBlID0gJ2RhdGUnO1xuICAgIGRhdGUuaWQgPSAnZHVlZGF0ZSc7XG4gICAgZGF0ZS5uYW1lID0gJ2R1ZWRhdGUnO1xuXG4gICAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgcHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudCA9ICdQcmlvcml0eSc7XG4gICAgcHJpb3JpdHlMYWJlbC5jbGFzc0xpc3QuYWRkKCdsYWJlbHMnKTtcbiAgICBwcmlvcml0eUxhYmVsLmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5TGFiZWwnKTtcbiAgICBwcmlvcml0eUxhYmVsLmZvciA9ICdwcmlvcml0eSc7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICBwcmlvcml0eS5pZCA9ICdwcmlvcml0eSc7XG4gICAgcHJpb3JpdHkubmFtZSA9ICdwcmlvcml0eSc7XG5cbiAgICBjb25zdCBidG5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBidG5EaXYuaWQgPSAnYnRuRGl2JztcbiAgICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjYW5jZWxCdG4uY2xhc3NMaXN0LmFkZCgnYnRuJyk7XG4gICAgY2FuY2VsQnRuLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XG4gICAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYWRkQnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicpO1xuICAgIGFkZEJ0bi50ZXh0Q29udGVudCA9ICdBZGQgVGFzayc7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGRpdik7XG4gICAgZGl2LmFwcGVuZENoaWxkKGFkZEltZyk7XG4gICAgZGl2LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGRldGFpbHNEaXYpO1xuICAgIGRldGFpbHNEaXYuYXBwZW5kQ2hpbGQoZGV0YWlsc0xlZnQpO1xuICAgIGRldGFpbHNEaXYuYXBwZW5kQ2hpbGQoZGV0YWlsc1JpZ2h0KTtcbiAgICBkZXRhaWxzTGVmdC5hcHBlbmRDaGlsZChkZXNjTGFiZWwpO1xuICAgIGRldGFpbHNMZWZ0LmFwcGVuZENoaWxkKGRlc2MpO1xuICAgIGRldGFpbHNSaWdodC5hcHBlbmRDaGlsZChkYXRlTGFiZWwpO1xuICAgIGRldGFpbHNSaWdodC5hcHBlbmRDaGlsZChkYXRlKTtcbiAgICBkZXRhaWxzUmlnaHQuYXBwZW5kQ2hpbGQocHJpb3JpdHlMYWJlbCk7XG4gICAgZGV0YWlsc1JpZ2h0LmFwcGVuZENoaWxkKHByaW9yaXR5KTtcbiAgICBkZXRhaWxzUmlnaHQuYXBwZW5kQ2hpbGQoYnRuRGl2KTtcbiAgICBidG5EaXYuYXBwZW5kQ2hpbGQoY2FuY2VsQnRuKTtcbiAgICBidG5EaXYuYXBwZW5kQ2hpbGQoYWRkQnRuKTtcblxuICAgIGZvcihsZXQgaT0wOyBpPDM7IGkrKykge1xuICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgc3dpdGNoKGkpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBvcHRpb24udmFsdWUgPSAnbG93JztcbiAgICAgICAgICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSAnTG93JztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBvcHRpb24udmFsdWUgPSAnbWVkaXVtJztcbiAgICAgICAgICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSAnTWVkaXVtJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBvcHRpb24udmFsdWUgPSAnaGlnaCc7XG4gICAgICAgICAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gJ0hpZ2gnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHByaW9yaXR5LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgfVxuXG4gICAgYWRkSW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpZihkZXRhaWxzRGl2LnN0eWxlLmRpc3BsYXkgPT0gJ25vbmUnKSB7XG4gICAgICAgICAgICBkZXRhaWxzRGl2LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihkZXRhaWxzRGl2LnN0eWxlLmRpc3BsYXkgPT0gJ2ZsZXgnKSB7XG4gICAgICAgICAgICBkZXRhaWxzRGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZGVzYy52YWx1ZSA9ICcnO1xuICAgICAgICBkYXRlLnZhbHVlID0gJyc7XG4gICAgICAgIHByaW9yaXR5LnZhbHVlID0gJ2xvdyc7XG4gICAgICAgIHRpdGxlLnZhbHVlID0gJyc7XG4gICAgICAgIGRldGFpbHNEaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9KTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBuZXdUYXNrRGl2IGZyb20gXCIuL25ld3Rhc2tET01cIjtcblxuY29uc3QgY29sb3JQaWNrZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29sb3ItcGlja2VyJyk7XG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbmNvbG9yUGlja2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICBjb250ZW50LnN0eWxlLmJhY2tncm91bmQgPSBjb2xvclBpY2tlci52YWx1ZTtcbn0pO1xuXG5uZXdUYXNrRGl2KCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9