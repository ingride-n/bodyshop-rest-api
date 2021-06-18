require("dotenv").config();

var MongoClient = require("mongodb").MongoClient;

var state = {
  db: null,
};

exports.connect = (done) => {
  if (state.db) return done();

  MongoClient.connect(process.env.DATABASE_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then((db) => {
      state.db = db;
      done();
    })
    .catch((err) => done(err));
};

exports.get = () => {
  return state.db;
};

exports.close = (done) => {
  if (state.db) {
    state.db.close((err, result) => {
      state.db = null;
      state.mode = null;
      done(err);
    });
  }
};
