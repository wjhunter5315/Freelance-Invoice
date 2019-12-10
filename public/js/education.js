$("#continue-button").on("click", function(event) {
event.preventDefault();

var UserEdu = {
    school: $("#school-input").val(),
    degree: $("#degree-input").val(),
    field: $("#field-input").val()
};
  
$.ajax({
    method: "POST",
    url: "/api/UserEdu",
    data: UserEdu
  }).then((result) => console.log(result))
  .catch((err) => {
    if (err) throw err;
  })

});