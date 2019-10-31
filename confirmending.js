function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  let arr=[];
  let newArr=[];
  var check= target.length;
  arr= str.split("");
  console.log(arr);
  let test=arr.length - target.length;
  for(let i=test; i<= arr.length; i++){
    newArr.push(arr[i]);
  }
  let Arr= [];
  Arr= newArr.join("");
  if(Arr == target){
      console.log("true");
    return true;
  }
  else{
      console.log("false");
      return false;
  }
  
}

confirmEnding("Connor", "n")
