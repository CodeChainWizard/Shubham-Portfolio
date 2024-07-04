const express = require("express");
const router = express.Router();
const hackthonControllers = require("../controllers/hackthonControllers");
const multer = require("multer");

// Multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Directory where files will be stored
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname); // Naming convention for uploaded files
  },
});

// Multer instance with configured storage
const upload = multer({ storage: storage });

// Route to handle hackathon upload
router.post("/", upload.single("image"), hackthonControllers.uploadHackathon);
router.get("/getAll", hackthonControllers.getAllData);

module.exports = router;
