// TODO: 컨트롤러 코드
const models = require('../models');

exports.main = (req, res) => {
    res.render('index');
}

exports.getSignUp = (req, res) => {
    res.render('signup');
}

exports.postSignUp = (req, res) => {
    models.User.create({
        name: req.body.name,
        userid: req.body.userid,
        pw: req.body.pw,
    }).then((result) => {
        res.send(result);
    })
    .catch(err => {
        console.log(err);
    })
}
exports.getSignIn = (req, res) => {
    res.render('signin');
}

exports.postSignIn = (req, res) => {
    models.User.findOne({
        where: { 
            userid: req.body.userid,
            pw: req.body.pw
        },
    }).then((result) => {
        res.send(result);
    }).catch(err => {
        console.log(err);
    })
}

exports.postUserProfile = (req, res) => {
    models.User.findOne({
        where: {
            userid: req.body.userid
        }
    }).then((result) => {
        console.log("result:", result);
        res.render('profile', {data : result});
    }).catch(err => {
        console.log(err);
    })
}

exports.postEditProfile = (req, res) => {
    models.User.update(
        {
        name: req.body.name,
        pw: req.body.pw,
        },
        {
        where:{
            id: req.body.id,
        }
        }
    ).then((result) => {
        res.send(result);
    }).catch(err => {
        console.log(err);
    })
}

exports.postDeleteProfile = (req, res) => {
    models.User.destroy({
        where: {
            id: req.body.id
        }
    }).then((result) => {
        res.send(true);
    }).catch(err => {
        console.log(err);
    })
}