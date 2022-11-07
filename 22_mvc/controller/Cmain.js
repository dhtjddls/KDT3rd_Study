const Comment = require('../model/Comment');

exports.main = (req, res) => {
    res.render('index');
}

exports.comments = (req, res) => {
    res.render('comments', { commentInfos : Comment.commentInfos });
}

exports.comment = (req, res) => {
    let commentId = req.params.id
    if (commentId < 1 || commentId > Comment.commentInfos.length){
        return res.render('404');
    }
    if (isNaN(commentId)){
        return res.render('404');
    }

    res.render('comment', { commentInfo : Comment.commentInfos[commentId - 1]});
}