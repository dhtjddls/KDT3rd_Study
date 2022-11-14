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
    res.render('index', {popup : req.cookies.popup});
})

app.post('/postSetCookie', (req, res) => {
    res.cookie('popup', 'hidden', cookieConfig);
    res.send('쿠키들어갔다~');
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})

