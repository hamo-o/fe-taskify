class Log {
  #username;

  #title;

  #action;

  #column;

  #timestamp;

  constructor({ title, action, column }) {
    this.#username = "햄";
    this.#title = title;
    this.#action = action;
    this.#column = column;
    this.#timestamp = new Date();
  }

  getLog() {
    return {
      username: this.#username,
      title: this.#title,
      action: this.#action,
      columnBefore: this.#column.name,
      timestamp: this.#timestamp,
    };
  }
}

export default Log;
