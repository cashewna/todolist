import Project from '../models/Project';
import Todo from '../models/Todo';
import ProjectView from '../../views/ProjectView';
import SidebarView from '../../views/SidebarView';
import AddTodoDialogView from '../../views/AddTodoDialogView';

const ALL_PROJECT_ID = 0;

class TodoListViewModel {
    private projects: Project[];
    private selectedProject: Project;
    private nextProjectId: number;
    private projectView: ProjectView;
    private sidebarView: SidebarView;
    private addTodoDialogView: AddTodoDialogView;

    constructor() {
        this.projects = [];
        this.projectView = new ProjectView();
        this.sidebarView = new SidebarView(this);
        this.addTodoDialogView = new AddTodoDialogView(this);
        this.nextProjectId = 0;
        this.addProject('All');
        this.setSelectedProject(ALL_PROJECT_ID);
    }

    public getProjects(): Project[] {
        return this.projects;
    }

    public getSelectedProject(): Project {
        return this.selectedProject;
    }

    public setSelectedProject(projectId: number): void {
        this.selectedProject = this.projects.find(project => project.getId() === projectId);
        this.projectView.updateProjectName(this.selectedProject.getName());
        console.log(this.selectedProject.getTodos());
        this.projectView.renderTodoList(this.selectedProject.getTodos());
    }

    public addProject(name: string): void {
        const newProject = new Project(this.nextProjectId++, name);
        this.projects.push(newProject);
        this.sidebarView.addProject(newProject.getId(), name);
    }

    public addTodoToSelectedProject(
        projectId: string,
        title: string,
        description?: string,
        dueDate?: string,
        priority?: string
    ): void {
        const allProject = this.projects[0];

        let projectIdNumber = parseInt(projectId as string);
        if (isNaN(projectIdNumber)) {
            projectIdNumber = ALL_PROJECT_ID;
        }

        // Check if project exists
        const project = this.projects.find(project => project.getId() === projectIdNumber);

        if (project) {
            const newTodo = new Todo(projectIdNumber, title, description);
            project.addTodo(newTodo);

            if (projectIdNumber !== ALL_PROJECT_ID) {
                allProject.addTodo(newTodo);
            }

            if (this.selectedProject.getId() === projectIdNumber) {
                this.projectView.appendTodoItem(newTodo);
            }
        } else {
            console.error(`Project with ID ${projectId} not found`);
        }
    }
}

export default TodoListViewModel;