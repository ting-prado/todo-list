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

    const removeTask = (project, taskTitle) => {
        // for(let i=0; i<taskArr.length; i++){
        //     if(taskArr[i][0] == project.toLowerCase()){
        //         for(let j=0; j<taskArr[i].length; j++) {
        //             if(taskArr[i][j].title == taskTitle){
        //                 taskArr[i].splice(j, 1);
        //             }
        //         }
        //     }
        // }
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

export {Task, app};