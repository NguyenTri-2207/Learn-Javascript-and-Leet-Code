const object = {
  user: {
    key_value_map: {
      CreatedDate: "123424",
      Department: {
        Name: "XYZ",
      },
    },
  },
};

function flattenObject(object) {
  var toReturn = {};

  for (let keys in object) {
    if (!object.hasOwnProperty(keys)) {
      // Nếu keys ko thuộc , bỏ qua và tiếp tục, nếu dùng break thì nó sẽ dừng và thoát vòng lặp
      continue;
    }
    if (typeof object[keys] == "object" && object[keys] !== null) {
      var flatObject = flattenObject(object[keys]);
      for (var x in flatObject) {
        if (!flatObject.hasOwnProperty(x)) continue;

        toReturn[keys + "." + x] = flatObject[x];
      }
    } else {
      toReturn[keys] = object[keys];
    }
  }
  return toReturn;
}

flattenObject(object);
// console.log(flattenObject(object));
