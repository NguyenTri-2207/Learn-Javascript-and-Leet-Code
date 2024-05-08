// Recursive Function
// 1.  Executes the function's current code // thực thi code hiện tại của hàm
// 2.  Call the function again with different arguments  // Gọi lại function với 1 đầu vào mới
// 3  This Process will repeat until the stopping condition is met //Quá trình này sẽ lặp lại cho đến khi điều kiện dừng được đáp ứng
// = > Recursive Function

// Syntax
// function recursiveFunction(parameter) {
//     // Base case
//     if (/* điều kiện dừng */) {
//         // Kết thúc đệ quy
//         return someValue;
//     } else {
//         // Bước đệ quy
//         return recursiveFunction(modifiedParameter);
//     }
// }

function factorial(n) {
  // Base case: n = 0 or n = 1
  if (n === 0 || n === 1) {
    return 1;
  } else {
    // Recursive step: n * factorial(n - 1)
    return n * factorial(n - 1);
  }
}
const factorial1 = (a) => (a < 0 ? -1 : a === 0 ? 1 : factorialRec(a, 1));
// const fibonacci = (n) => (n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2));
const fibonacci = (n) => {
  if (n <= 1) return n;

  return fibonacci(n - 1) + fibonacci(n - 2);
};
console.log(fibonacci(9));

const factorialRec = (n, accumulator) =>
  n === 1 ? accumulator : factorialRec(n - 1, n * accumulator);
