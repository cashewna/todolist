import { ProjectModel } from "../models/Project";
import { TodoItemModel } from "../models/TodoItem";
import { TodoItemViewModel } from './TodoItem';
import { Observable } from "../utils/Observable";

class Project {
    private model: ProjectModel;
    private observable: Observable;
    private isActive: boolean;

    constructor(model: ProjectModel) {
        this.model = model;
        this.observable = new Observable();
        this.isActive = false;
    }

    public subscribe(fn: Function) {
        this.observable.subscribe(fn);
    }

    public addTodo(
        title: string,
        description: string,
        dueDate: Date,
        priority: number,
        completed: boolean
    ) {
        const id = this.model.getLength() + 1;
        const newTodo = new TodoItemModel({
            id,
            title,
            description,
            dueDate,
            priority,
            completed
        });

        this.model.addTodo(newTodo);
        this.observable.notify();
    }

    public getName(): string {
        return this.model.getName();
    }

    public getTodos(): TodoItemViewModel[] {
        return this.model.getTodos().map(
            todoModel => new TodoItemViewModel(todoModel)
        );
    }

    public setActive(active: boolean) {
        this.isActive = active;
        this.observable.notify();
    }
}

export { Project as ProjectViewModel };