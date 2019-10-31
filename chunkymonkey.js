function chunkArrayInGroups(arr, size) {
    // Break it up.
    let newarr=[];
    for(let i=0; i<arr.length; i+=size){
      let Arr= arr.slice(i, i+size);
      newarr.push(Arr);
      console.log(newarr);
      console.log("yo");
    }
    console.log(newarr);
    return newarr;
  }
  
  chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);