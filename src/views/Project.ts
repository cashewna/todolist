import { ProjectViewModel } from "../viewmodels/Project";
import { TodoItemViewModel } from '../viewmodels/TodoItem';
import { TodoItemView } from './TodoItem';

class Project {
    private viewmodel: ProjectViewModel;
    private projectHeader: HTMLElement;
    private todoList: HTMLUListElement;

    constructor(viewmodel: ProjectViewModel) {
        this.viewmodel = viewmodel;
        this.projectHeader = document.getElementById('project-name');
        this.todoList = document.getElementById('todo-list') as HTMLUListElement;

        this.viewmodel.subscribe(() => {
            this.projectHeader.replaceWith(this.renderProjectName());
            console.log('replacing todo-list items');
            this.todoList.replaceWith(this.render());
        });
    }

    public render(): HTMLUListElement {
        const projectElement = document.createElement('ul');
        projectElement.id = 'todo-list';

        const todoViewModels: TodoItemViewModel[] = this.viewmodel.getTodos();
        todoViewModels.forEach(todoViewModel => {
            const todoView = new TodoItemView(todoViewModel);
            const todoElement = todoView.render();
            projectElement.appendChild(todoElement);
            console.log('rendering todo item');
        });

        return projectElement;
    }

    public renderProjectName(): HTMLHeadingElement {
        const projectName = document.createElement('h1');
        projectName.id = 'project-header';
        projectName.textContent = this.viewmodel.getName();
        return projectName;
    }
}

export { Project as ProjectView };