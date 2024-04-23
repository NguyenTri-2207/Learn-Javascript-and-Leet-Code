console.log(Object.is(5, 5)); // true
console.log(Object.is("hello", "hello")); // true
console.log(Object.is(5, "5")); // false
console.log(Object.is({}, {})); // false

const obj1 = {};
const obj2 = obj1;
console.log(Object.is(obj1, obj2)); // true

/*So sánh NaN:
Trong Object.is(), hai giá trị NaN được coi là bằng nhau.
Trong ===, NaN === NaN trả về false.
Trong ==, NaN == NaN trả về false.
So sánh +0 và -0:
Trong Object.is(), +0 và -0 được coi là không bằng nhau.
Trong ===, +0 === -0 trả về true.
Trong ==, +0 == -0 trả về true.
So sánh đối tượng:
Trong Object.is(), so sánh đối tượng dựa trên tham chiếu: chỉ trả về true nếu cả hai tham chiếu đến cùng một đối tượng.
Trong === và ==, so sánh đối tượng dựa trên giá trị: chỉ trả về true nếu cả hai đối tượng có cùng giá trị.
So sánh giá trị null và undefined:
Trong Object.is(), null và undefined không được coi là bằng nhau.
Trong ===, null === undefined trả về false.
Trong ==, null == undefined trả về true.
Xử lý các trường hợp cận biên:
Trong một số trường hợp, Object.is() có thể cho kết quả chính xác hơn khi xử lý các trường hợp cận biên, như khi so sánh số nguyên tố với -0 hoặc NaN với NaN. */
