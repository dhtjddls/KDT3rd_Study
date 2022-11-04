const express = require('express');
const app = express();
const PORT = 8000;

app.listen(PORT, function () {
    console.log(`http:/localhost:${PORT}`);
})

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/', function (req, res) {
    res.render('index');
})

app.get('/userProfile', function (req, res) {
    console.log(req.query);
    res.send(req.query);
})

app.get('/practice30.ejs', function (req, res) {
    res.render('practice30');
})

const myId = 'tomato';
const myPw = 'goodtomato12'

app.post('/login', function(req, res){
    if (req.body.id === myId && req.body.pw === myPw){
        res.send(true);
    }
    else {
        res.send(false);
    }
})