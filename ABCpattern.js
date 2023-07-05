//A Pattern
function APattern(no_of_rows){
     var string_toPrint="";
     for(var i=1;i<=no_of_rows; i++){
        if(i === 1){
         for(var k=1;k<=1;k++){
              string_toPrint+=" ";
         }
         for(var j=1;j<=no_of_rows;j++){
              string_toPrint+="*";
         }
          string_toPrint+="\n";
        }
        else if(i === Math.round(no_of_rows/2)){
         for(var j=1;j<=no_of_rows+2;j++){
              string_toPrint+="*";
         }
          string_toPrint+="\n";
        }
        else{
          string_toPrint+="*";
         for(var k=1;k<=no_of_rows;k++){
              string_toPrint+=" ";
         }
          string_toPrint+="*";
          string_toPrint+="\n";
        }
     }
     console.log(string_toPrint)
}
APattern(9);

//B Pattern
function Bpattern(no_of_rows){
     var string_toPrint="";
     for(var i=1;i<=no_of_rows; i++){
      if(i === 1){
       for(var k=1;k<=1;k++){
         //    string_toPrint+=" ";
       }
       for(var j=1;j<=no_of_rows+1;j++){
            string_toPrint+="*";
       }
        string_toPrint+="\n";
      }
      else if(i=== Math.round(no_of_rows/2)){
       for(var j=1;j<=no_of_rows+1;j++){
            string_toPrint+="*";
       }
        string_toPrint+="\n";
      }
      else if(i===no_of_rows){
         for(var k=1;k<=1;k++){
           //    string_toPrint+=" ";
         }
         for(var j=1;j<=no_of_rows+1;j++){
              string_toPrint+="*";
         }
          string_toPrint+="\n";
        }
      else{
        string_toPrint+="*";
       for(var k=1;k<=no_of_rows;k++){
            string_toPrint+=" ";
       }
        string_toPrint+="*";
        string_toPrint+="\n";
      }
   }
   console.log(string_toPrint)
}
Bpattern(9);

//C Pattern
function Cpattern(no_of_rows){
    var string_toPrint="";
    for(var i=1;i<=no_of_rows; i++){
     if(i === 1){
      for(var k=1;k<=1;k++){
           string_toPrint+=" ";
      }
      for(var j=1;j<=no_of_rows;j++){
           string_toPrint+="*";
      }
       string_toPrint+="\n";
     }
     else if(i===no_of_rows){
          for(var k=1;k<=1;k++){
              string_toPrint+=" ";
          }
          for(var j=1;j<=no_of_rows;j++){
               string_toPrint+="*";
          }
           string_toPrint+="\n";
         }
     else{
       string_toPrint+="*";
      for(var k=1;k<=no_of_rows;k++){
           string_toPrint+=" ";
      }
     
       string_toPrint+="\n";
     }
  }
  console.log(string_toPrint)
}
Cpattern(9);
