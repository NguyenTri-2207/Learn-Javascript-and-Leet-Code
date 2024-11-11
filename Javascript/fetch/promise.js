const fetchDataImage = (url) => {
  console.log(url);
  return fetch(url)
    .then((res) => res)
    .catch((error) => {
      throw Error(error);
    });
};

const fetchDataImageLevel = () => {
  // Thực hiện các lời gọi Promise theo thứ tự tuần tự
  fetchDataImage("https://picsum.photos/200/300")
    .then((res) => {
      document.getElementById("img1").setAttribute("src", res.url);
      return fetchDataImage("https://picsum.photos/200/300");
    })
    .then((res) => {
      document.getElementById("img2").setAttribute("src", res.url);
      return fetchDataImage("https://picsum.photos/200/300");
    })
    .then((res) => {
      document.getElementById("img3").setAttribute("src", res.url);
    })
    .catch((error) => {
      console.error("Error fetching images:", error);
    });
};

const handleLog3 = (callback) => {
  return new Promise((resolve, reject) => {
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
    }, 1000);
  });
};
const handleLog5 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(5);
      resolve();
    }, 1000);
  });
};
const main = () => {
  console.log(0);
  const handleLog = () => {
    console.log(1);

    setTimeout(() => {
      console.log(2);
      handleLog3()
        .then(handleLog4)
        .then(handleLog5)
        .then(fetchDataImageLevel)
        .catch((error) => console.log(error));
    }, 0);
  };
  handleLog();
};

main();
