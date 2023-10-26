const readline = require('readline').createInterface({
  input: process.stdin, 
  output: process.stdout
});

readline.question('Введіть довжину масиву: ', length => {

  readline.question('Введіть число з якого почати відлік: ', start => {

    const array = new Array(length);
    let i = 0;

    function isPrime(num) {
      for(let j = 2; j < num; j++) {
        if(num % j === 0) {
          return false;
        }   
      }
      return num > 1;
    }

    for(let n = start; i < length; n++) {
      if(isPrime(n) && typeof n === 'number') {
        array[i] = +n; 
        i++;
      }
    }

    console.log(array);

    readline.close();

  });

});