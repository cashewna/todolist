export default interface Todo {
    id: number;
    title: string;
    description?: string;
    completed: boolean;
    projectId: number;
}