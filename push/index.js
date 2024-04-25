// Existing push function
// It push the value at the top of the array

console.log("Original push method");
const arr1 = [1, 2, 3, 4];
console.log("Original Array ", arr1);
arr1.push(5);
console.log("Array after pushing", arr1);
  
console.log("\n------------- Custom push ---------------\n");
  
  // Custom push function
Array.prototype.myPush = function (value) {
    let len = this.length;
    this[len] = value;
};

console.log("Custom push method");
const arr2 = [1, 2, 3, 4];
console.log("Original Array ", arr2);
arr2.myPush(5);
console.log("Array after pushing", arr2);
  
  