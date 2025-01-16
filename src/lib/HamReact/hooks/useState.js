import { updateDOM } from "../manageDOM/updateDOM.js";
import {
  setInitState,
  stateId,
  getStoreState,
  setStoreState,
  increaseStateId,
  resetStateId,
} from "../store.js";

/**
 *
 * @param {*} initState - 초기 상태.
 * @returns {[*, Function]} - 상태와 상태를 변경하는 함수.
 */
export const useState = (initState) => {
  const currentStateId = stateId;
  setInitState(currentStateId, initState);
  getStoreState(currentStateId);

  const setState = (nextState) => {
    if (Object.is(getStoreState(currentStateId), nextState)) return;
    setStoreState(currentStateId, nextState);
    resetStateId();
    updateDOM();
  };

  increaseStateId();
  return [getStoreState(currentStateId), setState];
};
