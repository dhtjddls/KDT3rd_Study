// variables
const express = require('express');
const app = express();
const PORT = 8000;


// setting
app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// routing part
app.listen(PORT, function () { 
    console.log(`http:/localhost:${PORT}`)
});

app.get('/', function (req, res) {
    res.render('dynamic', {title: '동적 폼을 배워보자'});
});

// 1. ajax
//  ajax GET
app.get('/ajax', function (req, res) {
    console.log(req.query);
    res.send(req.query);
})

//  ajax POST
app.post('/ajax', function (req, res) {
    console.log(req.body);
    res.send(req.body);
})

// 2. axios
//  axios GET
app.get('/axios', function (req, res) {
    console.log(req.query);
    res.send(req.query);
})

//  axios POST
app.post('/axios', function (req, res) {
    console.log(req.body);
    res.send(req.body);
})

// 3. fetch
//  fetch GET
app.get('/fetch', function (req, res) {
    console.log(req.query);
    res.send(req.query);
})

//  fetch POST
app.post('/fetch', function (req, res) {
    console.log(req.body);
    res.send(req.body);
})