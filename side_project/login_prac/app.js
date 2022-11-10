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

app.get('/loginS', (req, res) => {
    res.render('loginS');
})