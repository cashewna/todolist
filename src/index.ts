import './css/style.css';
import { ProjectInterface } from './interfaces/Project';
import { ProjectModel } from './models/Project';
import { ProjectViewModel } from './viewmodels/Project';
import { ProjectView } from './views/Project';
import { Observable } from './utils/Observable';

// Initialise 'All' project view with empty todos
const allProject: ProjectInterface = {
    id: 0,
    name: 'All',
    todos: []
};

const allProjectViewModel = new ProjectViewModel(new ProjectModel(allProject));
const allProjectView = new ProjectView(allProjectViewModel);
const projectElement = allProjectView.render();

const content = document.getElementById('todo-list');
content.appendChild(projectElement);

// Test Data
allProjectViewModel.addTodo(
    'Test Todo 1',
    'This is a test todo',
    new Date(),
    1,
    false
);

const observable = new Observable();
observable.subscribe(() => console.log('First subscriber notified!'));
observable.subscribe(() => console.log('Second subscriber notified!'));

observable.notify();