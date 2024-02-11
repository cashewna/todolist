import Todo from './Todo';

class Project {
    private id: number;
    private name: string;
    private todos: Todo[];

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
        this.todos = [];
    }

    public getId(): number {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    public addTodo(todo: Todo): void {
        this.todos.push(todo);
    }
}

export default Project;