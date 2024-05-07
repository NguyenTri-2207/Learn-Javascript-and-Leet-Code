// Số nguyên tố là một số tự nhiên lớn hơn 1 và chỉ chia hết cho 1 và chính nó. 1,2,3,7,11,13
console.time("myFunction");
const numbers = [
  -3, 89, 45, 12, 67, 23, 56, 34, 78, 90, 32, 76, 54, 21, 65, 43, 87, 98, 10,
  81, 99,
];

// function isPrime(num) {
//   for (let i = 2; num > i; i++) {
//     // lặp qua tất cả các số ví dụ  2++,3,4,5,6

//     if (num % i === 0) {
//       // Lấy num chia tất cả các số 2,3,4,5,6 => nếu kết quả chia lấy dư === 0 thì return hàm = 0
//       console.log(num);
//       return false;
//     }
//   }
//   return num > 1; // Nếu qua tất cả vòng lặp mà num vẫn ko chia i dư 0 thì return về true => num là số nguyên tố
// }
// console.log(isPrime(19));

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i < Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const filterPrimeNumbers = numbers.filter((item) => isPrime(item));
console.timeEnd("myFunction");
