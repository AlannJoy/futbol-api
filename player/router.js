const { Router } = require("express");
const Player = require("./modelPlayer");
const Team = require("../team/modelTeam");

const playerRouter = new Router();

playerRouter.get("/player", (req, res, next) => {
  Player.findAll()
    .then(players => res.json(players))
    .catch(error => next(error));
});

playerRouter.get("/player/:id", (req, res, next) => {
  const playerId = req.params.id;
  Player.findByPk(playerId, { include: [Team] }).then(player => {
    if (!player) {
      res.status(404).send("Player not found!");
    } else {
      res.json(player);
    }
  });
});

playerRouter.post("/player", (req, res, next) => {
  const playerName = req.body;
  console.log("PLAAAAAYER NAAME", playerName);
  Player.create(playerName)
    .then(player => {
      res.json(player);
    })
    .catch(error => next(error));
});

module.exports = playerRouter;
