import p5 from 'p5'
import playerImgUrl from '../assets/images/hero.png'

export default class Player {
  sketch: p5
  player: p5.Element
  scaleX: number
  scaleY: number

  constructor(sketch: p5) {
    this.sketch = sketch
    this.scaleX = 512 / this.sketch.windowWidth
    this.scaleY = 512 / this.sketch.windowHeight
    // 加载玩家✈️
    this.player = this.sketch.createImg(playerImgUrl, 'player')
    this.player.size(186 * this.scaleX, 130 * this.scaleY)
    this.player.position(
      this.sketch.windowWidth / 2,
      this.sketch.windowHeight - 20
    )

    this.sketch.mouseMoved = () => {
      this.player.position(
        this.sketch.mouseX - this.player.elt.width / 2,
        this.sketch.mouseY - this.player.elt.height / 2
      )
    }
  }

  update = () => {}

  bullet = () => {}
}
