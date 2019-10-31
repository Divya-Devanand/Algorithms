function bouncer(arr) {
    // Don't show a false ID to this bouncer.
    let Arr= [];
    console.log(Arr);
    for(let i=0; i<arr.length; i++){
      if(arr[i]){
        Arr.push(arr[i]);
      }
    }
    console.log(Arr);
    return Arr
  }
  
  bouncer(["a", "b", "c"]);
  