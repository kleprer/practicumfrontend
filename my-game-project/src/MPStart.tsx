import { useRef, useEffect } from 'react'
import './App.css'
import Webcam from 'react-webcam'
import { Holistic, POSE_LANDMARKS, POSE_CONNECTIONS } from '@mediapipe/holistic'
import { drawConnectors, drawLandmarks } from '@mediapipe/drawing_utils'
import { Camera } from '@mediapipe/camera_utils'

const MPStart = () => {
  const webcamRef = useRef<Webcam>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const holistic = new Holistic({
      locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/holistic/${file}`,
    })

    holistic.setOptions({
      modelComplexity: 1,
      smoothLandmarks: true,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5,
    })

    holistic.onResults(onResults)
    let camera: Camera | null = null

    if (webcamRef.current?.video) {
      camera = new Camera(webcamRef.current.video, {
        onFrame: async () => {
          await holistic.send({ image: webcamRef.current!.video! })
        },
      })
      camera.start()
    }
  
    return () => {
      camera?.stop()
      holistic.close()
    }
  }, [])



  const onResults = (results: any) => {
    if (!canvasRef.current) return
    const canvasCtx = canvasRef.current.getContext('2d')
    if (!canvasCtx) return
      canvasCtx.save()
      canvasCtx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)
      canvasCtx.drawImage(results.image, 0, 0, canvasRef.current.width, canvasRef.current.height)
    if (results.poseLandmarks) {
      drawConnectors(canvasCtx, results.poseLandmarks, POSE_CONNECTIONS, { color: 'white', lineWidth: 2})
      drawLandmarks(canvasCtx, results.poseLandmarks, { color: 'white', fillColor: 'rgb(255,138,0)', lineWidth: 2, radius: 3 })
    }
    canvasCtx.restore()
  }

  return (
    <div >
      <canvas className="canvas" ref={canvasRef}></canvas>
      <Webcam className="webcam" audio={false} mirrored ref={webcamRef} />
    </div>
    )
  }
export default MPStart
