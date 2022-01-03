const app = (() => {
    let taskArr = localStorage.getItem('taskArr');
    taskArr = (taskArr) ? (JSON.parse(taskArr)) : [
        ['personal']
    ];

    const addNewProject = project => {
        taskArr.push([project]);
        localStorage.setItem('taskArr', JSON.stringify(taskArr));
    }

    const removeProject = project => {
        for(let i=0; i<taskArr.length; i++){
            if(project == taskArr[i][0]){
                taskArr.splice(i, 1);
            }
        }
        localStorage.setItem('taskArr', JSON.stringify(taskArr));
    }

    const getProjects = () => taskArr.map(elements => elements[0]);

    const getTasksWithinProj = project => {
        let tasks = [];
        for(let i=0; i<taskArr.length; i++){
            if(taskArr[i][0] == project) {
                return taskArr[i].slice(1);
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
        localStorage.setItem('taskArr', JSON.stringify(taskArr));
    }

    const removeTask = (project, taskObj) => {
        for(let i=0; i<taskArr.length; i++){
            if(taskArr[i][0] == project.toLowerCase()){
                taskArr[i].splice(taskArr[i].indexOf(taskObj), 1);
            }
        }
        localStorage.setItem('taskArr', JSON.stringify(taskArr));
    }

    return {addNewProject, getProjects, getTasksWithinProj, getNumOfProjs, getNumOfTasks, addTasktoArr, removeProject, removeTask}
})();

const Task = (title, desc, date, priority) => {
    return {
        title: title,
        desc: desc,
        date: date,
        priority: priority[0].toUpperCase() + priority.slice(1)
    }
}

export {Task, app};