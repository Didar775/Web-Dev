//even numders
for (let i = 2; i <= 14; i++) {
    if (i % 2 == 0) {
      alert( i );
    }
}


//prime numders
let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) {

  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue nextPrime; 
  }

  alert( i ); // a prime
}