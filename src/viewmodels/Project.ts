import { ProjectModel } from "../models/Project";
import { TodoItemModel } from "../models/TodoItem";
import { TodoItemViewModel } from './TodoItem';

class Project {
    private model: ProjectModel;

    constructor(model: ProjectModel) {
        this.model = model;
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
    }

    public getName(): string {
        return this.model.getName();
    }

    public getTodos(): TodoItemViewModel[] {
        return this.model.getTodos().map(
            todoModel => new TodoItemViewModel(todoModel)
        );
    }
}

export { Project as ProjectViewModel };