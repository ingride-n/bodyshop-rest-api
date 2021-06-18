require("dotenv").config();

const express = require("express");
const app = express();

var db = require("./db");

app.engine("jade", require("jade").__express);
app.set("view engine", "jade");

const productsRouter = require("./controllers/products");
app.use("/api/products", productsRouter);

// Connect to Mongo on start
db.connect((err) => {
  if (err) {
    console.log("Unable to connect to mongo");
    process.exit(1);
  } else {
    app.listen(3000, function () {
      console.log("Listening on port 3000...");
    });
  }
});
