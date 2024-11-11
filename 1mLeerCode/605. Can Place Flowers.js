/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */

// điều kiện
// - dk1 => flowerbed[i] == 0
// - dk2 => flowerbed[i -1 ] ==0 và i === 0 (index == 0 prev ko cần check)
// - dk2 => flowerbed[i + 1 ] ==0 và i === flowerbed.length -1  (index == n-1  mext ko cần check)

var canPlaceFlowers = function (flowerbed, n) {
  let count = 0;
  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 0) {
      let prev = i === 0 || flowerbed[i - 1] === 0;
      let next = i === flowerbed.length - 1 || flowerbed[i + 1] === 0;

      if (prev && next) {
        flowerbed[i] = 1;
        count++;
        if (count >= n) return true;
      }
    }
  }

  return count >= n;
};
