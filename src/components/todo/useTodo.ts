import { STORAGE_KEYS } from 'config';
import { useLocalStorage } from 'hooks';
import { sortDate } from 'utils';
import { Status, Itodo, FilterType } from './type';

const initialTodolist: Itodo[] = [];

const useTodo = () => {
  const [todos, setTodos] = useLocalStorage(STORAGE_KEYS.todos, initialTodolist);

  const changeTodoStatus = (id: number, status: Status): void => {
    setTodos((prev) =>
      prev.map((todo: Itodo) => {
        return todo.id === id ? { ...todo, updatedAt: new Date(), status: status } : todo;
      }),
    );
  };

  const changeTodoImportance = (id: number): void => {
    setTodos((prev) =>
      prev.map((todo: Itodo) => {
        if (todo.id !== id) return todo;
        return {
          ...todo,
          updatedAt: new Date(),
          isImportant: !todo.isImportant,
        };
      }),
    );
  };

  const removeTodo = (id: number): void => {
    setTodos((prev: Itodo[]) => prev.filter((todo: Itodo) => todo.id !== id));
  };

  const updateTodoId = (): void => {
    setTodos((prev: Itodo[]) => prev.map((todo: Itodo, index) => ({ ...todo, id: index })));
  };

  const handleDeleteTodo = (id: number): void => {
    removeTodo(id);
    updateTodoId();
  };

  const createTodo = (value: string): void => {
    const newTodos = [...todos];
    newTodos.unshift({
      taskName: value,
      status: Status.todo,
      id: todos.length,
      createdAt: new Date(),
      updatedAt: new Date(),
      isImportant: false,
      isVisible: true,
    });
    setTodos(newTodos);
  };

  const sortTodo = (): void => {
    setTodos((prev) =>
      prev.sort((a: Itodo, b: Itodo) => {
        if (sortDate(a.createdAt, b.createdAt) < 0) return 1;
        if (sortDate(a.createdAt, b.createdAt) > 0) return -1;
        return 0;
      }),
    );
    updateTodoId();
  };

  const filterList = (filterType: FilterType, status?: Status): void => {
    switch (filterType) {
      case FilterType.bookmark:
        filterByBookmark();
        break;
      case FilterType.status:
        filterByStatus(status!);
        break;
      case FilterType.none:
        clearFilter();
        break;
      default:
        throw new Error('Filter type does not match. Please check your filter list & type.');
    }
  };

  const filterByBookmark = (): void => {
    setTodos((prev) =>
      prev.map((todo: Itodo) =>
        todo.isImportant ? { ...todo, isVisible: true } : { ...todo, isVisible: false },
      ),
    );
  };

  const filterByStatus = (status: Status): void => {
    setTodos((prev) =>
      prev.map((todo: Itodo) =>
        todo.status === status ? { ...todo, isVisible: true } : { ...todo, isVisible: false },
      ),
    );
  };

  const clearFilter = (): void => {
    setTodos((prev) => prev.map((todo: Itodo) => ({ ...todo, isVisible: true })));
  };

  return {
    todos,
    setTodos,
    changeTodoStatus,
    createTodo,
    handleDeleteTodo,
    changeTodoImportance,
    sortTodo,
    filterList,
  };
};

export default useTodo;
