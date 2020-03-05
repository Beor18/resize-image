const fs = require('fs')
const sharp = require('sharp')

module.exports = function resize(path, width, height) {
  const readStream = fs.createReadStream(path)
  let transform = sharp()

  if (width || height) {
    transform = transform.resize(width, height, {fit: sharp.fit.cover, position: 'right top'})
  }

  return readStream.pipe(transform)
}