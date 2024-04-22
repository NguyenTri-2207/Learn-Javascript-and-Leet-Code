// Object.getPrototypeOf() là một phương thức trong JavaScript được sử dụng để truy cập và trả về prototype của một object đã cho.

// Định nghĩa một constructor function
function Person(name) {
  this.name = name;
}

// Tạo một instance của Person
const person = new Person("John");

// Lấy prototype của object person
const prototypeOfPerson = Object.getPrototypeOf(person);

console.log(prototypeOfPerson === Person.prototype); // true
