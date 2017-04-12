function myFunc() {
    var audi  = {firmName:"Audi" , modelName:"TT" , engDisp:2},
        bentley = {firmName:"Bentley" , modelName:"Continental" , engDisp:6},
        ford = {firmName:"Ford" , "modelName":"Mustang" , "engDisp":4.6},
        daewoo = {firmName:"Daewoo" , modelName:"Lanos" , engDisp:1.5},
        tesla = {firmName:"Tesla" , modelName:"Model S" , engDisp:0 , electMot:270},
        auto = {audi, bentley, ford, daewoo, tesla};
    // var auto = [ ["firmName":"Audi" , "modelName":"TT" , "engDisp":2],["firmName":"Bentley" , "modelName":"Continental" , "engDisp":6],["firmName":"Ford" , "modelName":"Mustang" , "engDisp":4.6],["firmName":"Daewoo" , "modelName":"Lanos" , "engDisp":1.5], ["firmName":"Tesla" , "modelName":"Model S" , "engDisp":0 , "electMot":270] ];
    var engDisp = x;
    x = document.getElementById("engine").innerHTML;

    if (x == 2){
        document.getElementById("result").innerHTML = text;
        text = ("firmName" + "modelName" + "engDisp");
    }
    // var little = tesla.slice(0,3);
    // console.log(little);
    //if (x <= auto.audi["engDisp"]){
    //     document.getElementById("result").innerHTML = auto.audi["modelName"] + auto.audi["firmName"];
    // }
    // else if(x) {
    //     document.getElementById("result").innerHTML = "null";
    //}
    // if (x <= 6){
    //     document.getElementById("result").innerHTML = auto.bentley["modelName"] + auto.bentley["firmName"];
    // };
    
    // var x = document.getElementById("engine").innerHTML;
    //if (x <= engDisp) {
      //   text = auto;
    //};
    // console.log(auto.length);
    // document.getElementById("result").innerHTML =
    // auto["firmName", "modelName", "electMot"] + x + " litres ";
    //document.getElementById("result").innerHTML = text;
}()