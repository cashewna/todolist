import { Project as ProjectModel } from "../models/Project";
import { Todo } from "../shared/Todo";
import { Project as ProjectView } from "../views/Project";

class Project {
    #model: ProjectModel;
    #view: ProjectView;

    constructor(model: ProjectModel, view: ProjectView) {
        this.#model = model;
        this.#view = view;
    }

    public getModel(): ProjectModel {
        return this.#model;
    }

    public addTodo(todo: Todo): void {
        this.#model.addTodo(todo);
        this.renderData();
    }

    private renderData(): void {
        const data = this.#model.getTodos();
        this.#view.displayTodos(data);
    }

    public getTodos(): Todo[] {
        return this.#model.getTodos();
    }
}

export { Project };