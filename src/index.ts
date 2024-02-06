import './css/style.css';
import ContentView from './views/ContentView';
import Controller from './controllers/Controller';
import TodoList from './models/TodoList';

const todoView = new ContentView();
const todoModel = new TodoList();
const contentController = new Controller(todoView, todoModel);
contentController.render();