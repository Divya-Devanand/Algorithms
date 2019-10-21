var Person = function(firstAndLast) {
    // Complete the method below and implement the others similarly
    var fullname= firstAndLast;
  
    this.getFirstName= function(){
      return fullname.split(" ")[0];
    };
  
  this.getLastName= function(){
    return fullname.split(" ")[1];
  };
  
  this.getFullName= function(){
    return fullname;
  };
  
  this.setFirstName= function(first){
    fullname=first+" "+fullname.split(" ")[1];
    return fullname;
  };
  
  this.setLastName= function(name){
    fullname=fullname.split(" ")[0]+" "+name
    return fullname;
  };
  
  this.setFullName=function(name){
    return name;
  };
  };
  
  var bob = new Person('Bob Ross');
  
  console.log(bob.getFirstName());