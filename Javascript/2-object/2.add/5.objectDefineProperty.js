const person = {
  name: "Jonh",
  age: 37,
};

Object.defineProperty(person, "club", {
  value: "manu",
  writable: true, // cho phép gán giá trị mới
  enumerable: true, // cho phép liệt kê
  configurable: true, // cho phép xóa thuộc tính hoặc thay đổi cấu trúc
});

console.log(person); //{ name: 'Jonh', age: 37, club: 'manu' }
