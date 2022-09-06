function telephoneCheck(str) { 
  var s = str.split('');
  var nums = checknums(str);
  if(nums.length<=12&&nums.length>=10&&checkseps(str)){
    if(nums.length > 10&&s.indexOf('(')!=-1){
      return both(str,nums);
    }
    else if(s.indexOf('(')!=-1||s.indexOf(')')!=-1){
      if(s.indexOf(')')!=s.length-1){
          return parenthesis(s);
      }
      else {return false;}
    }
    else if(nums.length > 10){
      return regional(str,nums);
    }
    else{
      return true;
    }
  }
  else{
    return false;
  }
}

function both(str,nums){
  var s = str.replaceAll('(', '$').replaceAll(' ', '$').replaceAll(' ', '$').split('$');
  if(nums.length<12&&s[0]=='1'){
    return parenthesis(str);
  }
  else{
    return false;
  }
}

function checknums(str){
  var nums='';
  for(var i=0;i<str.length;i++){
    if(!isNaN(str[i])&&str[i]!=' '){
      nums+=str[i];
    }
  }
  return nums;
}

function checkseps(str){
  var count=0;
  for(var i=0;i<str.length;i++){
    if(str[i]=='-'){count++}
  }
  if(count>2){
    return false;
  }
  else {return true;}
}

function parenthesis(str){
  var par ='';
  for(var i =0;i<str.length;i++){
    if(str[i]=='('||str[i]==')'){
      par+=str[i];
    }
  }
  if(par=='()'){
    return true;
  }
  else if (par!='()'){
    return false;
  }
}

function regional(s,nums){
  var s = s.split(' ');
  if(nums.length<12&&s[0]=='1'){
    return true;
  }
  else{
    return false;
  }
}

console.log(telephoneCheck("55 55-55-555-5"));
