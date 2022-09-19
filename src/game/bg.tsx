import p5 from 'p5'
import bgImgUrl from '../assets/images/bg.jpg'

export default class Background {
  sketch: p5

  constructor(sketch: p5) {
    this.sketch = sketch

    this.sketch.loadImage(bgImgUrl, (img) => {
      this.sketch.background(img)
      // this.sketch.image(
      //   img,
      //   0,
      //   0,
      //   this.sketch.windowWidth,
      //   this.sketch.windowHeight
      // )
    })
  }

  show = () => {
    this.sketch.loadImage(bgImgUrl, (img) => {
      this.sketch.background(img)
    })
  }
}
