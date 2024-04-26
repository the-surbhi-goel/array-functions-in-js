// Existing shift function
// It remove the first element of the array

console.log("Original shift method");
const arr1 = [1, 2, 3, 4];
console.log("Original Array ", arr1);
arr1.shift();
console.log("Array after shift", arr1);
  
console.log("\n------------- Custom shift ---------------\n");
  
// Custom shift function
Array.prototype.myShift = function () {
    let len = this.length;
    for (let i = 1; i < len; i++) {
        this[i - 1] = this[i];
    }
    this.length = this.length - 1;
};

console.log("Custom shift method");
const arr2 = [1, 2, 3, 4];
console.log("Original Array ", arr2);
arr2.myShift();
console.log("Array after shift", arr2);
  
  