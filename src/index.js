import './style.css';
import { 
    LOCAL_STORAGE_PROJECTS_KEY,
    LOCAL_STORAGE_TASKS_KEY,
    LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY,
    save
} from './localStorage';

// --- GLOBAL VARIABLES PROJECTS ---
const newProjectForm = document.querySelector('[data-new-project-form]');
const newProjectInput = document.querySelector('[data-new-project-input]');
const projectsList = document.querySelector('[data-projects-list]');

// --- GLOBAL VARIABLES TASKS
const openTaskForm = document.querySelector('[data-open-task-form]');
const newTaskForm = document.querySelector('[data-new-task-form]');
const newTaskSelect = document.querySelector('[data-new-task-select]');
const newTaskInput = document.querySelector('[data-new-task-input]');
const newTaskDate = document.querySelector('[data-new-task-date]');
const taskPriority = document.querySelector('[data-task-priority]');
const editTaskForm = document.querySelector('[data-edit-task-form]');
const editTaskSelect = document.querySelector('[data-edit-task-select]');
const editTaskInput = document.querySelector('[data-edit-task-input]');
const editTaskDate = document.querySelector('[data-edit-task-date]');
const editTaskPriority = document.querySelector('[data-edit-task-priority]');
const cardsContainer = document.querySelector('[data-cards]');
const selectedProject = document.querySelector('[data-selected-project]');

let projects = JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECTS_KEY)) || [];
let tasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_TASKS_KEY)) || [];
let selectedProjectId = localStorage.getItem(LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY);

// --- EVENT: Add Project ---
newProjectForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const project = newProjectInput.value;
    // --- Check input ---
    const emptyProject = !project || !project.trim().length;

    if(emptyProject) {
        alert('Please enter a new project');
        return;
    }

    projects.push({ 
        _id: Date.now().toString(), 
        project: project, 
        color: getRandomHexColor() 
    });

    // --- Clear the form ---
    newProjectInput.value = '';

    saveAndRender()
})

// --- EVENT: Open Task Form ---
openTaskForm.addEventListener('click', () => {
    newTaskForm.style.display = 'flex';
})

// --- EVENT: Submit Task ---
newTaskForm.addEventListener('submit', (e) => {
    e.preventDefault();

    tasks.push({ 
        _id: Date.now().toString(), 
        projectId: newTaskSelect.value,
        task: newTaskInput.value,
        date: newTaskDate.value,
        priority: taskPriority.value
    })

    // --- Clear the form ---
    newTaskSelect.value = '';
    newTaskInput.value = '';
    newTaskDate.value = '';
    taskPriority.value = '';

    newTaskForm.style.display = 'none';

    saveAndRender();
})

// --- EVENT: Edit task ---
let taskEdit = null;

editTaskForm.addEventListener('submit', (e) => {
    e.preventDefault();

    taskEdit.projectId = editTaskSelect.value;
    taskEdit.task = editTaskInput.value;
    taskEdit.date = editTaskDate.value;
    taskEdit.priority = editTaskPriority.value;

    editTaskForm.style.display = 'none';
    newTaskForm.style.display = 'flex';

    editTaskForm.value = '';
    editTaskInput.value = '';
    editTaskDate.value = '';
    editTaskPriority.value = '';

    newTaskForm.style.display = 'none';

    saveAndRender();
})

// --- EVENT: Show edit form & delete task card ---
cardsContainer.addEventListener('click', (e) => {

    if(e.target.classList[1] === 'fa-trash-alt') {
        const taskDeleteIndex = tasks.findIndex((task) => task._id === e.target.dataset.editTask);
        tasks.splice(taskDeleteIndex, 1);

        saveAndRender();
    }

    if(e.target.classList[1] === 'fa-edit') {
        newTaskForm.style.display = 'none';
        editTaskForm.style.display = 'flex';

        taskEdit = tasks.find((task) => task._id === e.target.dataset.editTask);

        editTaskSelect.value = taskEdit.projectId;
        editTaskInput.value = taskEdit.task;
        editTaskDate.value = taskEdit.date;
        editTaskPriority.value = taskEdit.priority;
    }
})

// --- EVENT: Get selected project id ---
projectsList.addEventListener('click', (e) => {
    if(e.target.tagName.toLowerCase() === 'li') {
        if(!e.target.dataset.projectId) {
            selectedProjectId = null;
        } else {
            selectedProjectId = e.target.dataset.projectId;
        }

        saveAndRender();
    }
})

// --- EVENT: Get selected project color ---
projectsList.addEventListener('change', (e) => {
    if(e.target.tagName.toLowerCase() === 'input') {
        const newProjectColor = e.target.value;
        const projectId = e.target.parentElement.dataset.projectId;
        const projectToEdit = projects.find((project) => project._id === projectId);

        projectToEdit.color = newProjectColor;

        saveAndRender();
    }
})

// --- EVENT: Delete selected project ---
selectedProject.addEventListener('click', (e) => {
    if(e.target.tagName.toLowerCase() === 'span') {
        projects = projects.filter((project) => project._id != selectedProjectId);
        tasks = tasks.filter((task) => task.projectId != selectedProjectId);
        selectedProjectId = null;

        saveAndRender();
    }
})

function saveAndRender() {
    save();
    render();
}

function render() {
    clearChildElements(projectsList);
    clearChildElements(newTaskSelect);
    clearChildElements(editTaskSelect);
    clearChildElements(cardsContainer);

    renderProjects();
    renderFormOptions();
    renderTasks();

    // --- Set the selected project ---
    if(!selectedProjectId || selectedProjectId === 'null') {
        selectedProject.innerHTML = `Selected project: <strong>All Projects</strong>`;
    } else {
        const currentProject = projects.find((project) => project._id === selectedProjectId);
        selectedProject.innerHTML = `Selected project: <strong>${currentProject.project}</strong><span class="delete-btn selected-project">Delete Project</span>`;
    }
}

function renderProjects() {
    projectsList.innerHTML += `<li class="projects-item">All projects</li>`;
    projects.forEach(({ _id, project, color }) => {
        projectsList.innerHTML += `<li class="projects-item" data-project-id=${_id}>${project}<input type="color" value=${color} class="projects-color"></li>`;
    })
}

function renderFormOptions() {
    newTaskSelect.innerHTML += `<option value="">All Projects</option>`;
    editTaskSelect.innerHTML += `<option value="">All Projects</option>`;
    projects.forEach(({ _id, project }) => {
        newTaskSelect.innerHTML += `<option value=${_id}>${project}</option>`;
        editTaskSelect.innerHTML += `<option value=${_id}>${project}</option>`;
    })
}

function renderTasks() {
    let tasksRender = tasks;

    if(selectedProjectId && selectedProjectId != 'null') {
        tasksRender = tasks.filter((task) => task.projectId === selectedProjectId);
    }

    tasksRender.forEach(({ _id, projectId, task, date, priority }) => {
        const { color, project } = projects.find(({ _id }) => _id === projectId);
        const backgroundColor = convertHexToRGBA(color, 20);
        cardsContainer.innerHTML += `
            <div class="task" style="border-color: ${color};">
                <div class="task-tag" style="background-color: ${backgroundColor}; color: ${color};">${project}</div>
                <p class="task-description">${task}</p>
                <p class="task-date">Due date: <br>${date}</p>
                <p class="task-priority">Priority: ${priority}</p> 
                <div class="task-actions">
                    <i class="far fa-edit" data-edit-task=${_id}></i>
                    <i class="far fa-trash-alt" data-delete-task=${_id}></i>
                </div>
            </div>
        `
    })
}

// --- HELPER FUNCTIONS ---
function clearChildElements(element) {
    while(element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

function getRandomHexColor() {
    var hex = (Math.round(Math.random() * 0xffffff)).toString(16);
    while(hex.length < 6) hex = "0" + hex;
    return `#${hex}`;
}

function convertHexToRGBA(hexCode, opacity) {
    let hex = hexCode.replace('#', '');

    if(hex.length === 3) {
        hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
    }

    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    return `rgba(${r},${g},${b},${opacity / 100})`;
}

window.addEventListener('load', render);

export {
    projects,
    tasks,
    selectedProjectId
}