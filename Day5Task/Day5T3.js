let str = "Hello, World!";
console.log(str.length); 

let stra = "hello, world!";
console.log(str.toUpperCase()); 

let strb = "HELLO, WORLD!";
console.log(str.toLowerCase()); 

let strc = "Hello, World!";
console.log(str.substring(0, 5)); 
console.log(str.substring(7));    

let str1 = "Hello";
let str2 = "World";
console.log(str1 + ", " + str2 + "!"); 
console.log(`${str1}, ${str2}!`);     

let str3 = "Hello, World!";
let newStr1 = str.replace("World", "JavaScript");
console.log(newStr); 

let str4 = "Hello, World! Welcome to the World!";
let newStr2 = str.replaceAll("World", "JavaScript");
console.log(newStr); 

let str5 = "   Hello, World!   ";
console.log(str.trim()); 