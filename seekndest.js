//difference between two arrays
function destroyer(arr) {
let newarr=[];
let args = Array.prototype.slice.call(arguments);

for(let i=0; i<args[0].length; i++){
  
  for(let j=0; j<args.length; j++){
    if(arr[i] === args[j]){
    arr.splice(i,1);
    i--;
  }
}
}
console.log(arr);
return arr;
}
destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan")