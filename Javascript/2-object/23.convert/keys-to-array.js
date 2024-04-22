const obj = {
  name: "John",
  age: 30,
};

Object.defineProperty(obj, "email", {
  value: "john@example.com",
  enumerable: false, // Thuộc tính email không liệt kê
});

console.log(obj);

const propertyNames = Object.getOwnPropertyNames(obj);
const keys = Object.keys(obj);

console.log(propertyNames); // ['name', 'age', 'email']
console.log(keys); // ['name', 'age']

// comparison
/* 
1.Object.getOwnPropertyNames():

-Trả về tất cả các tên thuộc tính của đối tượng, bao gồm cả các thuộc tính không liệt kê (non-enumerable properties).
- Điều này có nghĩa là nó trả về tất cả các thuộc tính, kể cả những thuộc tính mà bạn đã định nghĩa một cách rõ ràng là không liệt kê (non-enumerable).
2. Object.keys():
- Chỉ trả về các tên thuộc tính mà có thể liệt kê được (enumerable properties).
- Các thuộc tính không liệt kê sẽ không được bao gồm trong kết quả. */
