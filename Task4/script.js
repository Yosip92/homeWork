function myFunc(){
    var txt = ""; 
var x, myObj;
// y = document.getElementById('text1').innerHTML;
myObj = console;    /*input value here*/
for (x in myObj) {
    txt += myObj[x];
}
document.getElementById("param").innerHTML = txt;
document.getElementById("type").innerHTML = typeof myObj;
} 