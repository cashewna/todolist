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
        button.addEventListener('click', (event) => {
            // Stop the propagation of the click event to prevent the
            // dialog from immediately closing
            event.stopPropagation();
            this.dialogElement.show();
            this.closeDialogEventListener(this.dialogElement);
        });
    }

    public closeDialogEventListener(dialogElement: HTMLDialogElement): void {
        document.addEventListener('click', (event: MouseEvent) => {
            if (!dialogElement.contains(event.target as Node)) {
                dialogElement.close();
            }
        });
    }
}

export default AddTodoDialogView;