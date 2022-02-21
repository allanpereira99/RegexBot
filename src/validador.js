function Validador(regExp){
try{
  let regex = /^\w+((\w+|\W){4})[\/]g/g;
  if(regExp.match(regex)){
    return true;
  }
  else{
    return false;
  }
}
catch(e){}
}
export default Validador;
