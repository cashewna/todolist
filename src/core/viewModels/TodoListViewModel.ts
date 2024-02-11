import Project from '../models/Project';
import Todo from '../models/Todo';
import ProjectView from '../../views/ProjectView';

class TodoListViewModel {
    private projects: Project[];
    private selectedProject: Project;
    private nextProjectId: number;
    private projectView: ProjectView;

    constructor() {
        this.projects = [];
        const allProject = new Project(0, 'All');
        this.projects.push(allProject);
        this.projectView = new ProjectView();

        this.setSelectedProject(0);
        this.nextProjectId = 1;
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
    }

    public addProject(name: string): void {
        const newProject = new Project(this.nextProjectId++, name);
        this.projects.push(newProject);
        // TODO: Update the view to include the new project
    }

    public addTodoToSelectedProject(projectId: number, title: string, description?: string): void {
        const project = this.projects.find(project => project.getId() === projectId);
        const allProject = this.projects[0];

        if (project) {
            const newTodo = new Todo(projectId, title, description);
            project.addTodo(newTodo);
            allProject.addTodo(newTodo);
        } else {
            console.error(`Project with ID ${projectId} not found`);
        }
    }
}

export default TodoListViewModel;