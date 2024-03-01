// Existing Filter function
// It returns a new array filled with elements that passes a test
function func() {
  // Original array
  const original = [12, 21, 24, 36, 39];

  const result = original.filter(function (item) {
    return item%2 === 0;
  });

  console.log("original", original);
  console.log("result", result);
}
func();

console.log("\n------------- Custom filter ---------------\n");

// Custom filter function
Array.prototype.myFilter = function (callback) {
  const resultArray = [];
  for (let i = 0; i < this.length; i++) {
    if(callback(this[i], i, this)){
      resultArray.push(this[i]);
    }
  }
  return resultArray;
};

function func1() {

  const original = [12, 21, 24, 36, 39];

  const result = original.myFilter(function (item) {
    return item%2 === 0;
  });

  console.log("original", original);
  console.log("result", result);

}

func1();
