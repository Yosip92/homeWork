function myFunc(){
    var txt = ""; 
var x, myObj, tre;
//  myObj = document.getElementById('text1').innerHTML;
myObj = history;    /*input value here*/
for (x in myObj) {
    txt += myObj[x];
}
document.getElementById("param").innerHTML = txt;
document.getElementById("type").innerHTML = "This is " + typeof myObj + '!';
}