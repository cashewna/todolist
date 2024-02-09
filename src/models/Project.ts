import { Todo } from "../shared/Todo";

class Project {
    #title: string;
    #todos: Todo[];

    constructor(title: string) {
        this.#title = title;
        this.#todos = [];
    }

    public addTodo(todo: Todo): void {
        this.#todos.push(todo);
    }

    public removeTodo(todoTitle: string): void {
        this.#todos = this.#todos.filter(todo => todo.title !== todoTitle);
    }

    public updateTodo(todoTitle: string, updatedTodo: Todo): void {
        const index = this.#todos.findIndex(todo => todo.title === todoTitle);
        if (index !== -1) {
            this.#todos[index] = updatedTodo;
        }
    }

    public getTodo(todoTitle: string): Todo | undefined {
        return this.#todos.find(todo => todo.title === todoTitle);
    }

    public getTodos(): Todo[] {
        return this.#todos;
    }

    public getProjectTitle(): string {
        return this.#title;
    }
}

export { Project };