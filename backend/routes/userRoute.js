const express = require("express");
const userController = require("../controllers/userControllers");
const route = express.Router();

route.post("/login", userController.login);

module.exports = route;
