const express = require("express");
const skillController = require("../controllers/skillsController");
const route = express.Router();

route.post("/", skillController.skill);
route.get("/allSkill", skillController.getAllSkill);

module.exports = route;
