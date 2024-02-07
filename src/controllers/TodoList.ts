import { Todo } from "../shared/Todo";
import { TodoListOperations } from "../shared/TodoListOperations";
import { TodoList as TodoListModel } from "../models/TodoList";
import { TodoList as TodoListView } from "../views/TodoList";

class TodoList implements TodoListOperations {
    #model: TodoListModel;
    #view: TodoListView;

    constructor(model: TodoListModel, view: TodoListView) {
        this.#model = model;
        this.#view = view;
        this.handleAddTodoButtonClick();
        this.handleAddTodoFormSubmit();
        this.handleTodoChange();
    }

    public addTodo(todo: Todo): void {
        this.#model.addTodo(todo);
        this.#view.render(this.#model.getTodos());
    }

    private handleAddTodoButtonClick(): void {
        this.#view.showAddTodoDialog();
    }

    private handleAddTodoFormSubmit(): void {
        const form = document.getElementById('add-todo-form') as HTMLFormElement;
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const titleInput = document.querySelector('input[name="title"]') as HTMLInputElement;
            const descriptionInput = document.querySelector('input[name="description"]') as HTMLInputElement;
            const dueDateInput = document.querySelector('input[name="dueDate"]') as HTMLInputElement;
            const priorityInput = document.querySelector('input[name="priority"]') as HTMLInputElement;

            const todo: Todo = {
                title: titleInput.value,
                description: descriptionInput.value,
                dueDate: new Date(dueDateInput.value),
                priority: parseInt(priorityInput.value),
                isDone: false
            };

            this.addTodo(todo);
        });
    }

    private handleTodoChange(): void {
        this.#view.getTodoListElement().addEventListener('todoChanged', (event: CustomEvent) => {
            const { index, isDone } = event.detail;
            const todo = this.#model.getTodos()[index];
            this.#model.setIsDone(todo, isDone);
            this.#view.render(this.#model.getTodos());
        });
    }
}

export { TodoList };