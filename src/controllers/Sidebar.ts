import { Sidebar as SidebarModel } from "../models/Sidebar";
import { Sidebar as SidebarView } from "../views/Sidebar";

class Sidebar {
    #model: SidebarModel;
    #view: SidebarView;

    constructor(model: SidebarModel, view: SidebarView) {
        this.#model = model;
        this.#view = view;
    }

    public addProject(project: string): void {
        try {
            this.#model.addProject(project);
        } catch (error) {
            // TODO: Show an error message on the frontend
            // this.#view.showErrorMessage(error.message);
        }
    }
}

export { Sidebar };