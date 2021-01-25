$(document).ready(function () {
  var settingsForm = $("form.settings");
  var nameInput = $("input#name-input");
  var emailInput = $("input#email-input");
  var passwordInput = $("input#password-input");

  settingsForm.on("submit", function (event) {
    event.preventDefault();
    var userData = {
      name:
        nameInput.val() === null
          ? nameInput.getAttribute("data-name")
          : nameInput.val().trim(),
      email:
        emailInput.val() === null
          ? emailInput.getAttribute("data-email")
          : emailInput.val().trim(),
    };

    if (passwordInput.val() !== null) {
      userData.password = passwordInput.val().trim();
    }

    updateUser(userData);
    nameInput.val("");
    emailInput.val("");
    passwordInput.val("");
  });

  function updateUser(userData) {
    $.put("/api/user", userData)
      .then(function (data) {
        console.log(data);
      })
      .catch(handleUpdateError);
  }

  function handleUpdateError(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
