const mongoose = require("mongoose");

const skillModel = mongoose.Schema({
  skill: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

const Skill = mongoose.model("Skill", skillModel);
module.exports = Skill;
