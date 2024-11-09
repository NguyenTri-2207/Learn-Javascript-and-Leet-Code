const fetchDataImage = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response;
    return data; // Hoặc xử lý dữ liệu ở đây nếu cần
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const handleLog3 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(3);
      resolve();
    }, 1000);
  });
};

const handleLog4 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(4);
      resolve();
    }, 1);
  });
};

const handleLog5 = () => {
  console.log(5);
};

const main = async () => {
  console.log(0);
  console.log(1);
  console.log(2);
  // Bắt đầu gọi API nhưng không chờ đợi
  const a = await fetchDataImage("https://picsum.photos/200/300");
  console.log(a);
  await handleLog3();
  await handleLog4();
  handleLog5();
};

main();
