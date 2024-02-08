import { Project } from "../shared/Project";

class Sidebar {
    #projects: Project[];

    constructor() {
        this.#projects = [];
    }

    private projectExists(name: string): boolean {
        return false;
    }

    public addProject(name: string): void {
        if (this.projectExists(name)) {
            throw new Error('Project already exists');
        }

        const newProject: Project = {
            title: name,
            todos: []
        };
        this.#projects.push(newProject);
    }

    public getProjects(): Project[] {
        return this.#projects;
    }
}

export { Sidebar };