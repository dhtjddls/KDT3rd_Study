const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const indexRouter = require('./routes/index');


app.use('/', indexRouter);

app.get('*', (req, res) => {
  res.send('404 ERROR, Can not find URL');
})

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
