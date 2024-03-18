// Existing Find function
// It returns the value of first element that passes a test
function func() {
  // Original array
  const original = [10, 12, 21, 24, 36, 39];

  const result = original.some(function (item) {
    return item%7 === 0;
  });

  console.log("original", original);
  console.log("result", result);
}
func();

console.log("\n------------- Custom some ---------------\n");

// Custom find function
Array.prototype.mySome = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if(callback(this[i], i, this) === true){
      return true;
    }
  }
  return false;
};

function func1() {

  const original = [10, 12, 21, 24, 36, 39];

  const result = original.mySome(function (item) {
    return item%7 === 0;
  });

  console.log("original", original);
  console.log("result", result);

}

func1();
