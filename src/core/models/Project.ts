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
        const todoExists = this.todos.find(t => t.getId() === todo.getId());
        if (!todoExists) {
            this.todos.push(todo);
        } else {
            console.log(`Todo "${todo.getTitle()}" already exists in project`);
        }
    }

    public removeTodo(todoId: number): void {
        const todoIndex = this.todos.findIndex(t => t.getId() === todoId);
        if (todoIndex !== -1) {
            this.todos.splice(todoIndex, 1);
        }
    }

    public getTodos(): Todo[] {
        return this.todos;
    }

    public toJSON(): object {
        return {
            id: this.id,
            name: this.name,
            todos: this.todos.map(todo => todo.toJSON())
        }
    }
}

export default Project;