// this file does nothing, don't waste time here
// TODO: rip out, all routes hit controllers!


module.exports = function (app) {
  var db = require("../models");

  // not done
  app.get("/", function (req, res) {
    console.log("hit2");
    // db.Player.find({}).then(function (dbPlayer) {
    //   res.json(dbPlayer);
    // });
    // get user from body
    // check if user is in user table
    // if it is, do nothing
    // if it isn't, add to table with isCoach false
  });

  // not done
  app.get("/:id", function (req, res) {
    // db.Position.create(req.body)
    //   .then(function (dbStats) {
    //     return db.Player.findOneAndUpdate(
    //       { _id: req.params.id },
    //       { stat: dbStats._id },
    //       { new: true }
    //     );
    //   })
    //   .then(function (dbPlayer) {
    //     res.json(dbPlayer);
    //   })
    //   .catch(function (err) {
    //     res.json(err);
    //   });
    // get user from body?
    // check if user is coach
    // return (in body?), true if are false if not
    // bug where they can spoof?
  });
};
