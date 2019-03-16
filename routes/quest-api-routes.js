var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/quest", function(req, res) {
      var query ={};
      if(req.query.user_id){
          query.UserId = req.query.user_id;
      }
    db.Quest.findAll({
        where: query,
        include: [db.User]
    }).then(function(dbQuest) {
      res.json(dbQuest);
    });
  });

  app.get("/api/quest/:id", function(req,res){
      db.Quest.findOne({
          where:{
              id: req.params.id
          },
          include: [db.User]
      }).then(function(dbQuest){
          res.json(dbQuest);
      });
   });
  // Create a new example
  app.post("/api/quest", function(req, res) {
    db.Quest.create(req.body).then(function(dbQuest) {
      res.json(dbQuest);
    });
  });

  // Delete an example by id
  app.delete("/api/quest/:id", function(req, res) {
    db.Quest.destroy({
         where: {
             id: req.params.id
         }
        }).then(function(dbQuest) {
            res.json(dbQuest);
        });
    });
    app.put("/api/quest", function(req,res){
        db.Quest.update(
            req.body,
            {
                where:{
                    id: req.body.id
                }
            }).then(function(dbQuest){
                res.json(dbQuest);
            })
        })
    };