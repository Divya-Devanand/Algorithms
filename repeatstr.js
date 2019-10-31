function repeatStringNumTimes(str, num) {
  // repeat after me
  let newstr="";
  if(num <= 0){
    let empty= "";
    return empty;
  }
  else{

  for(let i=0; i< num; i++){
    newstr += str;
  }
  }
  console.log(newstr);
  return newstr;

}

repeatStringNumTimes("*", 3);
