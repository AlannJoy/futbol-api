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

// router.post("/team", async function(req, res, next) {
//   try {
//     const posted_name = await Team.create({ name: posted_name });
//     console.log("Created team");
//     res.send(posted_name);
//   } catch (error) {
//     next(error);
//   }
// });

module.exports = router;
