import { Todo } from "../shared/Todo";

class TodoList {
    #todoListElement: HTMLUListElement;
    constructor(todoListElement: HTMLUListElement) {
        this.#todoListElement = todoListElement;
    }

    public render(todos: Todo[]): void {
        this.#todoListElement.innerHTML = "";
        todos.forEach((todo: Todo, index) => {
            const todoElement = document.createElement("li");

            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.checked = todo.isDone;
            checkbox.classList.add("todo-checkbox");
            checkbox.addEventListener('change', () => {
                const event = new CustomEvent('todoChanged', {
                    detail: { index, isDone: checkbox.checked }
                });
                this.#todoListElement.dispatchEvent(event);
            });
            todoElement.appendChild(checkbox);

            const title = document.createElement('h1');
            title.textContent = todo.title;
            todoElement.appendChild(title);

            if (todo.description) {
                const description = document.createElement('p');
                description.textContent = todo.description;
                todoElement.appendChild(description);
            }

            if (todo.dueDate && !isNaN(todo.dueDate.getTime())) {
                const dueDate = document.createElement('p');
                dueDate.textContent = todo.dueDate.toLocaleDateString();
                todoElement.appendChild(dueDate);
            }

            if (todo.priority && !isNaN(todo.priority)) {
                const priority = document.createElement('p');
                priority.textContent = `Priority: ${todo.priority.toString()}`;
                todoElement.appendChild(priority);
            }

            if (todo.isDone) {
                todoElement.classList.add('done');
            }

            this.#todoListElement.appendChild(todoElement);
        });
    }

    public showAddTodoDialog(): void {
        const addTodoButton = document.getElementById('add-todo-btn') as HTMLButtonElement;
        const dialog = document.getElementById('add-todo-dialog') as HTMLDialogElement;

        addTodoButton.addEventListener('click', (event) => {
            // Stop the propagation of the click event
            // to prevent the dialog from closing immediately
            event.stopPropagation();
            dialog.show();
            this.closeAddTodoDialog(dialog);
        });
    }

    public closeAddTodoDialog(dialog: HTMLDialogElement): void {
        document.addEventListener('click', (event: MouseEvent) => {
            if (!dialog.contains(event.target as Node)) {
                dialog.close();
            }
        });
    }

    public getTodoListElement(): HTMLUListElement {
        return this.#todoListElement;
    }
}

export { TodoList };