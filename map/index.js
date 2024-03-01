// Existing map function
// It returns a new array after applying calback
function func() {
  // Original array
  const original = [12, 24, 36];

  const copy = original.map(function (item) {
    return "mapped item " + item;
  });

  console.log("original", original);
  console.log("copy", copy);
}
func();

console.log("\n------------- Custom map ---------------\n");

// Custom map function
Array.prototype.myMap = function (callback) {
  const resultArray = [];
  for (let i = 0; i < this.length; i++) {
    resultArray.push(callback(this[i], i, this));
  }
  return resultArray;
};

function func1() {
  const original = [12, 24, 36];
  const copy = original.myMap(function (item) {
    return "mapped item " + item;
  });

  console.log("original", original);
  console.log("copy", copy);
}

func1();
