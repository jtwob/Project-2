//Initialize Materialize modal
document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".modal");
  var instances = M.Modal.init(elems);
});

$(document).ready(function () {
  //Using the add button to add connection into database
  $("#addBtn").click((e) => {
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

    $.post("/api/connection", body).then(() => location.reload());
  });

  //Using update button to start a modal
  $("#cardsColumn").on("click", ".updateBtn", (e) => {
    e.preventDefault();
    $.get(`/api/connection/${e.target.getAttribute("data-connectionId")}`).then(
      (connection) => {
        console.log(connection);
        //Setup the placeholders of the modal
        $("#mName").attr("placeholder", "Full Name: " + connection.name);
        $("#mLevel").attr("placeholder", "Level: " + connection.level);
        $("#mRole").attr("placeholder", "Role: " + connection.role);
        $("#mIndustry").attr("placeholder", "Industry: " + connection.industry);
        $("#mCompany").attr("placeholder", "Company: " + connection.company);
        $("#mCost").attr("placeholder", "Role: " + connection.cost);
        $("#updateSubmitBtn").attr("data-connectionID", connection.id);
      }
    );
  });

  //Using the button within the modal, updates the connections
  //when the button is clicked and closes the modal
  $("#updateSubmitBtn").click((e) => {
    e.preventDefault();
    const body = {
      id: $("#updateSubmitBtn").attr("data-connectionId"),
    };

    if ($("#mName").val() != "") {
      body["name"] = $("#mName").val();
    }
    if ($("#mLevel").val() != "") {
      body["level"] = $("#mLevel").val();
    }
    if ($("#mRole").val() != "") {
      body["role"] = $("#mRole").val();
    }
    if ($("#mIndustry").val() != "") {
      body["industry"] = $("#mIndustry").val();
    }
    if ($("#mCompany").val() != "") {
      body["company"] = $("#mCompany").val();
    }
    if ($("#mCost").val() != "") {
      body["cost"] = $("#mCost").val();
    }

    $.ajax({ url: "/api/connection", method: "PUT", data: body }).then(() =>
      location.reload()
    );
  });

  //Using button on card to delete connection
  $("#cardsColumn").on("click", ".deleteBtn", (e) => {
    e.preventDefault();
    $.ajax({
      url: `/api/connection/${e.target.getAttribute("data-connectionId")}`,
      method: "DELETE",
    }).then(() => location.reload());
  });

  //Simulating a sale, delete a connection if confirmed purchase
  $("#cardsColumn").on("click", ".salesBtn", (e) => {
    e.preventDefault();
    $("#modalYesBtn").attr(
      "data-connectionId",
      e.target.getAttribute("data-connectionId")
    );
  });

  $("#modalYesBtn").click((e) => {
    e.preventDefault();
    $.ajax({
      url: `/api/connection/${e.target.getAttribute("data-connectionId")}`,
      method: "DELETE",
    }).then(() => location.reload());
    e.target.setAttribute("data-connectionId", "");
  });
});
