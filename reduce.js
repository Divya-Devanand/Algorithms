function checkPositive(arr) {
    // Add your code below this line
    arr.some(function(value){
      return value > 0;
    });
    
    // Add your code above this line
  }
  checkPositive([1, 2, 3, -4, 5]);
