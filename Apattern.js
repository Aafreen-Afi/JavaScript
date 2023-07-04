function APattern(){
    for(var i=1;i<=9; i++){
       if(i === 1){
        for(var k=1;k<=1;k++){
            var string_toPrint=" ";
        }
        for(var j=1;j<=9;j++){
            var string_toPrint="*";
        }
        var string_toPrint="\n";
       }
       else if(i===5){
        for(var j=1;j<=11;j++){
            var string_toPrint="*";
        }
        var string_toPrint="\n";
       }
       else{
        var string_toPrint="*";
        for(var k=1;k<=9;k++){
            var string_toPrint=" ";
        }
        var string_toPrint="*";
        var string_toPrint="\n";
       }
       console.log(string_toPrint)
    }
}
APattern();
