import { TodoItemInterface } from "../interfaces/TodoItem";

class TodoItem {
    private todoItem: TodoItemInterface;

    constructor(todoItem: TodoItemInterface) {
        this.todoItem = todoItem;
    }

    public getTitle(): string {
        return this.todoItem.title;
    }

    public setTitle(title: string): void {
        this.todoItem.title = title;
    }

    public getDescription(): string {
        return this.todoItem.description;
    }

    public setDescription(description: string): void {
        this.todoItem.description = description;
    }

    public getDueDate(): Date {
        return this.todoItem.dueDate;
    }

    public setDueDate(dueDate: Date): void {
        this.todoItem.dueDate = dueDate;
    }

    public getPriority(): number {
        return this.todoItem.priority;
    }

    public setPriority(priority: number): void {
        this.todoItem.priority = priority;
    }

    public isCompleted(): boolean {
        return this.todoItem.completed;
    }

    public setCompleted(completed: boolean): void {
        this.todoItem.completed = completed;
    }
}

export { TodoItem as TodoItemModel };