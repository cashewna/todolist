import { TodoItemModel } from "../models/TodoItem";

interface Project {
    id: number;
    name: string;
    todos: TodoItemModel[];
}

export { Project as ProjectInterface };