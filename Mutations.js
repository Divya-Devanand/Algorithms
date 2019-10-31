function mutation(arr) {
    let target= arr[0].toLowerCase();
    let test= arr[1].toLowerCase();
    for(let i=0; i<test.length; i++){
        if(target.indexOf(test[i]) < 0){
return false;
        }
    }
    console.log("true");
    return true;
    
}
  mutation(["hello", "Hello"]);
  
  