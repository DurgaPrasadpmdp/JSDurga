// function count() {
//   return function () {
//     return (function inner() {
//       inner.reset = () => (count = 0);
//       return (count = count + 1);
//     })();
//   };
// }

const count = (() => {
  let count = 0;
  return function inner() {
    inner.reset = () => (count = 0);
    return (count = count + 1);
  };
})();
console.log(count());
console.log(count());
console.log(count());
console.log(count());
console.log(count());
console.log(count());
console.log(count());

console.log(count.reset(), "reset");

// count();
// count();
// count();
//count.reset();
count();

function sum() {
  let totalSum = 10;
  sum.getOutPut = function s() {
    return totalSum;
  };
}
sum();
console.log(sum.getOutPut);
console.log(sum.getOutPut());
