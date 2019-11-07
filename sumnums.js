function sumAll(arr) {
    let max= Math.max(...arr);
    let min= Math.min(...arr);
    let sum=0;
    for(let i=min; i<=max; i++){
        sum += i;
    }
    console.log(sum);
    return sum;
  }
  
  sumAll([5, 10]);
  