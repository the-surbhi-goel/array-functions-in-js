// Existing forEach function
function func() {
  // Original array
  const original = [12, 24, 36];
  const copy = [];

  original.forEach(function (item) {
    copy.push(item * 2);
  });

  console.log("original", original);
  console.log("copy", copy);
}
func();

console.log("\n------------- Custom forEach ---------------\n");

// Custom forEach function
Array.prototype.myForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};

function func1() {
  const original = [12, 24, 36];
  const copy = [];

  original.myForEach(function (item) {
    copy.push(item * 2);
  });

  console.log("original", original);
  console.log("copy", copy);
}

func1();
