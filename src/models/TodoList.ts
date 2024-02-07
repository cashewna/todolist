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
}

export { TodoList };