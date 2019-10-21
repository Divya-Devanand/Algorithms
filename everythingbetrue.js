function truthCheck(collection, pre) {
    // Is everyone being true?
    var count=0;
    for(var c in collection){
      if(collection[c].hasOwnProperty(pre) && Boolean(collection[c][pre])){
        count++;
        console.log(count);
      }
    }
    console.log(count);
    return count == collection.length;
  }
  
  truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");