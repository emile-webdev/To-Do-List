import {
    projects,
    tasks,
    selectedProjectId
} from './index';

// --- LOCAL STORAGE KEYS --- 
const LOCAL_STORAGE_PROJECTS_KEY = 'LOCAL_STORAGE_PROJECTS_KEY';
const LOCAL_STORAGE_TASKS_KEY = 'LOCAL_STORAGE_TASKS_KEY';
const LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY = 'LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY';

function save() {
    localStorage.setItem(LOCAL_STORAGE_PROJECTS_KEY, JSON.stringify(projects));
    localStorage.setItem(LOCAL_STORAGE_TASKS_KEY, JSON.stringify(tasks));
    localStorage.setItem(LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY, selectedProjectId);
}

export {
    LOCAL_STORAGE_PROJECTS_KEY,
    LOCAL_STORAGE_TASKS_KEY,
    LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY,
    save
}