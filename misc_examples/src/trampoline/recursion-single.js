/**
 * normal recursion
 * @param {*} n
 */
function fact(n) {
  if (n == 0) return 1;
  return n * fact(n - 1);
}

/**
 * Tail Call Optimization
 * but the v8 did not suppport
 * @param {*} n
 * @param {*} acc
 */
function fact2(n, acc) {
  if (n == 0) return acc;
  return fact(n - 1, acc * n);
}

let stackTrace = require('stack-trace');

/**
 *
 * to use trampoline
 * @param {*} n
 * @param {*} acc
 */
function fact3(n, acc = 1) {
  const trace = stackTrace.get();
  console.log(`Call Stack: ${trace.length}`);
  //instead, return a function to build a function array
  // which will be used by trampoline
  return n > 0 ? () => fact3(n - 1, n * acc) : acc;
}

const number = 100000;
try {
  console.log('simple');
  //will throw Maximum call stack size exceeded
  console.log(fact(number));
} catch (err) {
  console.error(err);
}
try {
  console.log('tail call optimization');
  // also will throw Maximum call stack size exceeded
  console.log(fact2(number));
} catch (err) {
  console.error(err);
}

console.log('trampoline');
// use trampoline
const { trampoline } = require('./trampoline');
console.log('trampoline', trampoline(fact3)(number));
