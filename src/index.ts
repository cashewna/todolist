import './css/style.css';
import { Main as MainView } from './views/Main';
import { TodoList as TodoListModel } from './models/TodoList';
import { TodoList as TodoListView } from './views/TodoList';
import { TodoList as TodoListController } from './controllers/TodoList';
import { Sidebar as SidebarModel } from './models/Sidebar';
import { Sidebar as SidebarView } from './views/Sidebar';
import { Sidebar as SidebarController } from './controllers/Sidebar';
import { Project as ProjectController } from './controllers/Project';
import { Project as ProjectModel } from './models/Project';
import { Project as ProjectView } from './views/Project';

const mainView = new MainView();
mainView.render();

const todoListElement = document.getElementById('todo-list') as HTMLUListElement;
const todoListModel = new TodoListModel();
const todoListView = new TodoListView(todoListElement);
const todoListController = new TodoListController(todoListModel, todoListView);

const sidebarModel = new SidebarModel();
const sidebarView = new SidebarView();
const sidebarController = new SidebarController(sidebarModel, sidebarView);

// Test data
todoListController.addTodo({
    title: 'First todo',
    description: 'First todo description',
    dueDate: new Date(),
    priority: 1,
    isDone: false,
    project: 'Project 1'
});


const projectOneModel = new ProjectModel('Project 1');
const projectTwoModel = new ProjectModel('Project 2');
const projectOneView = new ProjectView();
const projectTwoView = new ProjectView();

const projectOneController = new ProjectController(projectOneModel, projectOneView);
const projectTwoController = new ProjectController(projectTwoModel, projectTwoView);
sidebarController.addProject(projectOneController);
sidebarController.addProject(projectTwoController);
sidebarView.render();