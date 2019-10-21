//difference between two arrays
function destroyer(arr) {
    // Remove all the values
    var diff=[];
  for(let i=0; i<=arr.length; i++){
    for(let j=0; j<=arr[0].length; j++){
      for(let k=1; k<=arr.length;j++){
        if(arr[k].indexOf(arr[i][j])=== -1){
          diff.push(arr[i][j]);
console,log(diff);
        }
      }
    }
  }
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);