// class Stack {
//   constructor() {
//     this.items = [];
//   }

//   // Thêm một phần tử vào ngăn xếp
//   push(element) {
//     this.items.push(element);
//   }

//   // Loại bỏ và trả về phần tử ở đỉnh của ngăn xếp
//   pop() {
//     if (this.isEmpty()) {
//       return "Stack is empty";
//     }
//     return this.items.pop();
//   }

//   // Trả về phần tử ở đỉnh của ngăn xếp mà không loại bỏ nó
//   peek() {
//     if (this.isEmpty()) {
//       return "Stack is empty";
//     }
//     return this.items[this.items.length - 1];
//   }

//   // Kiểm tra xem ngăn xếp có rỗng hay không
//   isEmpty() {
//     return this.items.length === 0;
//   }

//   // Trả về kích thước của ngăn xếp
//   size() {
//     return this.items.length;
//   }

//   // Xóa tất cả các phần tử trong ngăn xếp
//   clear() {
//     this.items = [];
//   }
// }

// // Sử dụng lớp Stack
// // let stack = new Stack();

// // stack.push(10);
// // stack.push(20);
// // stack.push(30);

// // console.log(stack.peek()); // Output: 30
// // console.log(stack.pop()); // Output: 30
// // console.log(stack.peek()); // Output: 20

// // console.log(stack.size()); // Output: 2
// // console.log(stack.isEmpty()); // Output: false

// // stack.clear();
// // console.log(stack.isEmpty()); // Output: true

// var isValid = function (key) {
//   const check = (str) => {
//     let character;
//     switch (str) {
//       case ")":
//         character = "(";
//         break;
//       case "]":
//         character = "[";
//         break;
//       case "}":
//         character = "{";
//         break;

//       default:
//         character = null;
//     }
//     return character;
//   };
//   const stack = new Stack();
//   for (let i = 0; i < key.length; i++) {
//     if (check(key[i]) === stack.peek()) {
//       stack.pop();
//     } else {
//       stack.push(key[i]);
//     }
//   }
//   return stack.size() == 0;
// };

var isValid = function (key) {
  const map = { "}": "{", ")": "(", "]": "[" };
  const stack = [];
  for (let str of key) {
    console.log(str);
    if (str === "}" || str === "]" || str === ")") {
      let topElement = stack.length === 0 ? "#" : stack.pop();
      if (topElement !== map[str]) {
        return false;
      }
    } else {
      stack.push(str);
    }
  }
  return stack.length === 0;
};
var s = "{[]}";

console.log(isValid(s));
