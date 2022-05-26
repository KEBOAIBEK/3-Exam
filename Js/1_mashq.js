function sumInput() {

    let numbers = [];
  
    do {
      let value = prompt("Sizga kerakli son kiriting", 0);
      numbers.push(+value);
    }
    while ( (value !== "" || value !== null) && isFinite(value) );
  
    
    let sum = 0;
    for (let number of numbers) {
      sum += number;
    }
    return sum;
  }