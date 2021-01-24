/**
 * db is required to link the routes to the connection model.
 */
var db = require("../models");

module.exports = function (app) {
  /**
   * This is the get all route, using findAll() with no object passed.
   */
  app.get("/api/connection", (req, res) => {
    db.Connection.findAll({}).then((dbConnection) => res.json(dbConnection));
  });

  /**
   * This is the route to find a specific connection post.
   * The route is simply used like "/api/connection/x" where x is the connection id.
   */
  app.get("/api/connection/:id", (req, res) => {
    db.Connection.findOne({
      where: {
        id: req.params.id,
      },
    }).then((dbConnection) => res.json(dbConnection));
  });

  /**
   * This is the route for creating a new connection post.
   * The req.body will require:
   *    name, level, role, industry, compsny, cost(can be null), UserId
   */
  app.post("/api/connection", (req, res) => {
    db.Connection.create(req.body).then((dbConnection) =>
      res.json(dbConnection)
    );
  });

  /**
   * This is the route to update connection posts.
   * The req.body will require:
   *    id, + any updated fields
   */
  app.put("/api/connection", (req, res) => {
    db.Connection.update(req.body, {
      where: {
        id: req.body.id,
      },
    }).then((dbConnection) => res.json(dbConnection));
  });

  /**
   * This is the route to delete posts.
   * The route is simply used like "/api/connection/x" where x is the connection id.
   */
  app.delete("/api/connection/:id", (req, res) => {
    db.Connection.destroy({
      where: {
        id: req.params.id,
      },
    }).then((dbConnection) => res.json(dbConnection));
  });
};
