let arr = [1, 2, 3, 4];
console.log(arr);

arr.unshift(1, 2); 
console.log(arr);

arr.push(5, 6, 7);
console.log(arr);

arr.splice(2, 3);
console.log(arr);

arr.splice(arr.length - 1, 0, 99, 100); 
console.log(arr);