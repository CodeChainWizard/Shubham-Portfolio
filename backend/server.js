const app = require("./app");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const db = process.env.DB_NAME.replace("<password>", process.env.DB_PASSWORD);

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connection successful"))
  .catch((e) => console.log(`Error to connect Database: ${e}}`));

const port = 8082;
app.listen(port, () => {
  console.log(`Server running on:- ${port}`);
});
