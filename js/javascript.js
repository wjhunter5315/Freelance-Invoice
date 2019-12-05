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

  $()
  
//var profile = new Profile;

  var profile = {
    firstname: "",
    lastname: "",
    location: "",
    password: "",
    school: "",
    degree: "",
    study: "",
    title: "",
    company: "",
    jobdesc: ""
  }



};

$(".continue-button").on("click", function() {
  sendInfo();
  console.log("Working.");
});

searchFl();
