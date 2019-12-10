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
