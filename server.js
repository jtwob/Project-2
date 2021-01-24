const express = require("express");
const exphbs = require("express-handlebars");

//Requiring npm packages for passport
const session = require("express-session");
// Requiring passport as we've configured it
const passport = require("./config/passport");

const PORT = process.env.PORT || 8080;
const db = require("./models");

//Create express app and configure middleware
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "/public"));

//We need to use sessions to keep track of our user's login status
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

//Initializing handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main",
  })
);

app.set("view engine", "handlebars");

// Requiring routes for Passport
require("./routes/html-routes.js")(app);
require("./routes/signup-login-api-routes.js")(app);
require("./routes/connection-api-routes.js")(app);
require("./routes/user-api-routes.js")(app);

db.sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
});
