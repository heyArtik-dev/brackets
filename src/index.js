module.exports = function check(str, bracketsConfig) {
  let result = true;
  let curLet;
  let open = '';

  if(str.length % 2 !== 0) result = false;

  // open brackets
  for (let j = 0; j < bracketsConfig.length; j++) {
    open += bracketsConfig[j][0];
  }

  //current arr by letter
  function curArr(curLet) {
    let curarr = 0;

    for (let j = 0; j < bracketsConfig.length; j++) {
      if (bracketsConfig[j][1] == curLet) {
        curarr = j;
      }
    }
    return curarr;
  }

  // true or false
  let n = 1;
  let clone = '';

  for (let i = 0; i < str.length; i++) {
    curLet = str[i];

    console.log(clone);
    
    if (open.includes(curLet) == false) {
      if (str[i - n] !== bracketsConfig[curArr(curLet)][0]) {
        result = false;
        break;
      } else {
        clone = clone.replace((str[i - n]), '');
        clone = clone.replace((curLet), '');
        n += 2;
        console.log(clone);
      }
    } else if (open.includes(curLet) == true && clone.includes(curLet) == true) {
        clone = clone.replace(curLet, '');
        n += 2;
        console.log(clone);
        
    } else {
      clone += curLet;
      n = 1;
    }
  }

  n = 0;

  return result;

}






