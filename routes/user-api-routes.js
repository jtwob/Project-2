var db = require("../models");
const bcrypt = require("bcryptjs");

module.exports = function (app) {
  /**
   * This is the get all route, using findAll() with no object passed.
   */
  app.get("/api/user", (req, res) => {
    db.User.findAll({}).then((dbUser) => res.json(dbUser));
  });

  /**
   * This is the route to find a specific user.
   * The route is simply used like "/api/user/x" where x is the user id.
   */
  app.get("/api/user/:id", (req, res) => {
    db.User.findOne({
      where: {
        id: req.params.id,
      },
    }).then((dbUser) => res.json(dbUser));
  });

  /**
   * This is the route for creating a new user.
   * The req.body will require:
   *    name, email, password
   */
  app.post("/api/user", (req, res) => {
    db.User.create(req.body).then((dbUser) => res.json(dbUser));
  });

  /**
   * This is the route to update user info.
   * The req.body will require:
   *    id, + any updated fields
   */
  app.put("/api/user", (req, res) => {
    if (req.body.password !== undefined) {
      req.body.password = bcrypt.hashSync(
        req.body.password,
        bcrypt.genSaltSync(10),
        null
      );
    }
    db.User.update(req.body, {
      where: {
        id: req.body.id,
      },
    }).then((dbUser) => res.json(dbUser));
  });

  /**
   * This is the route to delete users.
   * The route is simply used like "/api/user/x" where x is the user id.
   */
  app.delete("/api/user/:id", (req, res) => {
    db.User.destroy({
      where: {
        id: req.params.id,
      },
    }).then((dbUser) => res.json(dbUser));
  });
};
