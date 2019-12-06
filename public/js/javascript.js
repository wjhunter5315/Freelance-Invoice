var flURL = "https://www.freelancer.com/api/projects/0.1/jobs/search/?job_names%5B%5D=";
//const stripeKey = "sk_test_4eC39HqLyjWDarjtT1zdp7dc";
//const stripeSearch = "";
//const stripeURL = "https://api.stripe.com/v1/charges/" + stripeSearch;

function callAjax(url, arr) {
  $.ajax({
    url: url,
    method: "GET"
  }).then(function(response) {
    console.log(response);
  })
};

function searchFl(search) {
  flURL = flURL.concat(search);
  callAjax(flURL);
};

function sendInfo() {

  var profile = {
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    confirm: "",
  }

  profile.firstname = $("#first-name-input").val();
  profile.lastname = $("#last-name-input").val();
  profile.username = $("#user-name-input").val();
  profile.password = $("#password-input").val();
  profile.confirm = $("#password-confirm").val();

  if (profile.password !== profile.confirm) {
    alert("Password does not match.");
    $("#first-name-input").val("");
    $("#last-name-input").val("");
    $("#user-name-input").val("");
    $("#password-input").val("");
    $("#password-confirm").val("");
  }

  else {
    console.log(profile.firstname);
    console.log(profile.lastname);
    console.log(profile.username);
    console.log(profile.password);
    console.log(profile.confirm);
  }

};

$("#continue-button").on("click", function() {
  sendInfo();
});

searchFl();
