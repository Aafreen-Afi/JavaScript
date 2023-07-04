//A Pattern
function APattern(){
    var string_toPrint="";
    for(var i=1;i<=9; i++){
       if(i === 1){
        for(var k=1;k<=1;k++){
             string_toPrint+=" ";
        }
        for(var j=1;j<=9;j++){
             string_toPrint+="*";
        }
         string_toPrint+="\n";
       }
       else if(i===5){
        for(var j=1;j<=11;j++){
             string_toPrint+="*";
        }
         string_toPrint+="\n";
       }
       else{
         string_toPrint+="*";
        for(var k=1;k<=9;k++){
             string_toPrint+=" ";
        }
         string_toPrint+="*";
         string_toPrint+="\n";
       }
    }
    console.log(string_toPrint)
}

//B Pattern
function Bpattern(){
    var string_toPrint="";
    for(var i=1;i<=9; i++){
     if(i === 1){
      for(var k=1;k<=1;k++){
        //    string_toPrint+=" ";
      }
      for(var j=1;j<=10;j++){
           string_toPrint+="*";
      }
       string_toPrint+="\n";
     }
     else if(i===5){
      for(var j=1;j<=10;j++){
           string_toPrint+="*";
      }
       string_toPrint+="\n";
     }
     else if(i===9){
        for(var k=1;k<=1;k++){
          //    string_toPrint+=" ";
        }
        for(var j=1;j<=10;j++){
             string_toPrint+="*";
        }
         string_toPrint+="\n";
       }
     else{
       string_toPrint+="*";
      for(var k=1;k<=9;k++){
           string_toPrint+=" ";
      }
       string_toPrint+="*";
       string_toPrint+="\n";
     }
  }
  console.log(string_toPrint)
}

//C Pattern
function Cpattern(){
    var string_toPrint="";
    for(var i=1;i<=9; i++){
     if(i === 1){
      for(var k=1;k<=1;k++){
           string_toPrint+=" ";
      }
      for(var j=1;j<=9;j++){
           string_toPrint+="*";
      }
       string_toPrint+="\n";
     }
     else if(i===9){
          for(var k=1;k<=1;k++){
              string_toPrint+=" ";
          }
          for(var j=1;j<=9;j++){
               string_toPrint+="*";
          }
           string_toPrint+="\n";
         }
     else{
       string_toPrint+="*";
      for(var k=1;k<=9;k++){
           string_toPrint+=" ";
      }
     
       string_toPrint+="\n";
     }
  }
  console.log(string_toPrint)
}
APattern();
Bpattern();
Cpattern();
