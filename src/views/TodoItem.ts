import { TodoItemViewModel } from "../viewmodels/TodoItem";

class TodoItem {
    private viewModel: TodoItemViewModel;

    constructor(viewModel: TodoItemViewModel) {
        this.viewModel = viewModel;
    }

    public render(): HTMLDivElement {
        const todoElement = document.createElement('div');
        todoElement.classList.add('todo-item');

        const checkbox = this.createCheckbox();
        todoElement.appendChild(checkbox);

        const title = this.createTitle();
        todoElement.appendChild(title);

        const description = this.createDescription();
        todoElement.appendChild(description);

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

    private createTitle(): HTMLSpanElement {
        const title = document.createElement('span');
        title.classList.add('todo-title');
        title.textContent = this.viewModel.getTitle();
        return title;
    }

    private createDescription(): HTMLParagraphElement {
        const description = document.createElement('p');
        description.classList.add('todo-description');
        description.textContent = this.viewModel.getDescription();
        return description;
    }
}

export { TodoItem as TodoItemView };