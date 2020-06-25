/*
    Form.js
    The purpose of this file is to test the form
 */
var username = document.getElementById("usernameField");
var password = document.getElementById("passwordField");
var form = document.getElementById("submitData");

form.addEventListener("submit", function(event) {
    //alert("clicked");

    if (!username.value || !password.value) {
        alert("No data inputted.")
    } else {
        var usernameData = username.value;
        var passwordData = password.value;

        console.log("User: " + usernameData + "; Password: " + passwordData);
        event.preventDefault();
    }


});


