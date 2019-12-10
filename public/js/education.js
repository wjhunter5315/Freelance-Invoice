$("#continue-button").on("click", function() {

var userEdu = {
    school: $("#school-input").val(),
    degree: $("#degree-input").val(),
    field: $("#field-input").val()
};
  
$.ajax({
    method: "POST",
    url: "/api/userEdu",
    data: userEdu
  }).catch((err) => {
    if (err) throw err;
  })

});