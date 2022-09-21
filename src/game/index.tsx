import p5 from 'p5'
import Background from './bg'
import Player from './player'

const sketch = (p: p5) => {
  p.preload = () => {}

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight)
    new Background(p)
    new Player(p)
  }

  p.draw = () => {}

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight, true)
  }
}

export default sketch
