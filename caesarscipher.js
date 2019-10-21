function rot13(str) { // LBH QVQ VG!
  
    var alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let regexstr= /[^A-Za-z0-9]/g;
    console.log(str.match(regexstr));
    var newstr="";
    for(let i=0; i<str.length; i++){
      if(str[i]!== regexstr){
        if(str[i]<13){
         newstr += String.fromCharCode(charCodeAt(str[i])+13);
         break;
         }
         if(str[i]>13){
           newstr += String.fromCharCode(charCodeAt(str[i])+13);
           break;
         }
         
      }
      newstr += str[i];
      console.log(newstr);
      return newstr;
    }
  
  }
  
  // Change the inputs below to test
  rot13("SERR PBQR PNZC");