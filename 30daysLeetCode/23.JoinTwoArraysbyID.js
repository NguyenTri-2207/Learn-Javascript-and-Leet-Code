var arr1 = [
  { id: 2, o: 48, z: 84, y: 61 },
  { id: 1, x: 36, d: 26, f: 35 },
  { id: 9, x: 36, d: 26, f: 35 },
  { id: 1, x: 36, d: 23, f: 35 },
];

var arr2 = [
  { id: 1, x: 32, d: 26, f: 35 },
  { id: 3, c: 20, z: 75 },
];
//
// const join = (arr1, arr2) => {
//   // Tạo một Map để lưu trữ các đối tượng theo id
//   const idMap = new Map();

//   // Thêm các đối tượng từ arr1 vào Map
//   arr1.forEach((obj) => idMap.set(obj.id, { ...obj }));

//   // Thêm hoặc kết hợp các đối tượng từ arr2 vào Map
//   arr2.forEach((obj) => {
//     const existingObj = idMap.get(obj.id);
//     if (existingObj) {
//       // Kết hợp thuộc tính của đối tượng từ arr2 vào đối tượng đã có từ arr1
//       idMap.set(obj.id, { ...existingObj, ...obj });
//     } else {
//       // Nếu không có đối tượng cùng id trong arr1, thêm đối tượng từ arr2 vào Map
//       idMap.set(obj.id, { ...obj });
//     }
//   });

//   // Chuyển Map thành mảng các đối tượng đã "join"
//   const joinedArray = Array.from(idMap.values());
//   joinedArray.sort((a, b) => a.id - b.id);

//   return joinedArray;
// };

const join = (arr1, arr2) => {
  const map = {};
  // arr1
  arr1.forEach((element) => {
    map[element.id] = element;
  });
  console.log(map);

  // arr2
  arr2.forEach((element) => {
    const { id } = element;
    if (map.hasOwnProperty(id)) {
      map[id] = Object.assign(map[id], element);
    } else {
      map[id] = element;
    }
  });
  const result = Object.values(map);
  return result;
};

join(arr1, arr2);
// console.log(join(arr1, arr2));
