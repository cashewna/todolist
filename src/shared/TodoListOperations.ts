import Todo from "../models/interfaces/Todo";

interface TodoListOperations {
    addTodo(todo: Todo): void;
    removeTodo(index: number): void;
    updateTodoTitle(index: number, todo: string): void;
    getTodos(): Todo[];
}

export default TodoListOperations;