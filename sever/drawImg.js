const { registerFont, createCanvas, loadImage } = require('canvas')
registerFont('fonts/tianyingzhang.ttf', { family: 'tianyingzhang' })
const canvas = createCanvas(400, 200)
const ctx = canvas.getContext('2d')

module.exports.getImg = function () {
  return new Promise((resolve) => {
// Write "Awesome!"
    ctx.font = '15px tianyingzhang'
    ctx.rotate(0.1)
    ctx.fillText('说了KDJ方式看风景Awesome!', 50, 100)

// Draw line under text
    var text = ctx.measureText('Awesome!')
    ctx.strokeStyle = 'rgba(0,0,0,0.5)'
    ctx.beginPath()
    ctx.lineTo(50, 102)
    ctx.lineTo(50 + text.width, 102)
    ctx.stroke()

// Draw cat with lime helmet
    loadImage('lime-cat.jpg').then((image) => {
      ctx.drawImage(image, 50, 0, 70, 70)

      resolve('<img src="' + canvas.toDataURL() + '" />')
    })
  })
}
