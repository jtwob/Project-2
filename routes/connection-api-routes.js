/**
 * db is required to link the routes to the connection model.
 */
var db = require("../models");

module.exports = function (app) {
  app.get("/api/connection", (req, res) => {
    db.Connection.findAll().then((dbConnection) => res.json(dbConnection));
  });

  app.get("/api/connection/:id", (req, res) => {
    db.Connection.findOne({
      where: {
        id: req.params.id,
      },
    }).then((dbConnection) => res.json(dbConnection));
  });

  app.post("/api/connection", (req, res) => {
    db.Connection.create(req.body).then((dbConnection) =>
      res.json(dbConnection)
    );
  });

  app.put("/api/connection", (req, res) => {
    db.Connection.update(req.body, {
      where: {
        id: req.body.id,
      },
    }).then((dbConnection) => res.json(dbConnection));
  });

  app.delete("/api/connection/:id", (req, res) => {
    db.Connection.destroy({
      where: {
        id: req.params.id,
      },
    }).then((dbConnection) => res.json(dbConnection));
  });
};
