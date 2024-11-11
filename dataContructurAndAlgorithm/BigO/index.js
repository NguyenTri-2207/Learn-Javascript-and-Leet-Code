const count = (n) => {
  let sum = 0;

  for (let i = 0; i <= n; i++) {
    //2N => làm 2 nhiệm vụ là tăng i lên 1 và so sánh i vs N nên là 2N
    for (let j = i; j <= n; j++) {
      sum++;
    }
  }
  console.log(sum);
  return sum;
};

count(6);
