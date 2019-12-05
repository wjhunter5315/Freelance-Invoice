const jobSearch = "";
const freelancerURL = "https://www.freelancer.com/api/projects/0.1/jobs/search/?job_names%5B%5D=Web";
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

callAjax(freelancerURL);