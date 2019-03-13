import log from './common/log';

export const React = (function () {
  const hooks = [];

  let currentHook = 0;
  return {
    render(Component) {
      const App = Component();
      // run effects
      App.render();
      currentHook = 0;
      // reset for next render
      return App;
    },
    /**
     * similar to https://reactjs.org/docs/hooks-reference.html#conditionally-firing-an-effect
     * @param {*} callback
     * @param {*} depArray
     */
    useEffect(callback, depArray) {
      const hasNoDeps = !depArray;
      let deps = hooks[currentHook]; // type: array | undefined
      const hasChangedDeps = deps
        ? !depArray.every((el, i) => el === deps[i])
        : true;
      if (hasNoDeps || hasChangedDeps) {
        callback();
        deps = depArray;
      }
      currentHook++; // done with this hook
    },
    /**
     * similar to https://reactjs.org/docs/hooks-state.html
     * @param {*} init
     */
    useState(init) {
      hooks[currentHook] = hooks[currentHook] || init; // type: any
      const setStateHookIndex = currentHook; // for setState's closure!
      const setState = newState => (hooks[setStateHookIndex] = newState);
      return [hooks[currentHook++], setState];
    },
  };
}());
