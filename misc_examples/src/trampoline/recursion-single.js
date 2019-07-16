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

// test normal recursion
//will throw Maximum call stack size exceeded
console.log(fact(100000));
// also will throw Maximum call stack size exceeded
console.log(fact2(100000));
