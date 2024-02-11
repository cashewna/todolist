export default interface ITodo {
    getId(): number;
    getTitle(): string;
    getDescription(): string;
    isCompleted(): boolean;
    getProjectId(): number;
}