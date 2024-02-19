import './css/style.css';
import TodoListViewModel from './core/viewModels/TodoListViewModel';

const todoListViewModel = new TodoListViewModel();
console.log('Loading todo list from local storage');
todoListViewModel.loadTodoListFromLocalStorage();

// todoListViewModel.addTodoToSelectedProject("All", 'Uno', 'This is a test todo');
// todoListViewModel.addTodoToSelectedProject("All", 'Dos', 'This is another test todo');
// todoListViewModel.addProject('Test Project');
// todoListViewModel.addTodoToSelectedProject("Test Project", 'Tres', 'This is a test todo for project 1');

window.addEventListener('beforeunload', () => {
    console.log('Saving todo list to local storage');
    todoListViewModel.saveTodoListToLocalStorage();
});