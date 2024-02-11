import './css/style.css';
import { ProjectInterface } from './interfaces/Project';
import { ProjectModel } from './models/Project';
import { ProjectViewModel } from './viewmodels/Project';
import { ProjectView } from './views/Project';
import { ProjectManager } from './services/ProjectManager';

const projectManager = new ProjectManager();

function addProject(name: string) {
    const projectModel = new ProjectModel(name);
    const projectViewModel = new ProjectViewModel(projectModel);
    const projectView = new ProjectView(projectViewModel);

    projectManager.addProject(projectViewModel);

    const projectListElement = document.getElementById('project-list') as HTMLElement;
    projectListElement.appendChild(projectView.renderProjectName());
}

function testAddTodo() {
    const project = projectManager.getActiveProject();
    if (project) {
        project.addTodo('Test Todo', 'This is a test todo', new Date(), 1, false);

        const todo = project.getTodos()[0];
        console.assert(todo.getTitle() === 'Test Todo', 'Todo title is incorrect');
        console.assert(todo.getDescription() === 'This is a test todo', 'Todo description is incorrect');
        console.assert(todo.getPriority() === 1, 'Todo priority is incorrect');
        console.assert(todo.isCompleted() === false, 'Todo completed status is incorrect');
    }
}

(function main() {
    addProject('All');
})();

(function test() {
    testAddTodo();
})();
