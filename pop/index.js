// Existing pop function
// It remove the first element of the array

console.log("Original pop method");
const arr1 = [1, 2, 3, 4];
console.log("Original Array ", arr1);
arr1.pop();
console.log("Array after pop", arr1);
  
console.log("\n------------- Custom pop ---------------\n");
  
// Custom pop function
Array.prototype.myPop = function () {
    this.length = this.length - 1;
};

console.log("Custom pop method");
const arr2 = [1, 2, 3, 4];
console.log("Original Array ", arr2);
arr2.myPop();
console.log("Array after pop", arr2);
  
  