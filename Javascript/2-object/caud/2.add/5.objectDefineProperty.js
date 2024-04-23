const person = {
  name: "Jonh",
  age: 37,
};
//  way 1
Object.defineProperty(person, "club", {
  value: "manu",
  writable: true, // cho phép gán giá trị mới
  enumerable: true, // cho phép liệt kê
  configurable: true, // cho phép xóa thuộc tính hoặc thay đổi cấu trúc
});

// way 2
Object.defineProperties(person, {
  lastname: {
    value: "Nguyen",
    writable: true,
    enumerable: true,
    configurable: true,
  },
  birth: {
    value: 1989,
    writable: true,
    enumerable: true,
    configurable: true,
  },
});

/*So sánh 2 cách trên
- Object.defineProperty() chỉ định nghĩa một thuộc tính duy nhất, trong khi Object.defineProperties() cho phép định nghĩa nhiều thuộc tính cùng một lúc.
- Object.defineProperty() trả về object đã được định nghĩa, trong khi Object.defineProperties() không trả về gì cả và chỉ thực hiện việc định nghĩa các thuộc tính.
*/
console.log(person); //{ name: 'Jonh', age: 37, club: 'manu' }
