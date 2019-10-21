function translatePigLatin(str) {
    var strArr= [ ];
    var tmpChar;
    let regex= /[^aeiou]/gi;
  
  //check if character is consonant
  function isConsonant(Char){
    return !/[aeiou]/.test(Char);
  }
  // return initial string + way if it starts with vowel
  if(!isConsonant(str.charAt(0))){
    return str + "way";
  }
  else 
  strArr= str.split("");
  
  while(isConsonant(strArr[0])){
    tmpChar= strArr.shift();
    strArr.push(tmpChar);
    console.log(tmpChar);
  }
  console.log (strArr.join("")+"ay");
  }
  translatePigLatin("glove");