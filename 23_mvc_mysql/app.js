const express = require('express');
const app = express();
const port = 8000;

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use('/static', express.static(__dirname + '/static'));

app.use(express.urlencoded({extended: true}));
app.use(express.json());


const indexRouter = require('./routes');
app.use('/', indexRouter);


app.get('*', (req, res) => {
    res.render('404');
})
app.listen(port, () => console.log(`server on port${port}`));