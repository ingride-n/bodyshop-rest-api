require("dotenv").config();

const express = require("express");
const app = express();

app.engine("jade", require("jade").__express);
app.set("view engine", "jade");

const productsRouter = require("./controllers/products");
app.use("/api/products", productsRouter);

app.listen(3000, () => console.log('started listening'))
