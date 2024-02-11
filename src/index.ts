import './css/style.css';
import TodoListViewModel from './core/viewModels/TodoListViewModel';

const todoListViewModel = new TodoListViewModel();
todoListViewModel.addTodoToSelectedProject("All", 'Uno', 'This is a test todo');
todoListViewModel.addTodoToSelectedProject("All", 'Dos', 'This is another test todo');
todoListViewModel.addProject('Test Project');
todoListViewModel.addTodoToSelectedProject("Test Project", 'Tres', 'This is a test todo for project 1');