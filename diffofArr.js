//difference between two arrays
function diffArray(a1, a2){
    var diff= [];
    for(let i=0; i<=a1.length; i++){
        if(a2.indexOf(a1[i])=== -1){
        diff.push(a1[i]);
        }
    }
    for(let i=0; i<=a2.length; i++){
        if(a1.indexOf(a2[i])=== -1){
        diff.push(a2[i]);
        }
}
console.log(diff);
}
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);