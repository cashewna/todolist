import { Project as ProjectModel } from "../models/Project";

class Sidebar {
    #projects: ProjectModel[];

    constructor() {
        this.#projects = [];
    }

    private projectExists(name: string): boolean {
        return this.#projects.some(project => project.getProjectTitle() === name);
    }

    public addProject(project: ProjectModel): void {
        if (this.projectExists(project.getProjectTitle())) {
            throw new Error(`Project ${project.getProjectTitle()} already exists`);
        }

        this.#projects.push(project);
    }

    public getProjects(): ProjectModel[] {
        return this.#projects;
    }
}

export { Sidebar };