function logEvent() {
  console.log("logging /.,...................");
}

function throttle(fn, delay) {
  let exeFlag = true;
  // console.log(exeFlag, "before return");
  let timer;
  return function () {
    // console.log("exeflag", exeFlag);
    if (exeFlag) {
      fn.apply();
      exeFlag = false;
      setTimeout(() => {
        exeFlag = true;
      }, delay);
    }
  };
}

const betterLogEvent = throttle(logEvent, 3000);
