import { Todo } from './Todo';

interface TodoListOperations {
    addTodo: (todo: Todo) => void;
}

export { TodoListOperations };