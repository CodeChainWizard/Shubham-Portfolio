const Hackathon = require("../model/hackthonModel");

exports.uploadHackathon = async (req, res, next) => {
  try {
    const { stack, projectLink, certificateLink } = req.body;
    const image = req.file ? req.file.path : null;

    // Check if required fields are provided
    if (!image || !stack || !projectLink) {
      return res.status(400).json({
        status: "fail",
        message: "Image, stack, and projectLink are required.",
      });
    }

    const newHackathon = await Hackathon.create({
      image,
      stack,
      projectLink,
      certificateLink,
    });

    res.status(200).json({
      status: "success",
      message: "Hackathon Uploaded Successfully",
      data: {
        newHackathon,
      },
    });
  } catch (error) {
    console.error("Hackathon Upload Error:", error);

    // Check if Mongoose validation error
    if (error.name === "ValidationError") {
      const errors = Object.values(error.errors).map((err) => err.message);
      return res.status(400).json({
        status: "fail",
        message: "Validation Error",
        errors,
      });
    }

    res.status(500).json({
      status: "fail",
      message: "Server Error",
    });
  }
};

exports.getAllData = async (req, res, next) => {
  try {
    const hackathon = await Hackathon.find();
    res.status(200).json({
      status: "success",
      data: {
        hackathon,
      },
    });
  } catch (error) {
    console.log("Fetch Hackathon Error data:- ", error);
    res.status(400).json({
      status: "fail",
      message: "Server Error",
    });
  }
};
