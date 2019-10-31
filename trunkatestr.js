function truncateString(str, num) {
    // Clear out that junk in your trunk
    let newstr="";
    let newStr="";
    if(str.length <= num ){
      console.log(str);
        return str;
    }
    else{
      for(let i=0; i<num; i++){
  newstr += str[i];
      }
    }
    newStr = newstr+ "...";
    console.log(newStr);
    return newStr;
  }
  
  truncateString("A-tisket a-tasket A green and yellow basket", 8);
  