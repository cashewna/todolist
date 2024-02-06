import Todo from './interfaces/Todo';

class TodoList {
    #todos: Todo[] = [];
    constructor() {
    }
    
    public addTodo(todo: Todo): void {
        this.#todos.push(todo);
    }
    
    public removeTodo(index: number): void {
        this.#todos.splice(index, 1);
    }
    
    public updateTodoTitle(index: number, todo: string): void {
        this.#todos[index].title = todo;
    }
    
    public getTodos(): Todo[] {
        return this.#todos;
    }
}

export default TodoList;