const mongoose = require("mongoose");

const projectModel = mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  stack: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});

const Project = mongoose.model("Project", projectModel);
module.exports = Project;
