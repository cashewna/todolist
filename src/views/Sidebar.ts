import { Sidebar as SidebarController } from "../controllers/Sidebar";

class Sidebar {
    #hamburger: HTMLElement;
    #sidebar: HTMLElement;
    #unorderedList: HTMLUListElement;
    #sidebarController: SidebarController;

    constructor(sidebarController: SidebarController) {
        this.#hamburger = document.getElementById("hamburger");
        this.#sidebar = document.getElementById("sidebar");
        this.#unorderedList = document.querySelector("#sidebar > ul");
        this.#sidebarController = sidebarController;
    }

    public hasClass(className: string): boolean {
        return this.#hamburger.classList.contains(className);
    }

    public displayProjects(projectTitles: string[]): void {
        if (this.#sidebar) {
            this.#unorderedList.innerHTML = "";
            projectTitles.forEach(title => {
                const listElement = document.createElement("li");
                listElement.textContent = title;
                this.#unorderedList.appendChild(listElement);
                this.addProjectEventListener(listElement);
            });
            this.#sidebar.appendChild(this.#unorderedList);
        }
    }

    public showErrorMessage(message: string): void {
        alert(message);
    }

    private addProjectEventListener(listElement: HTMLLIElement): void {
        listElement.addEventListener("click", () => {
            const projectTitle = listElement.textContent;
            this.#sidebarController.showProject(projectTitle);
        });
    }
}

export { Sidebar };