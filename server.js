const express = require('express');
const path = require("path");

// Sets up Express App
const app = express();
const PORT = process.env.PORT || 5000;

// Require models for syncing
const db = require('./models')

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

// Routes
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

// Sync sequelize models and start Express App
db.sequelize.sync({ force: true }).then(function() {
  require(path.join(__dirname, "./seeders/seeds.js"))(db);
  app.listen(PORT, function() {
    console.log(`App listening on PORT ${PORT}`);
  });
});

module.exports = app;
