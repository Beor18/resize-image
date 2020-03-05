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
        callback(null, file.fieldname + '-' + file.originalname.replace(path.extname(file.originalname), '45345') + '-' + Date.now() + path.extname(file.originalname));
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

    resize('./uploads/fotoproducto-emb45345-1583439989452.png', width, height).pipe(res);
})

server.listen(4001, () => {
    console.log('Server iniciado!')
})