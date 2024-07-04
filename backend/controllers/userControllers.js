// Controller Code
const User = require("../model/userModel");

exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(404).json({
      status: "fail",
      message: "Please provide email and password!",
    });
  }

  try {
    const allUsers = await User.find();
    console.log("All users:", allUsers);

    const user = await User.findOne({ email });
    if (!user) {
      console.log(`No user found with email: ${email}`);
      res.status(404).json({
        status: "fail",
        message: "User Not Found",
      });
    }

    // Debugging Log
    console.log(`User found: ${JSON.stringify(user)}`);
    console.log(`Entered Password: ${password}`);
    console.log(`Stored Password: ${user.password}`);

    // Compare the plain text password with the stored password
    if (password === user.password) {
      res.status(200).json({
        status: "success",
        message: "Login Successfull",
      });
    } else {
      res.status(404).json({
        status: "fail",
        message: "Login Failed",
      });
    }
  } catch (e) {
    console.log("Login Error: ", e);
    res.status(500).json({ message: "Server error" });
  }
};
