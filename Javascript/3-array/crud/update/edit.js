let arr = [1, 2, 3];
// solution 1 squarebracket
arr[0] = 10; // Sửa giá trị của phần tử đầu tiên thành 10

// slution 2 splice
// array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
arr.splice(1, 2, "20"); //[ 10, '20' ]  , bắt đầu xóa ở vị trí 1 , xóa 2 element, thêm element "20"
