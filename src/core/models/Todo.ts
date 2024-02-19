import ITodo from '../interfaces/ITodo';

class Todo implements ITodo {
    private id: number;
    private title: string;
    private description: string;
    private completed: boolean;
    private projectId: number;
    private projectTitle: string;
    private priority: number;
    private dueDate: Date;

    private static nextId = 0;

    constructor(projectId: number, projectTitle: string, title: string, description?: string, priority?: number, completed?: boolean, dueDate?: Date) {
        this.id = Todo.nextId++;
        this.title = title;
        this.description = description || '';
        this.completed = false;
        this.projectId = projectId;
        this.projectTitle = projectTitle;
        this.priority = priority || 0;
        this.completed = completed || false;
        this.dueDate = dueDate;
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

    public toJSON(): object {
        return {
            id: this.id,
            title: this.title,
            description: this.description,
            completed: this.completed,
            projectId: this.projectId,
            projectTitle: this.projectTitle,
            priority: this.priority,
            dueDate: this.dueDate
        }
    }
}

export default Todo;