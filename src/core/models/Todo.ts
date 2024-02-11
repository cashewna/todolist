import ITodo from '../interfaces/ITodo';

class Todo implements ITodo {
    id: number;
    title: string;
    description: string;
    completed: boolean;
    projectId: number;

    private static nextId = 0;

    constructor(projectId: number, title: string, description?: string) {
        this.id = Todo.nextId++;
        this.title = title;
        this.description = description || '';
        this.completed = false;
        this.projectId = projectId;
    }
}

export default Todo;