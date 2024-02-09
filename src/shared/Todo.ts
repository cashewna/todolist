interface Todo {
    title: string;
    description?: string;
    dueDate?: Date;
    priority?: number;
    isDone: boolean;
    project?: string;
}

export { Todo };