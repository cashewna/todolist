import Project from '../models/Project';
import Todo from '../models/Todo';
import ProjectView from '../../views/ProjectView';
import SidebarView from '../../views/SidebarView';
import AddTodoDialogView from '../../views/AddTodoDialogView';
import ProjectData from '../interfaces/ProjectData';

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
        this.projectView = new ProjectView(this);
        this.sidebarView = new SidebarView(this);
        this.addTodoDialogView = new AddTodoDialogView(this);
        this.nextProjectId = 0;
        this.addProject('All');
        this.setSelectedProject(ALL_PROJECT_ID);
        this.addTodoToSelectedProject = this.addTodoToSelectedProject.bind(this);
        console.log('Constructor:', this.projects);
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

    public addTodoToSelectedProject = (
        projectName: string,
        title: string,
        description?: string,
        dueDate?: string | Date,
        priority?: string | number
    ): void => {
        console.log(`addTodoToSelectedProjects:`, this.projects);
        const allProject = this.projects[ALL_PROJECT_ID];

        if (projectName === "") {
            projectName = "All";
        }


        // Check if project exists
        const project = this.projects.find(p => p.getName() === projectName);

        let projectIdNumber = project ? project.getId() : null;

        if (project) {
            const newTodo = new Todo(projectIdNumber, projectName, title, description);
            project.addTodo(newTodo);

            if (projectIdNumber !== ALL_PROJECT_ID) {
                allProject.addTodo(newTodo);
            }

            if (this.selectedProject.getId() === projectIdNumber) {
                this.projectView.appendTodoItem(newTodo);
            } else if (this.selectedProject.getId() === ALL_PROJECT_ID) {
                this.projectView.appendTodoItem(newTodo);
            }
        } else {
            // Create a new project and add the todo to it and 'All'
            const newProject = this.addProject(projectName);
            const newTodo = new Todo(newProject.getId(), projectName, title, description);
            newProject.addTodo(newTodo);
            allProject.addTodo(newTodo);
            if (this.selectedProject.getId() === ALL_PROJECT_ID) {
                this.projectView.appendTodoItem(newTodo);
            }
        }

    }

    public removeTodo(projectId: number, todoId: number): void {
        this.selectedProject.removeTodo(todoId);
        this.projectView.renderTodoList(this.selectedProject.getTodos());

        if (this.selectedProject.getId() === ALL_PROJECT_ID) {
            // Look for the project that contains the todo and remove it from there
            let project = null;
            for (let i = 1; i < this.projects.length; i++) {
                if (this.projects[i].getId() === projectId) {
                    project = this.projects[i];
                    break;
                }
            }

            if (project) {
                project.removeTodo(todoId);
            }
        } else {
            // Delete the project from All project
            const allProject = this.projects[ALL_PROJECT_ID];
            allProject.removeTodo(todoId);
        }
    }

    public serializeTodoList(): string {
        return JSON.stringify({
            projects: this.projects[ALL_PROJECT_ID],
            nextProjectId: this.nextProjectId
        });
    }

    public deserializeTodoList(serializedTodoList: string): void {
        console.log(`Deserializing: ${serializedTodoList}`);
        const parsedTodoList: ProjectData = JSON.parse(serializedTodoList).projects;
        for (let i = 0; i < parsedTodoList.todos.length; i++) {
            const parsedTodo = parsedTodoList.todos[i];
            console.log(parsedTodoList.todos[i]);
            this.addTodoToSelectedProject(parsedTodo.projectTitle, parsedTodo.title, parsedTodo.description, parsedTodo.dueDate, parsedTodo.priority);
        }
    }

    public saveTodoListToLocalStorage(): void {
        const serializedTodoList = this.serializeTodoList();
        localStorage.setItem('todoList', serializedTodoList);
    }

    public loadTodoListFromLocalStorage(): void {
        const serializedTodoList = localStorage.getItem('todoList');
        if (serializedTodoList) {
            this.deserializeTodoList(serializedTodoList);
        }
    }
}

export default TodoListViewModel;