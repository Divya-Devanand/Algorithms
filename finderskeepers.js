function findElement(arr, func) {
    let num = 0;
  let newarr=[];
    for(let i=0; i<arr.length; i++){
      let num= arr[i]
      if(func(num)){
        return num;
      }
    }
    return undefined;
  }
  
  findElement([1, 2, 3, 4], num => num % 2 === 0);