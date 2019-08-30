import React, { useEffect } from 'react'
import './App.css'

import { BrowserBarcodeReader } from '@zxing/library'
import image from './code-4.jpeg'

const init = async () => {
  const codeReader = new BrowserBarcodeReader()
  const img = document.getElementById('img')

  console.log(img)

  try {
    const result = await codeReader.decodeFromImage(img)
    console.log(result)
  } catch (err) {
    console.error(err)
  }
}

function App() {
  useEffect(() => {
    init()
  }, [])
  return (
    <div className="App">
      <img id="img" src={image} />
    </div>
  )
}

export default App
