const express = require("express");
const userRoute = require("./routes/userRoute");
const projectRoute = require("./routes/projectRoute");
const skillRoute = require("./routes/skillsRoute");
const hackthonRoute = require("./routes/hackthonRoute");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(express.json());
app.use(cors());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api/v1/users", userRoute);
app.use("/api/v1/project", projectRoute);
app.use("/api/v1/skill", skillRoute);
app.use("/api/v1/hack", hackthonRoute);

module.exports = app;
