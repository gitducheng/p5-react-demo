import p5 from 'p5'
import Background from './bg'

const sketch = (p: p5) => {
  p.preload = () => {}

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight)
  }

  p.draw = () => {
    new Background(p)
  }

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight, true)
  }
}

export default sketch
