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
        this.projectView.renderTodoList(this.selectedProject.getTodos());
    }

    public addProject(name: string): Project {
        const newProject = new Project(this.nextProjectId++, name);
        this.projects.push(newProject);
        this.sidebarView.addProject(newProject.getId(), name);
        return newProject;
    }

    public addTodoToSelectedProject(
        projectName: string,
        title: string,
        description?: string,
        dueDate?: string,
        priority?: string
    ): void {
        const allProject = this.projects[ALL_PROJECT_ID];

        if (projectName === "") {
            projectName = "All";
        }

        // Check if project exists
        const project = this.projects.find(p => p.getName() === projectName);

        let projectIdNumber = project ? project.getId() : null;

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
            // Create a new project and add the todo to it
            const newProject = this.addProject(projectName);
            const newTodo = new Todo(this.nextProjectId++, title, description);
            newProject.addTodo(newTodo);
        }
    }
}

export default TodoListViewModel;