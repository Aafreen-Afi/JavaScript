function printPattern(number_of_rows){
    for(var i=0;i<=number_of_rows; i++){
        var string_toPrint="";
        for(var j=0;j<i; j++){
            string_toPrint+="*";
        }
        console.log(string_toPrint)
    }
}
printPattern(6);
