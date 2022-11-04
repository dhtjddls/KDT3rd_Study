const express = require('express');
const app = express();
const path = require('path');

// multer setting
const multer = require('multer');
const uploadDetail = multer({
    storage: multer.diskStorage({
        // done => callback 함수 (parameter a => error일떄, b => sucess일때)
        destination(req, res, done){
            done(null, 'uploads/');
        },
        filename(req, file, done) {
            const ext = path.extname(file.originalname); // extname => 확장자 이름 추출하는 함수
            done(null, path.basename(file.originalname, ext) + Date.now() + ext);
            //  파일이름+확장자 => 확장자 제거 + 데이트 객체 now 삽입 + 다시 확장자 더하기
        },
    }),
    limits: {fieldSize: 5 * 1024 * 1024},
});

const PORT = 8000;

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use('/uploads', express.static(__dirname + '/uploads'));
app.use(express.urlencoded({extended: true}));
app.use(express.json())

app.listen(PORT, function () {
    console.log("server on port 8000");
})

app.get('/', (req, res) => {
    res.render('index', {title : '파일 업로드를 배워보자!'});
})
//  single, fields, array (paramete => input:file's name)
// then => make req.file object 
app.post('/upload', uploadDetail.single('userfile'), (req, res) => {
    console.log(req.body);
    console.log(req.file);
    res.send('single uploaded!');
})

app.post('/upload/array', uploadDetail.array('userfiles'), (req, res) => {
    console.log(req.body);
    console.log(req.files);
    res.send('array uploaded!');
})

app.post('/upload/fields', uploadDetail.fields([{name:'userfile1'}, {name: 'userfile2'}]), (req, res) => {
    console.log(req.body);
    console.log(req.files);
    res.send('fields uploaded!');
})

app.post(
    '/dynamicFile',
    uploadDetail.single('dynamicFile'),
    function (req, res) {
    console.log(req.file);
    res.send(req.file);
    }
);

app.get('/practice31.ejs', (req, res) => {
    res.render('practice31');
})

app.post('/loginForm', uploadDetail.single('userfile'), (req, res) => {
    console.log(req.body);
    console.log(req.file);
    res.render('result31', { id: req.body.id ,pw: req.body.pw, name: req.body.name, old:req.body.old, path: req.file.path});
})
