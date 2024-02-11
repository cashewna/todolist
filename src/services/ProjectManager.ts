import { ProjectViewModel } from '../viewmodels/Project';
import { Observable } from '../utils/Observable';

class ProjectManager {
    private projects: ProjectViewModel[];
    private activeProject: ProjectViewModel | null;
    private observable: Observable;

    constructor() {
        this.projects = [];
        this.activeProject = null;
        this.observable = new Observable();
    }

    public addProject(project: ProjectViewModel) {
        this.projects.push(project);
        if (!this.activeProject) {
            this.setActiveProject(project);
        }
    }

    public getProjects(): ProjectViewModel[] {
        return this.projects;
    }

    public getActiveProject(): ProjectViewModel | null {
        return this.activeProject;
    }

    public setActiveProject(project: ProjectViewModel) {
        this.activeProject = project;
        this.observable.notify();
    }

    public subscribe(fn: Function) {
        this.observable.subscribe(fn);
    }
}

export { ProjectManager };