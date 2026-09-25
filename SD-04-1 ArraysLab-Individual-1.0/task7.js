const arr = [
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
  [20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
];

// Type your code below this line!

//* Can you add a single number to an existing row?
arr[0].push(2);
console.log(`1.- ${arr[0]}`);
//* Can you add a whole new row of numbers?

arr.push([11,23,45,57,12,45,67,89,23,10])
console.log(`2.- ${arr[4]}`)
//* Can you remove a single number from a single row?
arr[0].splice(11,1)
console.log(`1.- ${arr[0]}`);

//* Can you reverse one of the rows without affecting the others
arr[0].reverse()
console.log(`1.- ${arr[0]}`);

// Type your code above this line!
