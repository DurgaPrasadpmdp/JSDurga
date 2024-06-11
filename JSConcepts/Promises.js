console.log("start");
const promise = new Promise((resolve, reject) => {
  const data = fetch("https://httpstat.us/500")
    .then((res) => {
      const data = res.json();
      if (!res.ok) {
        throw new Error(data);
      }
      return data;
    })
    .then((data) => {
      resolve(data);
    })
    .catch((error) => {
      console.log(error);
      reject(error ? error : "fetch error");
    })
    .finally(() => {
      console.log("I am finnaly block");
    });
});

console.log(promise);
promise
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

console.log("end");
