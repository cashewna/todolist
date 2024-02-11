import './css/style.css';
import TodoListViewModel from './core/viewModels/TodoListViewModel';

const todoListViewModel = new TodoListViewModel();

console.log('Todo List App');
todoListViewModel.addTodoToSelectedProject("0", 'Uno', 'This is a test todo');
todoListViewModel.addTodoToSelectedProject("0", 'Dos', 'This is another test todo');
todoListViewModel.addProject('Test Project');
todoListViewModel.addTodoToSelectedProject("1", 'Tres', 'This is a test todo for project 1');