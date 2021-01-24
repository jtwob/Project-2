$(document).ready(function () {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function (data) {
    var upperLastName = data.lastname.charAt(0).toUpperCase()+ data.lastname.substring(1);
    var upperFirstname = data.firstname.charAt(0).toUpperCase()+ data.firstname.substring(1)+" " +upperLastName;
    $(".member-name").text(upperFirstname);
  });
});
