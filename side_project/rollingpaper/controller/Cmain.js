const models = require('../models/Login');

exports.main = (req, res) => {
    res.render('index');
}

exports.getLogup = (req, res) => {
    res.render('logup');
}

exports.getLogin = (req, res) => {
    console.log(req.body);
}