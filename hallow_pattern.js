function printPattern2(no_of_rows){
    var string_toPrint="";
    for(var i=no_of_rows; i>=1; i--){
        for(var j=1;j<=i;j++){
            if(i === no_of_rows || j === 1 || j === i){
                string_toPrint+="*";
            }
            else{
                string_toPrint+=" ";
            }
        }
        string_toPrint+="\n";
    }
    return string_toPrint;
}

const NOR =  6;
const pattern = printPattern2(NOR);
console.log(pattern);
