import { ProjectViewModel } from "../viewmodels/Project";
import { TodoItemViewModel } from '../viewmodels/TodoItem';
import { TodoItemView } from './TodoItem';

class Project {
    private viewmodel: ProjectViewModel;

    constructor(viewmodel: ProjectViewModel) {
        this.viewmodel = viewmodel;
    }

    public render(): HTMLDivElement {
        const projectElement = document.createElement('div');

        const projectName = document.createElement('h1');
        projectName.textContent = this.viewmodel.getName();
        projectElement.appendChild(projectName);

        const todoViewModels: TodoItemViewModel[] = this.viewmodel.getTodos();
        todoViewModels.forEach(todoViewModel => {
            const todoView = new TodoItemView(todoViewModel);
            const todoElement = todoView.render();
            projectElement.appendChild(todoElement);
        });

        return projectElement;
    }
}

export { Project as ProjectView };