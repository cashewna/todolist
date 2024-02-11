import './css/style.css';
import TodoListViewModel from './core/viewModels/TodoListViewModel';

const todoListViewModel = new TodoListViewModel();

todoListViewModel.addTodoToSelectedProject(0, 'Test Todo', 'This is a test todo');
todoListViewModel.addTodoToSelectedProject(0, 'Another Test Todo', 'This is another test todo');
todoListViewModel.addProject('Test Project');