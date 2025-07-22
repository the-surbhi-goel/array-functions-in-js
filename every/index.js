// Existing Every function
// Checks if every array element satisfies a condition
function func() {
  // Original array
  const original = [9, 12, 21, 24, 36, 39];

  const result = original.every(function (item) {
    return item%3 === 0;
  });

  console.log("original", original);
  console.log("result", result);
}
func();

console.log("\n------------- Custom every ---------------\n");

// Custom every function
Array.prototype.myEvery = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if(callback(this[i], i, this) === false){
      return false;
    }
  }
  return true;
};

function func1() {

  const original = [9, 12, 21, 24, 36, 39];

  const result = original.myEvery(function (item) {
    return item%3 === 0;
  });

  console.log("original", original);
  console.log("result", result);

}

func1();
