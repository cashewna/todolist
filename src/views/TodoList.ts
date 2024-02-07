import { Todo } from "../shared/Todo";

class TodoList {
    #todoListElement: HTMLUListElement;
    constructor(todoListElement: HTMLUListElement) {
        this.#todoListElement = todoListElement;
    }

    public render(todos: Todo[]): void {
        this.#todoListElement.innerHTML = "";
        todos.forEach((todo: Todo) => {
            const todoElement = document.createElement("li");

            const title = document.createElement('h1');
            title.textContent = todo.title;

            const description = document.createElement('p');
            description.textContent = todo.description;

            const dueDate = document.createElement('p');
            dueDate.textContent = todo.dueDate.toLocaleDateString();

            const priority = document.createElement('p');
            priority.textContent = `Priority: ${todo.priority.toString()}`;

            todoElement.append(title, description, dueDate, priority);

            this.#todoListElement.appendChild(todoElement);
        });
    }

    public showAddTodoDialog(): void {
        const addTodoButton = document.getElementById('add-todo-btn') as HTMLButtonElement;
        const dialog = document.getElementById('add-todo-dialog') as HTMLDialogElement;

        addTodoButton.addEventListener('click', () => {
            dialog.showModal();
        });

        // Close the dialog when the user clicks outside of it
        window.addEventListener('click', (event: MouseEvent) => {
            if (event.target === dialog) {
                dialog.close();
            }
        });
    }
}

export { TodoList };