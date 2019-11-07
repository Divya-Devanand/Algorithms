// 
function myReplace(str, before, after) {
  str= str.split(" ");
  for(let i=0; i<str.length; i++){
if(str[i]== before){
  let check= str[i].split("");
  if(check[0]=== check[0].toUpperCase()){
after = after.charAt(0).toUpperCase()+after.slice(1);
str[i]= after;
  }
  else {
  console.log("its not caps");
  str[i]= after;
}
}
  }
  console.log(str.join(" "));
  return str.join(" ");

}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");