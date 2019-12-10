$("#continue-button").on("click", function () {
  var user = {
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

  if (user.password !== user.confirm) {
    alert("Password does not match.");
    $("#password-input").val("");
    $("#password-confirm").val("");
  }
  else {
    $.ajax({
      method: "POST",
      url: "/api/user",
      data: user
    }).catch((err)=>{
      if (err) throw err;
    })
  }
});
