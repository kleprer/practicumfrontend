import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MPStart from './MPStart.tsx'
import Button from './Button.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div>
      <div >
        <MPStart />
      </div>
    </div>
    
  
    
  </StrictMode>,
)
