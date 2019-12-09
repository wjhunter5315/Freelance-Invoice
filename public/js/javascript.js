// var flURL = "https://www.freelancer.com/api/projects/0.1/jobs/search/?job_names%5B%5D=";
//const stripeKey = "sk_test_4eC39HqLyjWDarjtT1zdp7dc";
//const stripeSearch = "";
//const stripeURL = "https://api.stripe.com/v1/charges/" + stripeSearch;

// function callAjax(url, arr) {
//   $.ajax({
//     url: url,
//     method: "GET"
//   }).then(function(response) {
//     console.log(response);
//   })
// };

// function searchFl(search) {
//   flURL = flURL.concat(search);
//   callAjax(flURL);
// };


$("#continue-button").on("click", function() {

  var user = {
    firstName: $("#first-name-input").val(),
    lastName: $("#last-name-input").val(),
    username: $("#user-name-input").val(),
    password: $("#password-input").val(),
    confirm: $("#password-confirm").val()
  }
  
  if (user.password !== user.confirm) {
    alert("Password does not match.");
    $("#password-input").val("");
    $("#password-confirm").val("");
  }
  else {
    console.log(user);
    alert("Added username!");
  }
});


//     console.log(data);
//       );
//   }

// searchFl();