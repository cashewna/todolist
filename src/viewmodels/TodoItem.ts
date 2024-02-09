import { TodoItemModel } from "../models/TodoItem";

class TodoItem {
    private model: TodoItemModel;

    constructor(model: TodoItemModel) {
        this.model = model;
    }

    public toggle(): void {
        this.model.setCompleted(!this.model.isCompleted());
    }

    public getTitle(): string {
        return this.model.getTitle();
    }

    public isCompleted(): boolean {
        return this.model.isCompleted();
    }
}

export { TodoItem as TodoItemViewModel };