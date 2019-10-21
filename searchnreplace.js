function myReplace(str, before, after) {
    str= str.split(" ");
    var newstr;
    console.log(str);
    for(let i=0; i<str.length; i++){
      if(str[i]== before){
        console.log("hi");
        console.log(str[i]);
         str[i]=after;
         str=str.join(" ");
         console.log(str)
        return str;
      }
    }
   }
   
   myReplace("He is Sleeping on the couch", "Sleeping", "sitting");