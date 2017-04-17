function myFunc() {
    auto = new Array(
        {firmName:"Audi" , modelName:"TT" , engDisp:2},
        {firmName:"Bentley" , modelName:"Continental" , engDisp:6},
        {firmName:"Ford" , modelName:"Mustang" , engDisp:4.6},
        {firmName:"Daewoo" , modelName:"Lanos" , engDisp:1.5}
    );
    var engine = document.getElementById("engine").value, x, asd = engine/1000;
    if (asd <= auto[3].engDisp){
        x = 3;
    }
    else if (asd <= auto[0].engDisp){
        x = 0;
    }
    else if (asd <= auto[2].engDisp){
        x = 2;
    }
    else if (asd <= auto[1].engDisp){
        x = 1;
    }
    else {
        document.getElementById('result').innerHTML = "We have not that car!";
    }

    document.getElementById('result').innerHTML = "Your car in our shop is: " + auto[x].firmName + " " + auto[x].modelName + " " + auto[x].engDisp + " littres!";
}