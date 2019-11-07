function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  var srckeys= Object.keys(source);
  return collection.filter(function(obj){

      for(var i=0; i < srckeys.length; i++){
          if(!obj.hasOwnProperty(srckeys[i]) || obj[srckeys[i]] != source[srckeys[i]]){
              return false;
          }
        //   arr.push(srckeys[i]);
      }
      return true;
  })
}
  

var result=whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 })
console.log(result);