import './style.css';

// --- GLOBAL VARIABLES PROJECTS ---
const newProjectForm = document.querySelector('[data-new-project-form]');
const newProjectInput = document.querySelector('[data-new-project-input]');
const projectsContainer = document.querySelector('[data-projects]');

// --- GLOBAL VARIABLES TASKS
const newTodoForm = document.querySelector('[data-new-todo-form]');
const newTodoSelect = document.querySelector('[data-new-todo-select]');
const newTodoInput = document.querySelector('[data-new-todo-input]');
const editTodoForm = document.querySelector('[data-edit-todo-form]');
const editTodoSelect = document.querySelector('[data-edit-todo-select]');
const editTodoInput = document.querySelector('[data-edit-todo-input]');
const todosContainer = document.querySelector('[data-cards]');
const currentlyViewing = document.querySelector('[data-currently-viewing]');

// --- LOCAL STORAGE KEYS --- 
const LOCAL_STORAGE_PROJECTS_KEY = 'LOCAL_STORAGE_PROJECTS_KEY';
const LOCAL_STORAGE_TODOS_KEY = 'LOCAL_STORAGE_TODOS_KEY';
const LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY = 'LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY';

let projects = JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECTS_KEY)) || [];
let todos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_TODOS_KEY)) || [];
let selectedProjectId = localStorage.getItem(LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY);

// --- EVENT: Add Project ---
newProjectForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const project = newProjectInput.value;
    // --- Check input ---
    const isProjectEmpty = !project || !project.trim().length;

    if(isProjectEmpty) {
        return console.log('Please enter a task');
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

// --- EVENT: Add Task ---
newTodoForm.addEventListener('submit', (e) => {
    e.preventDefault();

    todos.push({ 
        _id: Date.now().toString(), 
        projectId: newTodoSelect.value,
        todo: newTodoInput.value 
    })

    // --- Clear the form ---
    newTodoSelect.value = '';
    newTodoInput.value = '';

    saveAndRender();
})

// --- EVENT: Edit todo ---
let todoEdit = null;

editTodoForm.addEventListener('submit', (e) => {
    e.preventDefault();

    todoEdit.projectId = editTodoSelect.value;
    todoEdit.todo = editTodoInput.value;

    editTodoForm.style.display = 'none';
    newTodoForm.style.display = 'flex';

    editTodoForm.value = '';
    editTodoInput.value = '';

    saveAndRender();
})

// --- EVENT: Show edit form or delete todo card ---
todosContainer.addEventListener('click', (e) => {
    if(e.target.classList[1] === 'fa-trash-alt') {
        const todoDeleteIndex = todos.findIndex((todo) => todo._id === e.target.dataset.editTodo);
        todos.splice(todoDeleteIndex, 1);

        saveAndRender();
    }

    if(e.target.classList[1] === 'fa-edit') {
        newTodoForm.style.display = 'none';
        editTodoForm.style.display = 'flex';

        todoEdit = todos.find((todo) => todo._id === e.target.dataset.editTodo);

        editTodoSelect.value = todoEdit.projectId;
        editTodoInput.value = todoEdit.todo;
    }
})

// --- EVENT: Get selected project id ---
projectsContainer.addEventListener('click', (e) => {
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
projectsContainer.addEventListener('change', (e) => {
    if(e.target.tagName.toLowerCase() === 'input') {
        const newProjectColor = e.target.value;
        const projectId = e.target.parentElement.dataset.projectId;
        const projectToEdit = projects.find((project) => project._id === projectId);

        projectToEdit.color = newProjectColor;

        saveAndRender();
    }
})

// --- EVENT: Delete selected project ---
currentlyViewing.addEventListener('click', (e) => {
    if(e.target.tagName.toLowerCase() === 'span') {
        projects = projects.filter((project) => project._id != selectedProjectId);
        todos = todos.filter((todo) => todo.projectId != selectedProjectId);
        selectedProjectId = null;

        saveAndRender();
    }
})

function saveAndRender() {
    save();
    render();
}

function save() {
    localStorage.setItem(LOCAL_STORAGE_PROJECTS_KEY, JSON.stringify(projects));
    localStorage.setItem(LOCAL_STORAGE_TODOS_KEY, JSON.stringify(todos));
    localStorage.setItem(LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY, selectedProjectId);
}

function render() {
    clearChildElements(projectsContainer);
    clearChildElements(newTodoSelect);
    clearChildElements(editTodoSelect);
    clearChildElements(todosContainer);

    renderProjects();
    renderFormOptions();
    renderTodos();

    // --- Set the current viewing project ---
    if(!selectedProjectId || selectedProjectId === 'null') {
        currentlyViewing.innerHTML = `Selected project: <strong>All Projects</strong>`;
    } else {
        const currentProject = projects.find((project) => project._id === selectedProjectId);
        currentlyViewing.innerHTML = `Selected project: <strong>${currentProject.project}</strong><span class="delete-btn currently-viewing">Delete Project</span>`;
    }
}

function renderProjects() {
    projectsContainer.innerHTML += `<li class="sidebar-item">All projects</li>`;
    projects.forEach(({ _id, project, color }) => {
        projectsContainer.innerHTML += `<li class="sidebar-item" data-project-id=${_id}>${project}<input type="color" value=${color} class="sidebar-color"></li>`;
    })
}

function renderFormOptions() {
    newTodoSelect.innerHTML += `<option value="">All Projects</option>`;
    editTodoSelect.innerHTML += `<option value="">All Projects</option>`;
    projects.forEach(({ _id, project }) => {
        newTodoSelect.innerHTML += `<option value=${_id}>${project}</option>`;
        editTodoSelect.innerHTML += `<option value=${_id}>${project}</option>`;
    })
}

function renderTodos() {
    let todosRender = todos;

    if(selectedProjectId && selectedProjectId != 'null') {
        todosRender = todos.filter((todo) => todo.projectId === selectedProjectId);

    }

    todosRender.forEach(({ _id, projectId, todo }) => {
        const { color, project } = projects.find(({ _id }) => _id === projectId);
        const backgroundColor = convertHexToRGBA(color, 20);
        todosContainer.innerHTML += `
            <div class="todo" style="border-color: ${color};">
                <div class="todo-tag" style="background-color: ${backgroundColor}; color: ${color};">${project}</div>
                <p class="todo-description">${todo}</p>
                <div class="todo-actions">
                    <i class="far fa-edit" data-edit-todo=${_id}></i>
                    <i class="far fa-trash-alt" data-delete-todo=${_id}></i>
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