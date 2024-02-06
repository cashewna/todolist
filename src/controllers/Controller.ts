import View from "../views/View";
import TodoListOperations from "../shared/TodoListOperations";
import Todo from "../models/interfaces/Todo";
import TodoList from "../models/TodoList";

class Controller implements TodoListOperations {
    #view: View;
    #model: TodoList;

    constructor(view: View, model: TodoList) {
        this.#view = view;
        this.#model = model;
    }

    addTodo(todo: Todo): void {
        this.#model.addTodo(todo);
    }

    removeTodo(index: number): void {
        throw new Error("Method not implemented.");
    }

    updateTodoTitle(index: number, todo: string): void {
        throw new Error("Method not implemented.");
    }

    getTodos(): Todo[] {
        throw new Error("Method not implemented.");
    }
    
    public render(): void {
        this.#view.render();
    }
}

export default Controller;