interface TodoItem {
    id: number;
    title: string;
    description: string;
    dueDate: Date;
    priority: number;
    completed: boolean;
}

export { TodoItem as TodoItemInterface };