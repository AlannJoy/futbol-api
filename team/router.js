const { Router } = require("express");
const Team = require("./modelTeam");
const Player = require("../player/modelPlayer");

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

router.get("/team/:id", (req, res, next) => {
  const teamId = req.params.id;
  console.log(teamId);
  Team.findByPk(teamId).then(team => {
    if (!team) {
      res.status(404).send("Team not found!");
    } else {
      res.json(team);
    }
  });
});

router.post("/team", (req, res, next) => {
  const teamName = req.body;
  console.log("REQUEST BODY TO CREATE TEAM", teamName);
  Team.create(teamName)
    .then(team => {
      console.log("Created the team!");
      res.json(team);
    })
    .catch(error => next(error));
});

module.exports = router;
