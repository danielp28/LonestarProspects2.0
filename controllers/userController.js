const db = require("../models");

module.exports = {
  basic: (req, res) => {
    console.log("hit");
  },
  // not done
  findById: (req, res) => {
    // db.User.findById(req.params.id)
    //   .then((dbModel) => res.json(dbModel))
    //   .catch((err) => res.status(422).json(err));
  },
  // not done
  create: (req, res) => {
    // db.User.create(req.body)
    //   .then((dbModel) => res.json(dbModel))
    //   .catch((err) => res.status(422).json(err));
  },
};
