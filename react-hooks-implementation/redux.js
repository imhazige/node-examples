/**
 * copy from https://repl.it/@dericgw/ReduxRecreated
 */

// There area lot more checks in the Redux lib
//  but this gets the point across.
export default function createStore(reducer, initialState) {
  let currentState = initialState;
  const listeners = [];

  function getState() {
    return currentState;
  }

  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('A listener must be a function');
    }

    listeners.push(listener);

    return function unsubscribe() {
      const index = listeners.indexOf(listener);
      listeners.splice(index, 1);
    };
  }

  function dispatch(action) {
    currentState = reducer(currentState, action);

    listeners.forEach(listener => listener());

    return action;
  }

  dispatch({ type: 'INIT' });

  return {
    getState,
    subscribe,
    dispatch,
  };
}
// End the Redux implementation
