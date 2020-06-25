const express = require('express');
const resize = require('./resize');
const multer = require('multer');
const path = require('path');

const server = express();

const storage = multer.diskStorage({
    destination: (req, file, callback)  => {
        callback(null, './uploads');
    },
    filename: (req, file, callback) => {
        callback(null, file.fieldname + '-' + Math.floor(Math.random() * 1000) + '-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

server.post('/api/resize', upload.single('fotoproducto'), (req, res) => {
    res.send('subido correctamente!')
})

server.get('/api/resize', (req, res) => {
    const widthString = req.query.w;
    const heightString = req.query.h;

    let width, height

    if(widthString) {
        width = parseInt(widthString)
    }

    if(heightString) {
        height = parseInt(heightString)
    }

    resize('./uploads/fotoproducto-689-1593099523082.jpg', width, height).pipe(res);
})

server.listen(4001, () => {
    console.log('Server iniciado!')
})