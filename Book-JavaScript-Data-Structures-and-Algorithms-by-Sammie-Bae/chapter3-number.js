// 1. Sử dụng Number.EPSILON để so sánh hai số dấu phẩy động

// 2. Kiểm tra số nguyên tố và phân tích thừa số nguyên tố

// isPrime < 3 , isPrime % (isPrime -1) !== 0

function isPrime(n) {
  if (n > 1 && n < 3) {
    return true;
  }

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
function isPrime(n) {
  if (n >= 1 && n <= 3) {
    return true;
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
function isPrimeRecursion(n, divisor = 2) {
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % divisor === 0) {
    return false;
  }
  if (divisor * divisor > n) {
    /*Math.sqrt giống với bên trên, divisor đã vượt qua căn bậc hai của n mà không tìm thấy số nào trong 
    đoạn từ 2 đến căn bậc hai của n chia hết cho n. Trong trường hợp này, không cần kiểm tra tiếp các số từ divisor đến căn bậc hai của n vì n là số*/
    return true;
  }
  return isPrimeRecursion(n, divisor + 1);
}

/******************************* Method **********************************/

Number.MAX_VALUE; // 1.7976931348623157e+308
Number.MIN_VALUE; //5e-324

const a = 0.1 + 0.2;
const b = 0.3;

Math.abs(a - b) < Number.EPSILON;

parseInt("1235"); //1235
parseInt("3.14"); //3
parseFloat("3.14"); //3.12

isNaN("sdsd"); // Kiểm tra xem 'abc' có phải là NaN

console.log(isFinite(1.2)); //Kiểm tra xem 10 có là số hữu hạn: true

const numbers = [10, 5, 8, 3, 12];
const minValue = Math.min(...numbers); // Tìm giá trị nhỏ nhất: 3
const maxValue = Math.max(...numbers); // Tìm giá trị lớn nhất: 12
const randomNum = Math.random();

const num = -25;
const absNum = Math.abs(num); // Giá trị tuyệt đối của -25: 25
const sqrtNum = Math.sqrt(absNum); // Căn bậc hai của 25: 5
const powResult = Math.pow(2, 3); // 2 mũ 3: 8
const roundedNum = Math.round(3.7); // Làm tròn số 3.7: 4
