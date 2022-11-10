// TODO: 컨트롤러 코드
const User = require('../model/User');

exports.main = (req, res) => {
    res.render('index');
}

exports.getSignUp = (req, res) => {
    res.render('signup');
}

exports.postSignUp = (req, res) => {
    User.postSignUp(req.body, (result) => {
        res.send(result);
    })
}

exports.getSignIn = (req, res) => {
    res.render('signin');
}

exports.postSignIn = (req, res) => {
    console.log(req.body);
    User.postSignIn(req.body, (result) => {
        console.log(result)
            res.send(result); // true, false
    })
}

exports.postUserProfile = (req, res) => {
    User.postUserProfile(req.body.userid, (result) => {
        res.render('profile', {data : result});
    })
}

exports.postEditProfile = (req, res) => {
    User.postEditProfile(req.body, (result) => {
            res.send(result);
    })
}

exports.postDeleteProfile = (req, res) => {
    User.postDeleteProfile(req.body.id, (result) => {
        res.send(result);
    })
}