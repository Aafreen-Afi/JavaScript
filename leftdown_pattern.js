function printPattern1(no_of_rows){
    for(var i=0;i<=no_of_rows;i++){
        var string_toPrint="";
        for(var j=0;j<no_of_rows-i;j++){
            string_toPrint+="*";
        }
        console.log(string_toPrint)
    }
}

printPattern1(6);
