import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ResultPage from './pages/result'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ResultPage />
  </StrictMode>
)
