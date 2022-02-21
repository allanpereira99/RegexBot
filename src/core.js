function Regex(exp,text){
  let newExp = exp.split("/");
  let regExp = eval(`/${newExp[1]}/${newExp[3]}`);
  return  new Promise(resolve=>{
    let result = text.replace(regExp,newExp[2]);
    resolve(result)
  });
}

export default Regex;
