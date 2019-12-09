$("#continue-button").on("click", function() {

    var user = {
        title: "",
        company: "",
        description: ""
    }
    
    user.title = $("#title-input").val();
    user.company = $("#company-input").val();
    user.description = $("#job-description-input").val();
  
    console.log(user.title);
    console.log(user.company);
    console.log(user.description);
    
});