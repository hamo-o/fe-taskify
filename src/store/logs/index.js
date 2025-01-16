import Log from "./log.js";

class UserLogStore {
  #logs;

  constructor() {
    this.#logs = [new Log({
      title: "공부좀 하자",
      action: "등록",
      column: {
        id: 1, name: "하고 있는 일",
      },
    })];
  }

  addLog(infos) {
    this.#logs.push(new Log(infos));
  }

  getLogs() {
    return this.#logs.map((log) => log.getLog());
  }
}

export default UserLogStore;
