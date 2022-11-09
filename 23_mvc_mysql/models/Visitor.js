const mysql = require('mysql');

const connect = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: '1234',
    database: 'kdt',
})

// 전체 조회
exports.getVisitors = (cb) => {
    connect.query(`SELECT * FROM visitor`, (err, rows) => {
        if (err) {
            throw err;
        }
        cb(rows);
    });
};

// 추가
exports.postVisitor = (data, cb) => {
    connect.query(`INSERT INTO visitor (name, comment) VALUES ('${data.name}', '${data.comment}')`, (err, rows) => {
        if (err) {
            throw err;
        }
        cb(rows.insertId);
    })
}
// 삭제
exports.deleteVisitor = (id, cb) => {
    connect.query(`DELETE FROM visitor WHERE id = '${id}';`, (err, rows) => {
        if(err) {
            throw err;
        }
        cb(true);
    })
}


exports.getVisitor = (id, cb) => {
    connect.query(`SELECT * FROM visitor WHERE id = ${id}`, (err, rows) => {
        if(err) {
            throw err;
        }
        cb(rows[0]);
    })
}

exports.patchVisitor = (data, cb) => {
    connect.query(`UPDATE visitor SET name = '${data.name}', comment = '${data.comment}' WHERE id = ${data.id}`, (err) => {
        if(err) {
            throw err;
        }
})
    connect.query(`SELECT * FROM visitor WHERE id = ${data.id}`, (err, rows) => {
        if(err) {
            throw err;
        }
        cb(rows[0]);
    })
}