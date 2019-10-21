function sym() {
    var a= [];
    
    for (let i=0; i<arguments.length; i++){
        a.push(arguments[i]);
    }   
    function symDiff(arrone, arrtwo){
        var result=[];

        arrone.forEach(function(item){
            if(arrtwo.indexOf(item) < 0 && result.indexOf(item) < 0){
                result.push(item);
            }
        });

        arrtwo.forEach(function(item){
            if(arrone.indexOf(item) < 0 && result.indexOf(item) < 0){
                result.push(item);
            }
        });
        return result;
    }
    console.log(a.reduce(symDiff));
    return a.reduce(symDiff);
}
  
  sym([1, 2, 3], [5, 2, 1, 4]);