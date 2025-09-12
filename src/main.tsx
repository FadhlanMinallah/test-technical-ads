import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import "./style/globals.css"

// Import font Inter
import "@fontsource/inter/400.css"; // Regular
import "@fontsource/inter/500.css"; // Medium
import "@fontsource/inter/700.css"; // Bold

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>
)
