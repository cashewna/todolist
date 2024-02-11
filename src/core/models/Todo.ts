import ITodo from '../interfaces/ITodo';

class Todo implements ITodo {
    private id: number;
    private title: string;
    private description: string;
    private completed: boolean;
    private projectId: number;
    private priority: number;

    private static nextId = 0;

    constructor(projectId: number, title: string, description?: string) {
        this.id = Todo.nextId++;
        this.title = title;
        this.description = description || '';
        this.completed = false;
        this.projectId = projectId;
    }

    public getId(): number {
        return this.id;
    }

    public getTitle(): string {
        return this.title;
    }

    public getDescription(): string {
        return this.description;
    }

    public isCompleted(): boolean {
        return this.completed;
    }

    public getProjectId(): number {
        return this.projectId;
    }

    public getPriority(): number {
        return this.priority;
    }
}

export default Todo;