// Refer to Task 3 in your Instructions to complete this task

for (let i = 1; i < 106; i++) {
  let output = "";
  if (i % 3 === 0 ) {
    output += "Fizz";
    
  } 

  if (i % 5 === 0) {
    output += "Buzz";
  } 

  console.log(output || i);
}
