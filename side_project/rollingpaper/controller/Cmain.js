const models = require('../models');
//  login
exports.main = (req, res) => {
    res.render('index');
}

exports.postLogin = (req, res) => {
    console.log(req.body)
    models.Login.findOne({
        where: { 
            userid: req.body.userid,
            pw: req.body.pw
        }
    }).then((result) => {
        res.send(result);
    }).catch(err => {
        console.log(err);
    })
}

// logup
exports.getLogup = (req, res) => {
    res.render('logup');
}

exports.postLogup = (req, res) => {
    console.log(req.body);
    models.Login.create({
        userid : req.body.userid,
        pw : req.body.pw,
    })
}

exports.getComment = (req, res) => {
    res.render('comment');
}