import { TodoItemViewModel } from "../viewmodels/TodoItem";

class TodoItem {
    private viewModel: TodoItemViewModel;

    constructor(viewModel: TodoItemViewModel) {
        this.viewModel = viewModel;
    }

    public render(): HTMLDivElement {
        const todoElement = document.createElement('div');
        todoElement.classList.add('todo-item');
        todoElement.textContent = this.viewModel.getTitle();

        const checkbox = this.createCheckbox();
        todoElement.appendChild(checkbox);

        return todoElement;
    }

    private createCheckbox(): HTMLInputElement {
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = this.viewModel.isCompleted();
        checkbox.addEventListener('change', () => {
            this.viewModel.toggle();
        });

        return checkbox;
    }
}

export { TodoItem as TodoItemView };