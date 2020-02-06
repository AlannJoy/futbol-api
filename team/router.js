const { Router } = require("express");
const Team = require("./model");

const router = new Router();

router.get("/team", async function(req, res, next) {
  try {
    const team = await Team.findAll();
    res.send(team);
    console.log("done");
  } catch (error) {
    next(error);
  }
});

module.exports = router;
