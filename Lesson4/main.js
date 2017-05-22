// var xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://desolate-dawn-81748.herokuapp.com/api/v1/feedbacks', false);

// console.log(xhr);
// xhr.send();
// alert(xhr.responseText.id[63].name);
 $(document).ready(function() {
            getAjaxData();
        });
        function getAjaxData() {
          var ajaxData;
            $.ajax({
              dataType: 'json',
              url: 'https://desolate-dawn-81748.herokuapp.com/api/v1/feedbacks',
              success: function(jsondata){
                ajaxData = "<div><div style='border: 1px solid; box-sizing: border-box; float: left; width: 10%;'>ID</div><div style='border: 1px solid; box-sizing: border-box; float: left; width: 40%;'>Name</div><div style='border: 1px solid; box-sizing: border-box; float: left; width: 20%;'>Age</div><div style='border: 1px solid; box-sizing: border-box; float: left; width: 30%;'>Date</div></div>";
                jsondata.map((person) => {
                    ajaxData = ajaxData + "<div><div style='border: 1px solid; box-sizing: border-box; float: left; width: 10%;'>" + person.id + "</div><div style='border: 1px solid; box-sizing: border-box; float: left; width: 40%;'>" + person.name + "</div><div style='border: 1px solid; box-sizing: border-box; float: left; width: 20%;'>" + person.age + "</div><div style='border: 1px solid; box-sizing: border-box; float: left; width: 30%;'>" + person.date + "</div></div>";
                })
                $("#tableContent").html(ajaxData);
              }
            });
        }
function postAjaxData() {
  console.log($('#age').val());
  $.ajax({
        dataType: 'json',
        data: {
          age: $('#age').val(),
          name: $('#name').val(),
          date: $('#date').val(),
        },
        method: 'post',
        url: 'https://desolate-dawn-81748.herokuapp.com/api/v1/feedbacks',
    });
    getAjaxData();
}
               