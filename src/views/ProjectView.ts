import Todo from '../core/models/Todo';

class ProjectView {
    private projectNameElement: HTMLElement;
    private todoListElement: HTMLElement;

    constructor() {
        this.projectNameElement = document.querySelector('#project-name');
        this.todoListElement = document.querySelector('#todo-list');
    }

    public updateProjectName(name: string): void {
        if (this.projectNameElement) {
            this.projectNameElement.textContent = name;
        }
    }

    public renderToDoList(todos: Todo[]): void {
        this.todoListElement.innerHTML = '';
        todos.forEach(todo => {
            const todoDiv = this.createTodoDiv(todo);
            this.todoListElement.appendChild(todoDiv);
        });
    }

    private createTodoDiv(todo: Todo): HTMLDivElement {
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = todo.isCompleted();
        todoDiv.appendChild(checkbox);

        checkbox.addEventListener('change', () => {
            todoDiv.classList.toggle('completed');
        });

        const titleElement = document.createElement('span');
        titleElement.textContent = todo.getTitle();
        todoDiv.appendChild(titleElement);

        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = todo.getDescription();
        todoDiv.appendChild(descriptionElement);
        return todoDiv;
    }

    public appendTodoItem(todo: Todo): void {
        const todoDiv = this.createTodoDiv(todo);
        this.todoListElement.appendChild(todoDiv);
    }
}

export default ProjectView;