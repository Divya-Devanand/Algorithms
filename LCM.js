

function smallestCommons(arr) {
    let min= Math.min(...arr);
    let max= Math.max(...arr);
    var i=1;
    console.log(max);
    
    
    // iterate through arr
    while(i){
  var count= 0;
      for(let j=min; j<max; j++){
        if(max * i % j!== 0){
          break;
        }
        count ++;
      }
      if(count === (max-min)){
        console.log(max * i);
        return max*i;
      }
      i++;
    }
  }
  
  
  smallestCommons([23, 18]);
