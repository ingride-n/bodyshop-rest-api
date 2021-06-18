const express = require("express");
let router = express.Router();

const { MongoClient } = require("mongodb");
const client = new MongoClient(process.env.DATABASE_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Getting all
router.get("/", (req, res) => {
  client.connect().then((client) => {
    var db = client.db();
    db.collection('products').find()
      .toArray()
      .then((data) => res.json(data))
      .catch((e) => console.error(e));
  });
});

// Getting one
router.get("/:id", (req, res) => {
  console.log(req.params.id);
});

module.exports = router;
