$(document).ready(function () {
  $(".connectBtn").click((e) => {
    e.preventDefault();
    const id = e.target.getAttribute("data-userId");
    const name = $("#name").val().trim();
    const level = $("#level").val().trim();
    const role = $("#role").val().trim();
    const industry = $("#industry").val().trim();
    const company = $("#company").val().trim();
    const cost = $("#cost").val().trim();

    const body = {
      name: name,
      level: level,
      role: role,
      industry: industry,
      company: company,
      cost: cost,
      UserId: id,
    };

    $.post("/api/connection", body);

    // $.ajax({
    //   method: "POST",
    //   url: "/api/connection",
    // });
  });
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  // $.get("/api/user_data").then(function (data) {
  //   $(".member-name").text(data.name);
  // });
});
