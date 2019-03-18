var db = require("../models");

module.exports = function(app) {
  // Get all examples
  // Here we add an "include" property to our options in our findOne queryget
  app.get("/api/user/:id", function(req, res) {
    db.User.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Quest]
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });
  // Create a new user
  app.post("/createusers", function(req, res) {
    db.User.create(req.body)
      .then(function(dbUser) {
        // console.log(dbUser);
        res.json(dbUser);
      })
      .catch(function(err) {
        console.log(err);
      });
  });

  // Delete an user by id
  app.delete("/api/user/:id", function(req, res) {
    db.User.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });
};
// app.put("/complete", function(req, res) {
//   db.Quest.update(req.body, {
//     UserId: req.body.UserId,
//     where: {
//       Location: req.body.location
//     }
//   })
//     .then(function(dbQuest) {
//       res.json(dbQuest);
//     })
//     .catch(function(err) {
//       console.log(err);
//     });
// });
