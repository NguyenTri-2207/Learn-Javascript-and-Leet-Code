var str = "He's my king from this day until his last day";

function countCharactersFor(str, text) {
  let count = 0;
  let listIndex = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === text) {
      listIndex.push(i);
      count++;
    }
  }
  return { listIndex: listIndex, count: count };
}

function countCharactersIndexOf(str, text) {
  let count = 0;
  let pos = str.indexOf(text);

  while (pos !== -1) {
    count++;
    pos = str.indexOf(text, pos + 1);
  }
  return count;
}
/*********** regex *************/
var uri =
  "http://your.domain/product.aspx?category=4&product_id=2140&query=lcd+tv";
var queryString = {};
uri.replace(new RegExp("([^?=&]+)(=([^&]*))?", "g"), function ($0, $1, $2, $3) {
  queryString[$1] = $3;
});
// console.log("ID: " + queryString["product_id"]);
// console.log("Query: " + queryString["query"]);
// console.log("Category: " + queryString["category"]);

/*********** palindrome *************/

function palindrome(str) {
  const formatStr = str.toLowerCase().replace(/\s/g, "");

  if (formatStr.length < 2) return true;
  let star = formatStr[0];
  let end = formatStr[formatStr.length - 1];
  if (star === end) {
    return palindrome(formatStr.slice(1, formatStr.length - 1));
  } else {
    return false;
  }
}

// Use Reverse and comparison
function palindrome2(str) {
  const formatStr = str.toLowerCase().replace(/\s/g, "");

  const stringRevert = formatStr.split("").reverse().join("");
  return stringRevert == formatStr;
}

// Use Two pointers
function palindrome3(str) {
  const formatStr = str.toLowerCase().replace(/\s/g, "");
  let left = 0;
  let right = formatStr.length - 1;

  while (left < right) {
    if (formatStr[left] !== formatStr[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

/*********** deleteDuplicateWords *************/
function deleteDuplicateWords(str) {
  const arr = str.toLowerCase().split(" ");
  const set = new Set(arr);
  return [...set].join(" ");
}

function deleteDuplicateWords2(str) {
  const arr = str.toLowerCase().split(" ");
  const has = {};

  for (let i = 0; i < arr.length; i++) {
    has[arr[i]] = i;
  }
  return Array.from(Object.keys(has)).join(" ");
}
const str12 = "A man a plan a canal Panama man plan";
// console.log(deleteDuplicateWords(str12));

/*********** truncateString *************/

// s1
Object.defineProperty(String.prototype, "truncateStringCustom", {
  get: function () {
    return function (length) {
      if (this.length > length) {
        return this.substring(0, length) + "...";
      }
      return this.toString(); // Trả về chuỗi ban đầu nếu không cần rút gọn
    };
  },
});
// s1
class TruncateString extends String {
  truncateStringExtends(maxLength) {
    if (this.length > maxLength) {
      return this.substring(0, maxLength) + "...";
    }
    return this.toString();
  }
}

const string = "I am learning string";
const string1 = new TruncateString(string);
console.log(string1.truncateStringExtends(4));
console.log(string.truncateStringCustom(4));
// s1
function truncateString(str, length) {
  if (str.length > length) {
    return str.substring(0, length) + "...";
  }
  return str;
}

console.log(truncateString("I am learning string", 4));
