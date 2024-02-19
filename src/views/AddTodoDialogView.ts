import TodoListViewModel from "../core/viewModels/TodoListViewModel";

class AddTodoDialogView {
    private dialogElement: HTMLDialogElement;
    private addTodoButton: HTMLButtonElement;
    private todoListViewModel: TodoListViewModel;
    private form: HTMLFormElement;

    constructor(todoListViewModel: TodoListViewModel) {
        this.todoListViewModel = todoListViewModel;
        this.dialogElement = document.querySelector('#add-todo-dialog');
        this.addTodoButton = document.querySelector('#add-todo-btn');
        this.form = document.querySelector('#add-todo-form');

        this.openDialogEventListener(this.addTodoButton);
        this.addTodoEventListener(this.form);
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

    // Add todo to selected project on submit (default project is 'All')
    public addTodoEventListener(form: HTMLFormElement): void {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const formData = new FormData(form);
            const title = formData.get('title') as string;
            const description = formData.get('description') as string;
            const dueDate = formData.get('dueDate') as string;
            const projectName = formData.get('projectName') as string;
            const priority = formData.get('priority') as string;

            this.todoListViewModel.addTodoToSelectedProject(projectName, title, description, dueDate, priority);
            this.dialogElement.close();
        });
    }
}

export default AddTodoDialogView;