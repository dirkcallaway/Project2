var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.User.findAll({}).then(function(data) {
      var hbdobj = {
        User: data
      };
      res.render("login", hbdobj);
    });
  });

  app.post("/profile", function(req, res) {
    var username = req.body.username;
    var password = req.body.password;
    console.log(username, password);
    db.User.findOne({
      where: { UserName: username }
    }).then(function(data) {
      //Checks to see if there is a username in the DB
      if (data !== null) {
        console.log(data);
        //Checks to see if the password matches
        if (data.password === password) {
          //if password matches it pulls the users quests
          console.log("Inside func pass:" + password);
          db.Quest.findAll({
            where: { UserId: data.id }
          }).then(function(data) {
            var hbsobj = {
              quest: data
            };
            res.render("profile", hbsobj);
          });
          //if password doesn't match it renders the login page again
        } else {
          res.render("login");
        }
        //if there isn't a user match in db sends back to login page
      } else {
        res.render("login");
      }
    });
  });

  //We will need this logic later maybe?
  // app.get("/profile", function(req, res) {
  //   db.Users.findOne({
  //     // where: { UserName: "shelby@hotmail.com" },
  //     include: [db.Quest]
  //   }).then(function(data) {
  //     var hbsobj = {
  //       quest: data
  //     };
  //     console.log(data);
  //     res.render("profile", hbsobj);
  //   });
  // });

  // Load example page and pass in an example by id
  app.get("/user/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
