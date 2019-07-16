/**
 * inspaired by this article
 * https://dev.to/pichardoj/do-you-even-recurse-and-if-you-do-do-you-do-it-safely-4mef
 * @param {*} fn
 */
function trampoline(fn) {
  return function(...args) {
    let result = fn(...args);

    while (result && typeof result === 'function') {
      result = result();
    }

    return result;
  };
}

module.exports = {
  trampoline
};
