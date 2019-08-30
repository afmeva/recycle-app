import React, { useState, useEffect } from 'react'
import './App.css'

import { BrowserBarcodeReader } from '@zxing/library'
import image from './code-4.jpeg'

const codeReader = new BrowserBarcodeReader()

function useVideo() {
  const [deviceId, setDeviceId] = useState('')
  const [text, setText] = useState('')

  async function onStart() {
    const { newText } = await codeReader.decodeOnceFromVideoDevice(
      deviceId,
      'video'
    )
    setText(newText)
  }

  function init() {
    return async () => {
      const [{ deviceId }] = await codeReader.getVideoInputDevices()

      setDeviceId(deviceId)
    }
  }

  useEffect(init(), [])

  return {
    text,
    onStart
  }
}

function App() {
  const { text, onStart } = useVideo()
  console.log(useVideo())

  return (
    <div className="App">
      <button onClick={onStart}>Start</button>
      <img width="100" height="100" id="img" src={image} />

      <b>{text}</b>
    </div>
  )
}

export default App
