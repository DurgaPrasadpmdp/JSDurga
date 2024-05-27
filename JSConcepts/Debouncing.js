/* 

debouncing is a techinique of rate limiting the function 


used forperfomnace optimization 

*/

function debounce(fn, delay) {
  let timer;
  return function (e) {
    clearTimeout(timer);
    let context = this;
    const args = arguments;
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
}

function handleInput(e) {
  //console.log("text", e);
  console.log(e.target.value);
}

const perfomant = debounce(handleInput, 300);

/*
performant function(){

  }

*/
