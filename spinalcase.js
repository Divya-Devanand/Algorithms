function spinalCase(str) {
    //check for capital in word and give space
    //check for underscore in word and replace with space
    //check for dash and replace with space
    //convert to lowercase
    //split words
    // join with dash
    var regex= /\s+|_+/g;
    str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
    console.log (str.replace(regex, "-").toLowerCase());
    return str.replace(regex, "-").toLowerCase();
  }
  
  spinalCase('thisIsSpinalTap');