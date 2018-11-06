const { registerFont, createCanvas, loadImage } = require('canvas')
registerFont('fonts/tianyingzhang.ttf', { family: 'tianyingzhang' })
const width = 500
const height = 100
const canvas = createCanvas(width, height)
const ctx = canvas.getContext('2d')

module.exports.getImg = function (text = '小胖子 哈哈哈') {
  return new Promise((resolve) => {
    ctx.clearRect(0, 0, width, height)
    ctx.font = '25px tianyingzhang'
    ctx.fillText(text, 0, height/2)
    resolve('<img src="' + canvas.toDataURL() + '" />')
  })
}
