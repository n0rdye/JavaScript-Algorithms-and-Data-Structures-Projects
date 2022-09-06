function convertToRoman(num) {
 var a = num.toString().split('');
 var r='', j=1;
 for(var i=0;i<a.length-1;i++){
   j*=10;
 }
 for(var i=0;i<a.length;i++){
   r += f(parseInt(a[i]),r,j);
   j/=10;
 }

 return r;
}

function f(int,r,num){
  var r=r;
  if(num==1){
    switch(int){
     case 0: r='';break;
     case 1: r='I';break;
     case 2: r='II';break;
     case 3: r='III';break;
     case 4: r='IV';break;
     case 5: r='V';break;
     case 6: r='VI';break;
     case 7: r='VII';break;
     case 8: r='VIII';break;
     case 9: r='IX';break;
   }
  }
  else if(num==10){
    switch(int){
     case 0: r='';break;
     case 1: r='X';break;
     case 2: r='XX';break;
     case 3: r='XXX';break;
     case 4: r='XL';break;
     case 5: r='L';break;
     case 6: r='LX';break;
     case 7: r='LXX';break;
     case 8: r='LXXX';break;
     case 9: r='XC';break;
   }
  }
  else if(num==100){
      switch(int){
        case 0: r='';break;
        case 1: r='C';break;
        case 2: r='CC';break;
        case 3: r='CCC';break;
        case 4: r='CD';break;
        case 5: r='D';break;
        case 6: r='DC';break;
        case 7: r='DCC';break;
        case 8: r='DCCC';break;
        case 9: r='CM';break;
   }
  }
  else if(num==1000){
      switch(int){
        case 1: r='M';break;
        case 2: r='MM';break;
        case 3: r='MMM';break;
   }
  }
   return r;
}

console.log(convertToRoman(123));