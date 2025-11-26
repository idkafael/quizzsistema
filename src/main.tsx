import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { initMetaPixel, initUTMify } from './utils/tracking'
import { TRACKING_CONFIG } from './config/tracking'

// Inicializar tracking
if (TRACKING_CONFIG.META_PIXEL_ID) {
  initMetaPixel(TRACKING_CONFIG.META_PIXEL_ID)
}

if (TRACKING_CONFIG.UTMIFY_PIXEL_ID) {
  initUTMify(TRACKING_CONFIG.UTMIFY_PIXEL_ID)
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)



