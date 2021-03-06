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

const stackTrace = require('stack-trace');

/**
 *
 * to use trampoline
 * @param {*} n
 * @param {*} acc
 */
function fact3(n, acc = 1) {
  const trace = stackTrace.get();
  console.log(`Call Stack: ${trace.length}`);
  // instead, return a function to build a function array
  // which will be used by trampoline
  return n > 0 ? () => fact3(n - 1, n * acc) : acc;
}

/**
 *
 * to use trampoline with promise
 * @param {*} n
 * @param {*} acc
 */
async function fact4(n, acc = 1) {
  const trace = stackTrace.get();
  console.log(`Call Stack: ${trace.length}`);
  // instead, return a function to build a function array
  // which will be used by trampoline
  return n > 0 ? async () => await fact4(n - 1, n * acc) : acc;
}

(async () => {
  const number = 100000;
  try {
    console.log('simple');
    // will throw Maximum call stack size exceeded
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

  // use trampoline
  const { trampoline } = require('./trampoline');
  console.log('trampoline function');

  const funcTramp = trampoline(fact3);
  const result = await funcTramp(number);
  console.log(result);

  console.log('trampoline promise');
  // use trampoline

  const funcTramp2 = trampoline(fact4);
  const result2 = await funcTramp2(number);
  console.log(result2);
})();
