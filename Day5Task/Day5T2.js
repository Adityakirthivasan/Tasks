let arr = [1, 2, 3];
arr.push(4, 5); 
console.log(arr); 


let arr1 = [1, 2, 3, 4];
arr.pop(); 
console.log(arr);

let arr2 = [1, 2, 3, 4];
arr.shift(); 
console.log(arr); 

let arr3 = [2, 3, 4];
arr.unshift(1, 0); 
console.log(arr); 

let arr4 = [1, 2, 3, 4, 5];
arr.splice(2, 1, 99); 
console.log(arr); 

let arr5 = [1, 2, 3, 4, 5];
let newArr = arr.slice(1, 4); 
console.log(newArr); 

let arr6 = [1, 2, 3, 4];
arr.forEach(num => console.log(num * 2)); 

let arr7 = [1, 2, 3];
let doubled = arr.map(num => num * 2);
console.log(doubled);

let arr8 = [1, 2, 3, 4, 5];
let even = arr.filter(num => num % 2 === 0);
console.log(even); 

let arr9 = [1, 2, 3, 4];
let sum = arr.reduce((acc, num) => acc + num, 0);
console.log(sum);

let arr10 = [3, 1, 4, 1, 5];
arr.sort((a, b) => a - b); 
console.log(arr); 

let names = ["Zara", "Anna", "Liam"];
names.sort(); 
console.log(names);