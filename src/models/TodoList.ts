class TodoList {
    #todos: string[] = [];
    constructor() {
    }
    
    public addTodo(todo: string): void {
        this.#todos.push(todo);
    }
    
    public removeTodo(index: number): void {
        this.#todos.splice(index, 1);
    }
    
    public updateTodo(index: number, todo: string): void {
        this.#todos[index] = todo;
    }
    
    public getTodos(): string[] {
        return this.#todos;
    }
}

export default TodoList;