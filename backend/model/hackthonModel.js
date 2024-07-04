const mongoose = require("mongoose");

const hackathonModel = mongoose.Schema({
  image: {
    type: String,
    required: true,
  },

  stack: {
    type: String,
    required: true,
  },

  projectLink: {
    type: String,
    required: true,
  },

  certificateLink: {
    type: String,
    required: true,
    default: null,
  },
});

const Hackathon = mongoose.model("Hackathon", hackathonModel);
module.exports = Hackathon;
