class ProjectView {
    private projectNameElement: HTMLElement;

    constructor() {
        this.projectNameElement = document.querySelector('#project-name');
    }

    public updateProjectName(name: string): void {
        if (this.projectNameElement) {
            this.projectNameElement.textContent = name;
        }
    }
}

export default ProjectView;