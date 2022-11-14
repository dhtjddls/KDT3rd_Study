const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
port = 8000;

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());

const cookieConfig = {
    httpOnly : true,
    maxAge: 60 * 1000,
}

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/setCookie', (req, res) => {
    res.cookie('mycookie', 1, cookieConfig);
    res.send('set cookie');
})

app.get('/getCookie', (req, res) => {
    res.send(req.cookies);
})

app.get('/clearCookie', (req, res) => {
    res.clearCookie('mycookie', 1, cookieConfig);
    res.send('clear cookie');
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})

