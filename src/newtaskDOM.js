const newTaskDiv = () => {
    const content = document.querySelector('#content');
    const div = document.createElement('div');
    div.id = 'newTaskCont';

    const addImg = new Image();
    addImg.src = './icons/plus.svg';

    const title = document.createElement('input');
    title.classList.add('title');
    title.type = 'text';
    title.name = ' title';
    title.placeholder = 'New Task...';

    content.appendChild(div);
    div.appendChild(addImg);
    div.appendChild(title);
}

export default newTaskDiv;