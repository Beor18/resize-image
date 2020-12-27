const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// mongoose.plugin(toJson);
const ImageModelSchema = new Schema({
    imageLarge: { type: String }
});

ImageModelSchema.methods.toJSON = function() {
    let obj = this.toObject();
    // delete obj._id;
    delete obj.__v
    return obj;
}

const ImageModel = mongoose.model('ImageModel', ImageModelSchema);

module.exports = {
  ImageModel
};