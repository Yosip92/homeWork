function myFunc(){
    var txt = ""; 
var x, y ;
y = document.getElementById('text1').innerHTML;
for (x in y) {
    txt += y[x] + " ";
}
document.getElementById("demo").innerHTML = txt;
} 