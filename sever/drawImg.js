const { registerFont, createCanvas, loadImage } = require('canvas')
registerFont('./fonts/tianyingzhang.ttf', { family: 'tianyingzhang' })
const width = 375
const height = 100

module.exports.getImg = function (text = '小胖子 哈哈哈', option = {}) {
  return new Promise((resolve) => {
    const lHeight = ~~option.height || height
    const lWidth = ~~option.width || width
    const canvas = createCanvas(lWidth, lHeight)
    const ctx = canvas.getContext('2d')
    ctx.clearRect(0, 0, lWidth, lHeight)
    ctx.font = (option.fontSize || 25) + 'px tianyingzhang'
    ctx.fillText(text, 0, lHeight/2)
    resolve({
      src: canvas.toDataURL(),
    })
  })
}
