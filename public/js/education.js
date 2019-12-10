$("#continue-button").on("click", function() {

var UserEdu = {
    school: $("#school-input").val(),
    degree: $("#degree-input").val(),
    field: $("#field-input").val()
};
  
$.ajax({
    method: "POST",
    url: "/api/UserEdu",
    data: UserEdu
  }).catch((err) => {
    if (err) throw err;
  })

});