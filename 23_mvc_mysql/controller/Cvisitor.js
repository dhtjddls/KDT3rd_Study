const Visitor = require('../models/Visitor');


exports.main = (req, res) => {
    res.render('index');
}

exports.getVisitors = (req, res) => {
    Visitor.getVisitors((result) => {
        res.render('visitors', { data : result});
    })
}

exports.postVisitor = (req, res) => {
    Visitor.postVisitor(req.body, (result) =>{
        res.send({ 
            id: result, 
            name: req.body.name, 
            comment: req.body.comment,
        });
    })
}

exports.deleteVisitor = (req, res) => {
    Visitor.deleteVisitor(req.body.id, (result) => {
        res.send('삭제 성공~');
    });
}

exports.getVisitor = (req, res) => {
    Visitor.getVisitor(req.query.id, (result) => {
        res.send(result);
    })
}

exports.patchVisitor = (req, res) => {
    Visitor.patchVisitor(req.body, (result) => {
        res.send(result);
    })
}
