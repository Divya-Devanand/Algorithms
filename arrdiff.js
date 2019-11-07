function diffArray(arr1, arr2) {
    var newArr = [];
    for(let i=0; i<arr2.length; i++){
      if(arr1.indexOf(arr2[i]) < 0){
        newArr.push(arr2[i]);
      }
    }
    for(let j=0; j<arr1.length; j++){
      if(arr2.indexOf(arr1[j]) < 0){
        newArr.push(arr1[j]);
      }
    }

    console.log(newArr);
    return newArr;
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
  
  