function telephoneCheck(str) {
  var paren=false,reg=false,size=false;
  var s = str.split(/[ -()]+/);
  s = dell(s);
  var sall = str.split('');
  var par = parf(sall);
  if(par=='()'){
    paren=true;
  }
  else if(par!='()'){
    paren=false;
  }
  if(s.length == 3){
    size=true;
  }
  else if(s.length >= 4){
    size = true;
    if(s[0]!=1){
      reg=false;
    }
    else {
      reg = true;
    };
  }
  else if(s.length <= 2){
    size = false;
  }
  // return 'parenthesis='+paren+' correct size='+size+' correct region='+reg
  if(paren||size||reg){
    return true;
  }
  else{
    return false;
  }
}

function parf(sall){
  var par = '';
  for(var i=0;i<sall.length;i++){
    if(sall[i]=='('||sall[i]==')'){
      par+=sall[i];
    }
  }
  return par;
}

function dell(s){
  var s = s
  if(s.indexOf('') != -1){
      s.splice(s.indexOf(''),1);  
  }
  return s;
}

console.log(telephoneCheck("1 (555) 555 5555"));
