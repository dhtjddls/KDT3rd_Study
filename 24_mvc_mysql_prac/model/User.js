// TODO: DB(mysql) 연결
const mysql = require('mysql');

const connect = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: '1234',
    database: 'kdt',
})

// TODO: 모델 코드

exports.postSignUp = (data, cb) => {
    connect.query(`INSERT INTO prac38 (name, userid, pw) VALUES ('${data.name}', '${data.userid}', '${data.pw}')`, (err, rows) => {
        if (err) {
            throw err;
        }
        cb(true);
    })
}

exports.postSignIn = (data, cb) => {
    console.log('data: ', data)
    connect.query(`SELECT * FROM prac38 WHERE userid='${data.userid}' and pw='${data.pw}' limit 1 `, (err, rows) => {
        if (err) {
            throw err;
        }
        console.log(rows);
        // 성공: [ {} ]
        // 실패: []
        if (rows.length === 1) {
            cb(true);
        }
        else {
            cb(false);
        }
    })
}

exports.postUserProfile = (userid, cb) => {
    connect.query(`SELECT * FROM prac38 WHERE userid='${userid}' limit 1`, (err, rows) => {
        if (err) {
            throw err;
        }
        console.log(rows);
        cb(rows);
    });
}

exports.postEditProfile = (data, cb) => {
    connect.query(`UPDATE prac38 SET name = '${data.name}', pw = '${data.pw}' WHERE id = '${data.id}';`, (err) => {
        if (err) {
            throw err;
        }
        cb(true);
    })
}

exports.postDeleteProfile = (id, cb) => {
    connect.query(`DELETE FROM prac38 WHERE id = '${id}';`, (err) => {
        if (err) {
            throw err;
        }
        cb(true);
    })
}