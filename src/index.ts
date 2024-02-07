import './css/style.css';
import { Main as MainView } from './views/Main';
import { TodoList as TodoListModel } from './models/TodoList';
import { TodoList as TodoListView } from './views/TodoList';
import { TodoList as TodoListController } from './controllers/TodoList';
import { Todo } from './shared/Todo';

const mainView = new MainView();
mainView.render();

const todoListElement = document.getElementById('todo-list') as HTMLUListElement;
const todoListModel = new TodoListModel();
const todoListView = new TodoListView(todoListElement);
const todoListController = new TodoListController(todoListModel, todoListView);

// Test
const todo: Todo = {
    title: "Test Todo",
    description: "Test Description",
    dueDate: new Date(),
    priority: 1,
    isDone: false
}

const todo2: Todo = {
    title: "Test Todo 2",
    description: "Test Description 2",
    dueDate: new Date(),
    priority: 2,
    isDone: true
}

todoListController.addTodo(todo);
todoListController.addTodo(todo2);
console.log(todoListModel.getTodos());