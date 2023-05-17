function counter() {
  let count = 0;
  
  function increment() {
    count++; 
    return count; 
  }
  
  return increment; 
}

const counter1 = counter();
const counter2 = counter();

console.log(counter1()); 
console.log(counter1()); 
console.log(counter1()); 

console.log(counter2()); 
console.log(counter2()); 
console.log(counter2()); 
console.log(counter2());  
console.log(counter2()); 