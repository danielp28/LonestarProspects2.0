const path = require("path");
const router = require("express").Router();
const playerRoutes = require("./players");
const coachRoutes = require("./coaches");
const userRoutes = require("./users");

// Book routes
router.use("/players", playerRoutes);

// Google Routes
router.use("/coaches", coachRoutes);

router.use("/users", userRoutes);

// For anything else, render the html page
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
