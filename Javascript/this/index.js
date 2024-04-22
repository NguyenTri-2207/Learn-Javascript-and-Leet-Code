var person = {
  firstName: "Jonh",
  lastName: "Nguyen",
  fullName() {
    //"this" trong hàm này tham chiếu đến đối tượng person
    // Việc sử dụng "this" cũng tương tự như việc sử dụng person.firstName
    console.log(this.firstName + " " + this.lastName);
  },
};

// 1. Khi ở  strict mode , this là undefined

//2.
// function showFullName() {
//   // "this" trong hàm này sẽ có giá trị của đối tượng window bởi vì
//   // showFullName() là hàm được định nghĩa một cách toàn cục, cũng
//   // như các biến firstName và lastName
//   return this.firstName + " " + this.lastName;
// }

// ============== Ngoại lệ =================

// 1. bind()

// -- Từ khóa "bind" được sử dụng để tạo ra một hàm mới có một giá trị cố định cho "this"
// -- Phương thức bind() không thay đổi hàm gốc

// solotion 1
function multiply(x, y) {
  return x * y;
}
const multiplyByTwo = multiply.bind(null, 2);
console.log(multiplyByTwo(6)); // Output: 10

// solotion 2
// const getFullName = person.fullName;  //undefined undefined
const getFullName = person.fullName.bind(person); //Jonh Nguyen

getFullName();

// solotion 3
const button = document.querySelector("button");
button.onclick = person.fullName.bind(person);

// solotion 4

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

console.log($("#heading"));

//2. call()
// bind sẽ nằm trong call
// Khi ở  strict mode , this ko phải là undefined
