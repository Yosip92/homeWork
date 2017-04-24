function myFunc(){
    function Addition(num1, num2) {
        function result() {
            return num1 + num2;
        }
        this.adding123 = function() {
            alert(result());
        }
    }

    var adding = new Addition("number1", "number2");
    var number1, number2;
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;

    adding.adding123();
}