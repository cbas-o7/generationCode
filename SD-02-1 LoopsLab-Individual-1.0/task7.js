// Refer to Task 7 in your Instructions to complete this task

let buzzWords = [
  "Fizz",
  "Buzz",
  "Woof",
  "Bark",
  "Awoo",
  "Bang",
  "Boom",
  "Pow",
  "Zap",
  "Kaboom",
  "Crash",
  "Bangarang",
  "Boomerang",
  "Kablam",
  "Wham",
  "Smash",
  "Bam",
  "Kapow",
  "Zing",
  "Whack",
];

function isPrime(index) {
  if (index % 2 == 0) return false;
  if (index < 2) return false;
  for (let i = 2; i <= Math.sqrt(index); i++) {
    if (index % i === 0) return false;
  }
  return true;
}

let buzzIndex = 0;
for (let i = 1; i < 72; i++) {
  let output = "";

  if (isPrime(i)) {
    output += buzzWords[buzzIndex];
    buzzIndex += 1;
  } else {
    output += i;
  }
  console.log(output);
}
