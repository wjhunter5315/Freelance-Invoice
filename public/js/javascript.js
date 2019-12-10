//generic profile maker

$("#continue-button").on("click", function (event) {
event.preventDefault();

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

<<<<<<< HEAD
//education button

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

//experience info

$("#upload-button").on("click", function() {
    console.log("Button is working.");
});

$("#continue-button").on("click", function() {
  var UserExp = {
      title: $("#title-input").val(),
      company: $("#company-input").val(),
      description: $("#job-description-input").val()
  }

  $.ajax({
    method: "POST",
    url: "/api/UserExp",
    data: UserExp
  }).catch((err) => {
    if (err) throw err;
  })
  });
=======
$("#getStarted").on("click", function() {
  goSignup();
});
function goSignup() {
    window.location.href = "../../create-profile"
}
>>>>>>> 263a95720464e06f40d7ef7a4e0127b27a016a7e
