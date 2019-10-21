function sumPrimes(num) {
    let sum=0;
    var arr=[2];
     var isprime;
    for(let i=3; i<= num; i+=2){
      isprime= 'true';
      for(let j=0; j<arr.length; j++){
        console.log("\n\nchecking");
        console.log(i);
        console.log("divided by");
        console.log(arr[j]);

        if(i % arr[j] == 0){
          console.log('negative for '+ i+' divided by'+arr[j])
          isprime= 'false';
          break;
        }
      }
      if(isprime){
        console.log(isprime)
        console.log('pushing '+i)
        arr.push(i);
      }
    }
      console.log(arr);
      for(let i=0; i<arr.length; i++){
          sum += arr[i];
      }
     console.log("arr "+ arr);
     console.log("sum"+ sum);
     return sum;
    }
    
    sumPrimes(10);