import { Sidebar as SidebarModel } from "../models/Sidebar";
import { Sidebar as SidebarView } from "../views/Sidebar";
import { Project as ProjectModel } from "../models/Project";
import { Project as ProjectController } from "./Project";
import { TodoList as TodoListController } from "./TodoList";

class Sidebar {
    #model: SidebarModel;
    #view: SidebarView;
    #projects: ProjectModel[];
    #todoListController: TodoListController;

    constructor(model: SidebarModel, todoListController: TodoListController) {
        this.#model = model;
        this.#view = new SidebarView(this);
        this.#todoListController = todoListController;
        this.#projects = [];
        this.renderData();
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
        this.#view.render();
    }

    public showProject(projectTitle: string): void {
        const project = this.#model.getProjects().find(project => project.getProjectTitle() === projectTitle);
        if (project) {
            this.#todoListController.showTodos(project);
        }
    }
}

export { Sidebar };