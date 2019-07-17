const Future = require('fibers/future');

function wrapCallback(fn, context) {
  return function(...args) {
    var self = context || this;
    var newArgs = Array.prototype.slice.call(args);
    var callback;

    for (var i = newArgs.length - 1; i >= 0; --i) {
      var arg = newArgs[i];
      var type = typeof arg;
      if (type !== 'undefined') {
        if (type === 'function') {
          callback = arg;
        }
        break;
      }
    }

    if (!callback) {
      var fut = new Future();
      callback = fut.resolver();
      ++i; // Insert the callback just after arg.
    }

    newArgs[i] = callback;
    var result = fn.apply(self, newArgs);
    return fut ? fut.wait() : result;
  };
}

module.exports = {
  wrapCallback
};

const fs = require('fs');
function test(callback) {
  fs.readFile('xxx', (err, data) => {
    callback(err, data);
  });
}

try {
  wrapCallback(fs.readFile);
} catch (err) {
  console.error('error', err);
}
