$("#continue-button").on("click", function() {

    var user = {
        school: "",
        degree: "",
        field: ""
    }
    
    user.school = $("#school-input").val();
    user.degree = $("#degree-input").val();
    user.field = $("#field-input").val();
  
    console.log(user.school);
    console.log(user.degree);
    console.log(user.field);
    
});