const { ImageModel } = require("../models/Image.model");
const resize = require("../resize");

async function postResize(req, res) {
  try {
    const imageToSave = new ImageModel({
      imageLarge: req.file.filename,
    });

    const saved = await imageToSave.save();

    return res.json({
      status: 200,
      message: "Imagen cargada correctamente!",
    });
  } catch (error) {
    return next(error);
  }
}

async function getResize(req, res, next) {
  try {
    const getImages = await ImageModel.find({}).exec();

    return res.json({
      status: 200,
      images: getImages,
    });
  } catch (error) {
    next(error);
  }
}

async function getResizeById(req, res) {
  try {
    const getImages = await ImageModel.findById(req.params.id).exec();

    const widthString = req.query.w;
    const heightString = req.query.h;

    let width, height;

    if (widthString) {
      width = parseInt(widthString);
    }

    if (heightString) {
      height = parseInt(heightString);
    }

    resize("./public/uploads/" + getImages.imageLarge, width, height).pipe(res);
  } catch (error) {
    return res.json({
      message: "id not found",
    });
  }
}

module.exports = {
  getResize,
  getResizeById,
  postResize,
};
