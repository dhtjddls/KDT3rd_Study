const user = require('../model/user');

realUser = user.users;
let realData = []
for (i=0;i<realUser.length;i++){
    let userData = {}
    userArr = realUser[i].split('//');
    userData.id = userArr[0]; // id
    userData.pw = userArr[1]; // pw
    userData.name = userArr[2]; // name
    realData.push(userData);
}



exports.main = (req, res) => {
    res.render('index', { title: user.title })
};

exports.practice30 = (req, res) => {
    for (i=0; i< realData.length; i++){
        if (realData[i].id == req.body.userId && realData[i].pw == req.body.userPw){
            return res.send({ userInfo: realData[i], isSuccess: true });
        }
    }
    res.send({ isSuccess: false });
};