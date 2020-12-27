const express = require('express');
const router = express.Router();
const resizeRoute = require('./resize.controller')

const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, callback)  => {
        callback(null, './public/uploads');
    },
    filename: (req, file, callback) => {
        callback(null, file.fieldname + '-' + Math.floor(Math.random() * 1000) + '-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

router.route('/resize')
    .get(resizeRoute.getResize)
    .post(upload.single('fotoproducto'), resizeRoute.postResize)

router.route('/:id/resize')
    .get(resizeRoute.getResizeById)

module.exports = router;