function myFunc(){
    var txt = ""; 
    var x, myObj, tre;
    //  myObj = document.getElementById('text1').innerHTML;
    myObj = true;    /*input value here*/
    for (x in myObj) {
        txt += myObj[x];
    }
    document.getElementById("param").innerHTML = txt;
    myObj.toString();
    document.getElementById("type").innerHTML = myObj + " is " + typeof myObj + '!';
}