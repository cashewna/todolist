import { Todo } from "../shared/Todo";

class TodoList {
    #todos: Todo[];
    constructor() {
        this.#todos = [];
    }

    public addTodo(todo: Todo): void {
        this.#todos.push(todo);
    }

    public getTodos(): Todo[] {
        return this.#todos;
    }

    public setIsDone(todo: Todo, isDone: boolean): void {
        for (let i = 0; i < this.#todos.length; i++) {
            if (this.#todos[i].title === todo.title) {
                this.#todos[i].isDone = isDone;
            }
        }
    }
}

export { TodoList };