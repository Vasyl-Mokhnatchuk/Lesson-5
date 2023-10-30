let arr = Array.from(Array(20)).map(i => Math.round(Math.random() * 100));
console.log(arr);

let min = arr[0];

for (let i = 1; i < arr.length; i++) {

  if (arr[i] < min) {
    min = arr[i];
  }
}

console.log(`Мінімальне число: ${min}`);