import { Todo } from "../shared/Todo";
import { TodoListOperations } from "../shared/TodoListOperations";
import { TodoList as TodoListModel } from "../models/TodoList";
import { TodoList as TodoListView } from "../views/TodoList";

class TodoList implements TodoListOperations {
    #model: TodoListModel;
    #view: TodoListView;

    constructor(model: TodoListModel, view: TodoListView) {
        this.#model = model;
        this.#view = view;
    }

    public addTodo(todo: Todo): void {
        this.#model.addTodo(todo);
        this.#view.render(this.#model.getTodos());
    }
}

export { TodoList };