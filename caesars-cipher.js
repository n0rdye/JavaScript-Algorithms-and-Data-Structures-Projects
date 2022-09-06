function rot13(str) {
  var a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),s = str.split(''),st='';
  for(var i = 0;i<s.length;i++){
    if(/^[A-Z]+$/.test(s[i])){st+= a[c(a.indexOf(s[i])+13)];}
    else {st+=s[i];}
  }
  return st;
}

function c(num){
  var n=0;
  for(var i=0;i<num;i++){
    if(n!=25){n+=1;}
    else{n=0;}}
  return n;
}

console.log(rot13("SERR CVMMN!"));