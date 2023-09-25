var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function (req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', async function (req, res, next) {
  const db = require("../database");
  const Movies = db.Mongoose.model('movies', db.MovieSchema, 'movies');

  const data = await Movies.find({}).lean().exec()
  console.log(data)
  res.render('index', { data });
});


module.exports = router;

