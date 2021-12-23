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

cancelBtn.addEventListener('click', () => {
    document.querySelector('#desc').value = '';
    document.querySelector('#date').value = '';
    document.querySelector('#priority').value = 'low';
    document.querySelector('#project').value = 'none';
    document.querySelector('#title').value = '';
    detailsDiv.style.display = 'none';
});