const express = require('express');
const app = express();
const port = 8000;

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use('/static', express.static(__dirname + '/static'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

let comments = [{
    id: 1,
    userid: 'helloworld',
    date: '2022-10-31',
    comment: '안녕하세요^~^',
}, {
    id: 2,
    userid: 'happy',
    date: '2022-11-01',
    comment: '반가워유',
}, {
    id: 3,
    userid: 'lucky',
    date: '2022-11-02',
    comment: '오 신기하군',
}, {
    id: 4,
    userid: 'bestpart',
    date: '2022-11-02',
    comment: '첫 댓글입니당ㅎㅎㅎ',
}]

// routing part
app.get('/', (req, res) => {
    res.render('index');
})

app.get('/comments', (req, res) => {
    res.render('comments', { commentsInfos : comments});
});

app.get('/comment/:id', (req, res) => {
    let commentId = req.params.id
    if (commentId < 1 || commentId > comments.length){
        return res.render('404');
    }
    if (isNaN(commentId)){
        return res.render('404');
    }

    res.render('comment', { commentInfo : comments[commentId - 1]});
});

app.get('*', (req, res) => {
    res.render('404');
});

app.listen(port, () => {
    console.log('server on port 8000');
})