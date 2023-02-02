var express = require('express');
const User = require('../models/user')
const Task = require('../models/task')
const knex=require('../utils/db');
const async = require('hbs/lib/async');
var router = express.Router();

/* GET users listing. */
router.get('/', async function (req, res, next) {
    const user = await User.query();
    console.log(user)
    res.render('users', {user});
});

module.exports = router;
