const Project = require("../model/projectModel");

exports.uploadProject = async (req, res, next) => {
  try {
    const { stack, link } = req.body;
    const image = req.file ? req.file.path : null;

    // Check if required fields are provided
    if (!image || !stack || !link) {
      return res.status(400).json({
        status: "fail",
        message: "Both image and stack fields are required.",
      });
    }

    const newProject = await Project.create({
      image,
      stack,
      link,
    });

    res.status(200).json({
      status: "success",
      message: "Project Uploaded Successfully",
      data: {
        newProject,
      },
    });
  } catch (error) {
    console.log("Project Upload Error:", error);

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

exports.getAllProject = async (req, res, next) => {
  try {
    const project = await Project.find();
    res.status(200).json({
      status: "success",
      message: "All Project get",
      data: {
        project,
      },
    });
  } catch (error) {
    console.log("Fetch All Project error:- ", error);
    res.status(400).json({
      status: "fail",
      message: "Server Error",
    });
  }
};
