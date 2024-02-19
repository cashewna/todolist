interface TodoData {
    id: number;
    title: string;
    description: string;
    completed: boolean;
    projectId: number;
    projectTitle: string;
    priority: number;
    dueDate: Date;
}

export default TodoData;