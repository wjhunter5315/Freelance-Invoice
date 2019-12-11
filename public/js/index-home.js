$(document).ready(function() {
    $("#getStarted").on("click", function() {
        getStarted();
    });

    function getStarted() {
        window.location.href = "../../create-profile"
    }
})