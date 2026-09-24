// Refer to Task 6 in your Instructions to complete this task

let array = [];
for (let i = 1; i < 106; i++) {
  let output = "";
  if (i % 3 === 0 ) {
    output += "Fizz";
    
  } 

  if (i % 5 === 0) {
    output += "Buzz";
  }
  
  if (i % 7 === 0) {
    output += "Woof";
  }
  array.push(output || i);
  console.log(output || i);
}