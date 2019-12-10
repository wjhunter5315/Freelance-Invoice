



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
