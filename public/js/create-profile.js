$("#continue-button").on("click", function () {
  var User = {
    firstName: $("#first-name-input").val(),
    lastName: $("#last-name-input").val(),
    username: $("#user-name-input").val(),
    city: $("#city-input").val(),
    state: $("#state-input").val(),
    userEmail: $("#email-input").val(),
    userPhone: $("#phone-input").val(),
    password: $("#password-input").val(),
    confirm: $("#password-confirm").val()
  }

  if (User.password !== User.confirm) {
    alert("Password does not match.");
    $("#password-input").val("");
    $("#password-confirm").val("");
  }
  else {
    $.ajax({
      method: "POST",
      url: "/api/User",
      data: User
    }).catch((err)=>{
      if (err) throw err;
    })
  }
});
