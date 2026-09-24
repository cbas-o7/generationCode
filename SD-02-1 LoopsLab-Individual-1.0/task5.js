// Refer to Task 5 in your Instructions to complete this task

let lineNumber = prompt("Enter a line number between 1 and 105:");
for (let i = 1; i < lineNumber + 1; i++) {
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

  console.log(output || i);
}