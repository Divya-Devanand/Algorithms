function whatIsInAName(collection, source) {
    // What's in a name?
    var arr = [];
    // Only change code below this line
    var source_keys=Object.keys(source);
  
  
    for(let i=0; i< collection.length; i++){
  
      //iterate through keys in collection[i]
      //what are the keys in collection[i]
  
      var collection_keys=Object.keys(collection[i]);
  
      for(let j=0;j<collection_keys.length;j++){
  
  
        for(let k=0;k<source_keys.length;k++){
          console.log('inside inner most loop\n')
         
  
          console.log('\n\n\n')
          console.log(collection_keys[j])
          console.log(source_keys[k])
  
  
  
          if(collection_keys[j]==source_keys[k]){
            console.log('passed the key test')
            console.log(collection[i][collection_keys[j]]);
            console.log(source[source_keys[k]]);
            if(collection[i][collection_keys[j]] === source[source_keys[k]]){
                console.log("find");
            arr.push(collection[i]); 
            }
            
          
          }
  
        }
  
  
      }
  
      
    }
    console.log(JSON.stringify(arr));
    console.log(arr);
    console.log("hi");
     return arr; 
    
    
    // Only change code above this line
    
  }
  
  whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 });