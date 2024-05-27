// Normal function to caluclate volume
function volume(l, b, h) {
  return l * b * h;
}

// invoing the voulme function
console.log(volume(1, 2, 3));

// Curry by closers

const curryVolume = function (l) {
  return function (b) {
    return function (h) {
      return l * b * h;
    };
  };
};

console.log("curry area", curryVolume(2)(2)(2));

// same thing another way is by using  bind function

const curryByUsingBindlength2 = volume.bind(this, 2);

console.log("bind length 2 fixed", curryByUsingBindlength2(2, 5));

/* currying in js is a techinque that transforms the function with several 

arguments to function with single argument that is a higher order function.


use cases

error handling

maintainable and readable

modular and reusable code 



*/
