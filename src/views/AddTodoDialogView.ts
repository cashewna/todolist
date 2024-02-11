import TodoListViewModel from "../core/viewModels/TodoListViewModel";

class AddTodoDialogView {
    private dialogElement: HTMLDialogElement;
    private addTodoButton: HTMLButtonElement;
    private todoListViewModel: TodoListViewModel;

    constructor(todoListViewModel: TodoListViewModel) {
        this.todoListViewModel = todoListViewModel;
        this.dialogElement = document.querySelector('#add-todo-dialog');
        this.addTodoButton = document.querySelector('#add-todo-btn');
        this.openDialogEventListener(this.addTodoButton);
    }

    private openDialogEventListener(button: HTMLButtonElement): void {
        button.addEventListener('click', () => {
            console.log('Add todo button clicked');
            this.dialogElement.show();
        });
    }
}

export default AddTodoDialogView;