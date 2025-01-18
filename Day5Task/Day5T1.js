//MAP

let map = new Map();


map.set('name', 'Ak');
map.set('age', 19);
map.set(true, 'isActive');


console.log(map.get('name')); 
console.log(map.get(true));   


console.log(map.size); 


console.log(map.has('age')); 


map.forEach((value, key) => {
    console.log(`${key}: ${value}`);
});



map.delete('age');
console.log(map.size);


map.clear();
console.log(map.size); 



//SET

let set = new Set();


set.add(1);
set.add(2);
set.add(3);
set.add(1); 

console.log(set); 


console.log(set.size); 


console.log(set.has(2)); 
console.log(set.has(5)); 


set.delete(2);
console.log(set); 


set.forEach(value => {
    console.log(value);
});



let arr = Array.from(set);
console.log(arr); 


set.clear();
console.log(set.size);