import { Sidebar as SidebarModel } from "../models/Sidebar";
import { Sidebar as SidebarView } from "../views/Sidebar";
import { Project as ProjectModel } from "../models/Project";
import { Project as ProjectController } from "./Project";

class Sidebar {
    #model: SidebarModel;
    #view: SidebarView;
    #projects: ProjectModel[];

    constructor(model: SidebarModel, view: SidebarView) {
        this.#model = model;
        this.#view = view;
        this.#projects = [];
    }

    public addProject(projectController: ProjectController): void {
        try {
            this.#model.addProject(projectController.getModel());
            this.renderData();
        } catch (error) {
            this.#view.showErrorMessage(error.message);
        }
    }

    private renderData(): void {
        const projects = this.#model.getProjects();
        const projectTitles = projects.map(project => project.getProjectTitle());
        this.#view.displayProjects(projectTitles);
    }

}

export { Sidebar };