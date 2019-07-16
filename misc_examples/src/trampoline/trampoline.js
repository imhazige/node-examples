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
