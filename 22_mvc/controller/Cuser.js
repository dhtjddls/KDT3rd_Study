const user = require('../model/User');

exports.user() = (req, res) => {
    res.render('user', { userInfo : user.userInfo()});
}