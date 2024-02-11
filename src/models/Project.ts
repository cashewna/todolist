import { ProjectInterface } from "../interfaces/Project";
import { TodoItemModel } from "./TodoItem";

class Project {
    private static nextId = 0;
    private project: ProjectInterface;

    constructor(projectName: string) {
        this.project = {
            id: Project.nextId++,
            name: projectName,
            todos: []
        }
    }

    public addTodo(todo: TodoItemModel) {
        this.project.todos.push(todo);
    }

    public getLength(): number {
        return this.project.todos.length;
    }

    public getName(): string {
        return this.project.name;
    }

    public getTodos(): TodoItemModel[] {
        return this.project.todos;
    }
}

export { Project as ProjectModel };