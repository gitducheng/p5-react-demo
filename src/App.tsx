import { useEffect } from 'react'
import P5 from 'p5'
import sketch from './game/index'

import './App.css'

function App() {
  useEffect(() => {
    new P5(sketch, document.querySelector('#myCanvas') as HTMLElement)
  }, [])

  return <div id='myCanvas'></div>
}

export default App
