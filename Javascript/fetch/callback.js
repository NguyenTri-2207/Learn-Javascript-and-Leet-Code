const fetchDataImage = (url, callback) => {
  console.log(url);
  fetch(url)
    .then((res) => res)
    .then((json) => callback(null, json))
    .catch((error) => callback(error));
};
const handleLog3 = (callback) => {
  setTimeout(() => {
    console.log(3);
    callback();
  }, 1000);
};
const handleLog4 = (callback) => {
  setTimeout(() => {
    console.log(4);
    callback();
  }, 1000);
};
const handleLog5 = (callback) => {
  console.log(5);
  callback();
};
const fetchDataImage1 = () => {
  fetchDataImage("https://picsum.photos/200/300", (error, res) => {
    if (error) throw Error(error);
    document.getElementById("img1").setAttribute("src", res.url);
    fetchDataImage("https://picsum.photos/200/300", (error, res) => {
      if (error) throw Error(error);
      document.getElementById("img2").setAttribute("src", res.url);
      fetchDataImage("https://picsum.photos/200/300", (error, res) => {
        if (error) throw Error(error);
        document.getElementById("img3").setAttribute("src", res.url);
      });
    });
  });
};
const main = () => {
  console.log(0);
  const handleLog = () => {
    console.log(1);

    setTimeout(() => {
      console.log(2);
      handleLog3(() => {
        handleLog4(() => {
          handleLog5(() => {
            fetchDataImage1();
          });
        });
      });
    }, 0);
  };
  handleLog();
};

main();
