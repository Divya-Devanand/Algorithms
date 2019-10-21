function spinalCase(str) {
    //check for capital in word and give space
    //check for underscore in word and replace with space
    //check for dash and replace with space
    //convert to lowercase
    //split words
    // join with dash
    let newstr= str.split('');
    let result
    for(let i=0; i< newstr.length; i++){
        var char = newstr.charAt(0);
      if(char== char.toUppercase()){
        result= newstr.slice(0,i--)+ " " +newstr.slice(i--);
            }
            console.log(result);
    }
  
    
    
    console.log(newstr);
    return newstr;
  }
  
  spinalCase('thisIsSpinalTap');