const router = require("express").Router();
const playerController = require("../../controllers/playerController");

// Matches with "/api/google"
router
  .route("/")
  .get(playerController.findSkills);

module.exports = router;