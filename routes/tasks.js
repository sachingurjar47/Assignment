var express = require('express');
const User = require('../models/user')
const Task = require('../models/task')
const knex = require('../utils/db');
const async = require('hbs/lib/async');
var router = express.Router();

/* GET tasks listing. */
router.get('/', async function (req, res, next) {
    const user = await User.query();
    const task = await Task.query();
    console.log(user)
    console.log(task)
    res.render('tasks', { user, task });
});


module.exports = router;