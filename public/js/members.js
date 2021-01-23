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
  });
});
