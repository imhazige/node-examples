/**
 * inspaired by this article
 * https://dev.to/pichardoj/do-you-even-recurse-and-if-you-do-do-you-do-it-safely-4mef
 * @param {*} fn
 */
export function trampoline(fn) {
  return async function(...args) {
    let result = fn(...args);

    while (result) {
      if (typeof result === 'function') {
        result = result();
      } else if (typeof result === 'promise') {
        result = await result;
      } else {
        break;
      }
    }

    return result;
  };
}
