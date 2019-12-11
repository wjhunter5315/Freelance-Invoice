$("#education-info-container").hide();
$("#experience-info-container").hide();
$("#continue-button-two").hide();
$("#create-profile-button").hide();

var User = {
  firstName: "",
  lastName: "",
  username: "",
  city: "",
  state: "",
  userEmail: "",
  userPhone: "",
  password: "",
  school: "",
  degree: "",
  field: "",
  title: "",
  company: "",
  descrption: ""
};

$("#continue-button-one").on("click", function () {

  User.firstName = $("#first-name-input").val();
  User.lastName = $("#last-name-input").val();
  User.username = $("#user-name-input").val();
  User.city = $("#city-input").val();
  User.state = $("#state-input").val();
  User.userEmail = $("#email-input").val();
  User.userPhone = $("#phone-input").val();
  User.password = $("#password-input").val();
  User.confirm = $("#password-confirm").val();

  if (User.password !== User.confirm) {
    alert("Password does not match.");
    $("#password-input").val("");
    $("#password-confirm").val("");
  }

  $("#general-info-container").hide();
  $("#continue-button-one").hide();
  $("#continue-button-two").show();
  $("#education-info-container").show();
});

$("#continue-button-two").on("click", function () {
  User.school = $("#school-input").val();
  User.degree = $("#degree-input").val();
  User.field = $("#field-input").val();

  $("#education-info-container").hide();
  $("#continue-button-two").hide();
  $("#experience-info-container").show();
  $("#create-profile-button").show();
});

$("#create-profile-button").on("click", function () {
  User.title = $("#title-input").val();
  User.company = $("#company-input").val();
  User.description = $("#job-description-input").val();
  
  $.ajax({
    method: "POST",
    url: "/api/User",
    data: User
  }).catch((err)=>{
    if (err) throw err;
  });
  
});
$("#getStarted").on("click", function() {
  goSignup();
});
function goSignup() {
    window.location.href = "../../create-profile"
}


