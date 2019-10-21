function findLongestWordLength(str) {
    let arr=[];
    arr= str.split(' ');
    let longestword= 0;
    for (let i=0; i<str.length; i++){
      if(arr[i].length>longestword){
        longestword= arr[i].length;
        
      }
    }
    console.log(longestword);
    return longestword;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");