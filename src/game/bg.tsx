import p5 from 'p5'
import bgImgUrl from '../assets/images/bg.jpg'

export default class Background {
  sketch: p5

  constructor(sketch: p5) {
    this.sketch = sketch

    this.sketch.loadImage(bgImgUrl, (img) => {
      this.sketch.background(img)
    })
  }

  show = () => {
    this.sketch.loadImage(bgImgUrl, (img) => {
      this.sketch.background(img)
    })
  }
}
