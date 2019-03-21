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
    db.User.findOne({
      where: { UserName: username }
    }).then(function(data) {
      //Checks to see if there is a username in the DB
      if (data !== null) {
        //Checks to see if the password matches
        if (data.password === password) {
          //if password matches it pulls the users quests
          // var userLocation = data[0].User.dataValues.location;
          var userID = data.id;
          db.Quest.findAll({
            include: [db.User],
            where: { UserId: data.id }
          }).then(function(data) {
            var userLocation = data[0].dataValues.User.Location;
            db.Quest.findAll({
              where: { location: userLocation, completed: true }
            }).then(function(data) {
              if (data.length === 6) {
                db.User.update(
                  {
                    questComplete: true
                  },
                  {
                    where: {
                      id: userID
                    }
                  }
                );
                console.log("User completed the quests!" + data.length);
              }
            });
            var mapLocation = data[0].dataValues.User.dataValues.Location;
            var location = false;
            if (mapLocation === "Fort Collins") {
              location = true;
            }
            var completedQuest =
              data[0].dataValues.User.dataValues.questComplete;
            var hbsobj = {
              quest: data,
              complete: completedQuest,
              location: location
            };
            console.log(data[0].dataValues.User.dataValues.questComplete);
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

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
