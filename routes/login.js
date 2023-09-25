var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.render('login', { title: 'Login', error: null });
});

router.post('/', async (req, res) => {

    const mail = req.body.email
    const passwd = req.body.password

    const db = require("../database");
    const Movies = db.Mongoose.model('users', db.UserSchema, 'users');

    const data = await Movies.findOne({ "uMail": mail })
    console.log(data)

    if (data && data.uPasswd == passwd) {
        res.redirect("/home")
    } else {
        
    }

});

module.exports = router;