const express = require("express");
const router = express.Router();
const uploadProject = require("../controllers/projectConterollers"); // Adjust the path to your controller

// Configure Multer for file upload
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Directory where files will be stored
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname); // Naming convention for uploaded files
  },
});
const upload = multer({ storage: storage });

// Route to handle project upload
router.post("/", upload.single("image"), uploadProject.uploadProject);
router.get("/getAll", uploadProject.getAllProject);

module.exports = router;
