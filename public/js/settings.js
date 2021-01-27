$(document).ready(function () {
  const settingsForm = $("form.settings");
  settingsForm.on("submit", function (event) {
    event.preventDefault();
    var nameInput = $("input#name-input");
    var emailInput = $("input#email-input");
    var passwordInput = $("input#password-input");
    var userId = $("#update-btn").attr("data-userId");

    const userData = { id: userId };

    if (nameInput.val() !== "") {
      userData.name = nameInput.val().trim();
    }
    if (emailInput.val() !== "") {
      userData.email = emailInput.val().trim();
    }
    if (passwordInput.val() !== "") {
      userData.password = passwordInput.val().trim();
    }

    updateUser(userData);
    nameInput.val("");
    emailInput.val("");
    passwordInput.val("");
  });

  function updateUser(userData) {
    $.ajax({
      url: "/api/user",
      type: "PUT",
      data: userData,
    }).catch((err) => {
      handleUpdateError(err);
    });
  }

  function handleUpdateError(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }

  $("#logout").on("click", (e) => {
    $.get("/logout");
    window.location.replace("/login");
  });
});
