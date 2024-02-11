import TodoListViewModel from "../core/viewModels/TodoListViewModel";

class SidebarView {
    private hamburgerElement: HTMLElement;
    private sidebarElement: HTMLElement;
    private projectListElement: HTMLElement;
    private todoListViewModel: TodoListViewModel;

    constructor(todoListViewModel: TodoListViewModel) {
        this.todoListViewModel = todoListViewModel;
        this.hamburgerElement = document.querySelector('#hamburger');
        this.sidebarElement = document.querySelector('#sidebar');
        this.projectListElement = document.querySelector('#project-list');

        this.toggleSidebarOnHamburgerClick();
    }

    public addProject(id: number, projectName: string): void {
        const projectListItem = document.createElement('li');
        projectListItem.textContent = projectName;
        this.projectListElement.appendChild(projectListItem);
        // TODO: add event listener to select project
        projectListItem.addEventListener('click', () => {
            console.log('Project clicked', id, projectName);
            this.todoListViewModel.setSelectedProject(id);
        });
    }

    private toggleSidebarOnHamburgerClick(): void {
        this.hamburgerElement.addEventListener('click', () => {
            this.hamburgerElement.classList.toggle('open');
            this.sidebarElement.classList.toggle('open');
        });
    }
}

export default SidebarView;