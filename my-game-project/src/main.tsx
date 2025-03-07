import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MPStart from './MPStart.tsx'
import Button from './Button.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div>
      <p>сосал?</p>
      <div className="vidwin">
        <MPStart />
        <div className="options">
          <Button props={"да"}/>
          <Button props={"да"}/>
        </div>
      </div>
    </div>
    
  
    
  </StrictMode>,
)
