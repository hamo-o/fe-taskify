import Column from "./column.js";
import Todo from "./todo.js";

class ColumnStore {
  #columns;

  #currentColumnId;

  #currentTodoId;

  #todos;

  constructor() {
    this.#columns = [
      new Column({ id: 0, name: "해야할 일" }),
      new Column({ id: 1, name: "하고 있는 일" }),
      new Column({ id: 2, name: "완료한 일" }),
    ];
    this.#todos = this.initTodos();
    this.#currentColumnId = 3;
    this.#currentTodoId = 0;
  }

  initTodos() {
    const todos = {};
    this.#columns.forEach((column) => {
      todos[column.getId()] = [];
    });
    return todos;
  }

  addColumn() {
    const column = new Column({ id: this.#currentColumnId, name: "새로운 컬럼" });
    this.#columns.push(column);
    this.#currentColumnId += 1;

    this.#todos[column.getId()] = [];
    return column.getColumn();
  }

  removeColumn(id) {
    this.#columns = this.#columns.filter((col) => col.getId() !== id);
    return this.#columns.map((column) => column.getColumn());
  }

  getColumns() {
    return this.#columns.map((column) => column.getColumn());
  }

  getColumnIds() {
    return this.#columns.map((column) => column.getId());
  }

  addTodo({ columnId }) {
    const todo = new Todo({ columnId, id: this.#currentTodoId });
    this.#todos[columnId].push(todo);

    return todo.getTodo();
  }

  removeTodo({ columnId, todoId }) {
    this.#todos[columnId] = this.#todos[columnId].filter((todo) => !todo.isSameTodo(todoId));
    return this.#todos[columnId].map((todo) => todo.getTodo());
  }

  switchTodo({ beforeColumnId, afterColumnId, todoId }) {
    this.removeTodo({
      columnId: beforeColumnId,
      todoId,
    });
    this.#todos[afterColumnId].push(todoId);
  }

  getTodos(columnId) {
    return this.#todos[columnId].map((todo) => todo.getTodo());
  }
}

export default ColumnStore;
