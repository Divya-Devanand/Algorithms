function getIndexToIns(arr, num) {
    // Find my place in this sorted array.
    let count=0;
    arr.push(num);
    arr.sort(function(a, b){return a - b});
    console.log(arr)
    console.log(arr.indexOf(num)) 
    return arr.indexOf(num)
  
  }
  getIndexToIns([3, 10, 5], 3)