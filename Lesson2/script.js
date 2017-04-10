//var Dogs = ['Dog1','Jack', 'Morris'];
//Dogs[1] // Jack
//Days['myFarDay'] = 'Friday'; //associative

var myFirstObj = {
    age: 0,
    name: "",
    myFavFilms: [],

    getMyFilms: function(){

    }
}

for (var val in myFirstObj){
    console.log(val);
}