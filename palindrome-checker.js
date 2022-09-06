function palindrome(str) {
  var chars = [' ',',','.','_','-','(',')'];
  var a = str.split('');
  for(var i=0;i<a.length;i++)
  {for(var j=0;j<chars.length;j++)
  {if(a[i]==chars[j]){a[i]='';}}}
  str = a.join('');
  var rev = str.split('').reverse().join('').split(' ').join('');
  if (str.toLowerCase()==rev.toLowerCase()){return true;}else{return false;}
}
console.log(palindrome("0_0 (: /-\ :) 0-0"));