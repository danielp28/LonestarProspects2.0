


module.exports = function (app) {
  var db = require("../models")

  // app.post("/submit", function (req, res) {
  //   db.Player.create(req.body).then(function (dbPlayer) {
  //     return db.Player.findOneAndUpdate({}, { $push: { player: dbPlayer._id } }, { new: true });
  //   })
  //     .then(function (dbPlayer) {
  //       res.json(dbPlayer);
  //     })
  //     .catch(function (err) {
  //       res.json(err);
  //     })
  // })

  app.get("/players", function (req, res) {
    db.Player.find({})
      .then(function (dbPlayer) {
        res.json(dbPlayer)
      })
  })

  app.get("/players/:id", function (req, res) {
    db.Player.findOne({ _id: req.params.id })
      .populate("stats")
      .then(function (dbPlayer) {
        res.json(dbPlayer);
      })
      .catch(function (err) {
        res.json(err);
      });
  })

  // app.post("/players/:id", function(req, res){
  //   db.Position.create(req.body)
  //   .then(function(dbStats){
  //     return db.Player.findOneAndUpdate({ _id: req.params.id}, {stat: dbStats._id}, { new: true });
  //   })
  //   .then(function(dbPlayer){
  //     res.json(dbPlayer);
  //   })
  //   .catch(function(err){
  //     res.json(err);
  //   })
  // })

}