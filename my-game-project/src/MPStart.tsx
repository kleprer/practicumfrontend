import { useRef, useEffect, useState } from 'react'
import './App.css'
import Webcam from 'react-webcam'
import { Holistic, POSE_LANDMARKS, HAND_CONNECTIONS, POSE_CONNECTIONS } from '@mediapipe/holistic'
import { drawConnectors, drawLandmarks } from '@mediapipe/drawing_utils'
import { Camera } from '@mediapipe/camera_utils'
import Button from './Button'

const MPStart = () => {
  const webcamRef = useRef<Webcam>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [leftHandCoords, setLeftHandCoords] = useState([]);
  const [rightHandCoords, setRightHandCoords] = useState([]);
  const [regime, setRegime] = useState("");

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
      const leftHandLandmarks = results.leftHandLandmarks;
      const rightHandLandmarks = results.rightHandLandmarks;
    if (results.poseLandmarks) {
        // Drawing hand landmarks
        
      drawConnectors(canvasCtx, results.leftHandLandmarks, HAND_CONNECTIONS, {color: 'white', lineWidth: 2});
      drawLandmarks(canvasCtx, results.leftHandLandmarks, {color: 'white', fillColor: 'rgb(255,138,0)', lineWidth: 2, radius: 3});
      drawConnectors(canvasCtx, results.rightHandLandmarks, HAND_CONNECTIONS,{color: 'white', lineWidth: 2});
      drawLandmarks(canvasCtx, results.rightHandLandmarks, {color: 'white', fillColor: 'rgb(255,138,0)', lineWidth: 2, radius: 3});
      
      
      if (leftHandLandmarks)  {
        setLeftHandCoords(leftHandLandmarks.map((landmark: any) => ({
        x: landmark.x,
        y: landmark.y
      })));
      console.log('Left Hand Coordinates:', leftHandCoords);
      }
      
      if (rightHandLandmarks)  {
        setRightHandCoords(rightHandLandmarks.map((landmark: any) => ({
        x: landmark.x,
        y: landmark.y
      })));
      console.log('Right Hand Coordinates:', rightHandCoords);
      }
      // checking coords for lefthand choosing a regime
      if (regime == '' && rightHandCoords && !leftHandCoords) {
        if (rightHandCoords[8]['x'] <= 0.95 && 0.65 <= rightHandCoords[8]['x']
              && rightHandCoords[8]['y'] <= 0.7 && 0.65 <= rightHandCoords[8]['y']
          )
          {
            setRegime('Обучение');
          }
          

        if (rightHandCoords[8]['x'] <= 0.35 && 0.05 <= rightHandCoords[8]['x']
          && rightHandCoords[8]['y'] <= 0.7 && 0.65 <= rightHandCoords[8]['y']
          ) {
            setRegime('Тестирование');
          }
    }
      
      // checking coords for righthand choosing a regime
      if (regime == '' && leftHandCoords && !rightHandCoords) {
        if (leftHandCoords[8]['x'] <= 0.95 && 0.65 <= leftHandCoords[8]['x']
            && leftHandCoords[8]['y'] <= 0.7 && 0.65 <= leftHandCoords[8]['y']
        ) {
            setRegime('Обучение');
        }
        

        if (
          leftHandCoords[8]['x'] <= 0.35 && 0.05 <= leftHandCoords[8]['x']
              && leftHandCoords[8]['y'] <= 0.7 && 0.65 <= leftHandCoords[8]['y']
        ) {
            setRegime('Тестирование');
        }
      }

      console.log(regime);
    
    }
    
    
    
    canvasCtx.restore()
  }


  

  return (
    <div className="vidwin">
      <div >
        <canvas className="canvas" ref={canvasRef}></canvas>
        <Webcam className="webcam" audio={false} mirrored ref={webcamRef} />
      </div>
      {
        regime == '' &&
          <div className="options">
            <Button props={"Обучение"}/>
            <Button props={"Тестирование"}/>
        </div>
        
      }
      {
        regime == 'Обучение' &&
        <p>Обучение</p>
      }
      {
        regime == 'Тестирование' &&
        <p>Тестирование</p>
      }
      
    
    </div>
    
    )
  }
export default MPStart
