//NAV BAR ON-CLICK FUNCTIONS
$(document).ready(function() {
    function getInfo () {
        $.get("/api/User", function(data) {
            let fullName = [];
            let userId = data[0].id;
            console.log(data);
            console.log(data[0].firstName);
            fullName = `${data[0].firstName} ${data[0].lastName} ID:${userId}`
            console.log(fullName);
            let schoolName = data[0].school;
            let degreeGot = data[0].degree;
            let fieldDeg = data[0].field;
            let expTitle = data[0].title;
            let expCompany = data[0].company;
            let expDescription = data[0].description;
            console.log(expTitle, expCompany, expDescription);
            $("#company-info").append(expCompany);
            $("#title-info").append(expTitle);
            $("#description-info").append(expDescription);
            $("#job-title").append(expTitle);
            $("#full-name-profile").append(fullName);
            $("#school-info").append(schoolName);
            $("#degree-info").append(degreeGot);
            $("#field-info").append(fieldDeg);
        });
    }
    getInfo();

//     function getEducation () {
//         $.get("/api/UserEDU", function(data) {
//             let schoolName = data[0].school;
//             let degreeGot = data[0].degree;
//             let fieldDeg = data[0].field;
//             console.log(schoolName, degreeGot, fieldDeg);
//             $("#school-info").append(schoolName);
//             $("#degree-info").append(degreeGot);
//             $("#field-info").append(fieldDeg);
//         });
//     }
//     getEducation();

//     function getExperience () {
//         $.get("/api/UserExp", function(data) {
//             let expTitle = data[0].title;
//             let expCompany = data[0].company;
//             let expDescription = data[0].description;
//             console.log(expTitle, expCompany, expDescription);
//             $("#company-info").append(expCompany);
//             $("#title-info").append(expTitle);
//             $("#description-info").append(expDescription);
//             $("#job-title").append(expTitle);
//         });
//     }
//     getExperience();
// })
});
//Home nav button
$("#home-button-nav").on("click", function() {
    console.log("Button is working.");
    goHome();
});
function goHome() {
    window.location.href = "../../"
}

//Profile nav button
$("#profile-button-nav").on("click", function() {
    console.log("Button is working.");
    goProfile();
});
function goProfile() {
    window.location.href = "../../profile"
}

//Invoices nav button
$("#invoices-button-nav").on("click", function() {
    console.log("Button is working.");
    goInvoices();
});
function goInvoices() {
    window.location.href = "../../invoice"
}

//Sign-up nav button
$("#signup-button").on("click", function() {
    console.log("Button is working.");
    goSignup();
});
function goSignup() {
    window.location.href = "../../create-profile"
}

//Log-in nav button
$("#login-button").on("click", function() {
    console.log("Button is working.");
    goHome();
});

//--------------------------------------------------------//

//FOOTER ON-CLICK FUNCTIONS

//Contact Me footer button

$("#contactme-button").on("click", function() {
    console.log("Button is working.");
});

//--------------------------------------------------------//

//EXPERIENCE CARD ON-CLICK FUNCTIONS

$("#company-info").on("click", function() {
    console.log("Button is working.");
});

$("#title-info").on("click", function() {
    console.log("Button is working.");
});

$("#description-info").on("click", function() {
    console.log("Button is working.");
});

//--------------------------------------------------------//

//EDUCATION CARD ON-CLICK FUNCTIONS

$("#school-info").on("click", function() {
    console.log("Button is working.");
});

$("#degree-info").on("click", function() {
    console.log("Button is working.");
});

$("#field-info").on("click", function() {
    console.log("Button is working.");
});