module.exports = function check(str, bracketsConfig) {
let obj = {};
let objRepeat = {};
for (let j = 0; j < bracketsConfig.length; j++) {
  if ( bracketsConfig[j][1]===bracketsConfig[j][0]) {
    objRepeat[bracketsConfig[j][1]] = bracketsConfig[j][0]
  }
  else obj[bracketsConfig[j][1]] = bracketsConfig[j][0]
}
//console.log(obj)
let openBr = Object.values(obj);
let closeBr = Object.keys(obj);
let repeatBr = Object.values(objRepeat);
let steck = [];
//if ((openBr.includes(str[str.length-1]))|| (closeBr.includes(str[0]))) return false;
for (let i = 0; i < str.length; i++) {
  if (repeatBr.includes(str[i])) {(steck[steck.length-1] === str[i]) ? steck.pop() : steck.push(str[i]);}
  else if (openBr.includes(str[i])) { steck.push(str[i])}
  else if ( ((steck[steck.length-1]) === (obj[str[i]])) ) {
    steck.pop();}
  else {return false}
  }
if (steck.length) {return false}
else { return true}
}
