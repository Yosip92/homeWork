function myFunc(){
    var txt = ""; 
    var x, myObj, tre;
    myObj = eval(document.getElementById('text1').value);
    //myObj = document;    /*input value here*/
    for (x in myObj) {
        txt += myObj[x]+' --- '+ typeof myObj[x] +'<br/>';
    }
    document.getElementById("param").innerHTML = txt;
    myObj.toString();
    document.getElementById("type").innerHTML = myObj + " is " + typeof myObj + '!';
}