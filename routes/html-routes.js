// Requiring path to so we can use relative routes to our HTML files
var path = require("path");
var db = require("../models");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {
  app.get("/", function (req, res) {
    res.render("signup");
  });

  app.get("/login", function (req, res) {
    res.render("login");
  });

  app.get("/logout", function (req, res) {
    req.session.destroy(function (err) {
      res.redirect("/");
    });
  });

  app.get("/settings", isAuthenticated, function (req, res) {
    const user = {
      userId: req.user.id,
    };
    res.render("settings", user);
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, function (req, res) {
    db.Connection.findAll({ raw: true }).then((data) => {
      if (data.length != 0) {
        //Add the a field for whether the connection is with the current account
        data.forEach((connection) => {
          connection["myConnection"] = req.user.id === connection.UserId;
        });
      }
      const allConnections = {
        connections: data,
        userId: req.user.id,
      };
      res.render("index", allConnections);
    });
  });
};
