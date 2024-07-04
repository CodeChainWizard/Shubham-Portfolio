const Skill = require("../model/skillsModel");

exports.skill = async (req, res, next) => {
  try {
    const { skill, category } = req.body;

    if (!skill || !category) {
      return res.status(400).json({ message: "Please provide a skill" });
    }

    const newSkill = await Skill.create({
      skill,
      category,
    });

    // Log the newSkill to verify
    console.log("New Skill Added:", newSkill);

    res.status(200).json({
      status: "success",
      message: "Skill Added",
      data: {
        skill: newSkill,
      },
    });
  } catch (error) {
    console.error("Skill Add Error:", error);
    res.status(500).json({
      status: "fail",
      message: "Server error",
    });
  }
};

exports.getAllSkill = async (req, res, next) => {
  try {
    const getSkill = await Skill.find();
    res.status(200).json({
      status: "success",
      data: {
        getSkill,
      },
    });
  } catch (error) {
    return res.status(400).json({
      status: "fail",
      message: "Server error",
    });
  }
};
