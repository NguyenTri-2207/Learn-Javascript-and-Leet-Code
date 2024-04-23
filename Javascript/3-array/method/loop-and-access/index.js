// iterator;
const array1 = [1, 2, 3, 4, 5];

// Tạo iterator từ mảng
const iterator1 = array1[Symbol.iterator]();

// Lặp qua từng phần tử của mảng bằng cách gọi iterator.next()
let next = iterator1.next();
while (!next.done) {
  console.log(next.value); // In ra giá trị của phần tử
  next = iterator1.next(); // Lấy phần tử tiếp theo
}

Array.prototype.at();

Array.prototype.entries();

Array.prototype.forEach();

Array.prototype.keys();

Array.prototype.values();
