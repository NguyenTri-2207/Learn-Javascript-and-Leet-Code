// Sequence generator function (commonly referred to as "range", e.g. Clojure, PHP, etc.)
const range = (start, stop, step) => {
  //chia để lấy số bước cần đi
  const a = Array.from({ length: (stop - start) / step + 1 }, (_, i) => {
    return start + i * step; //step nhân với số lần bước + bước bắt đầu
  });
  return a;
};

// Generate numbers range 0..4
// range(0, 4, 1);
// [0, 1, 2, 3, 4]

// Generate numbers range 1..10 with step of 2
const a = range(1, 10, 2);
console.log("A".charCodeAt());
// [1, 3, 5, 7, 9]

// Generate the alphabet using Array.from making use of it being ordered as a sequence
const start = "A".charCodeAt(0);
const stop = "Z".charCodeAt(0);
const step = 1;
const newArray = range(start, stop, 1);
const newArray1 = newArray.map((x) => String.fromCharCode(x));
console.log(newArray);
