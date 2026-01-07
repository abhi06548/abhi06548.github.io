import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import App from './App.jsx'
import Timeline from './Timeline.jsx'
import { initGA, trackPageView } from './analytics'
import './index.css'

// Google Analytics Measurement ID (replace with your actual GA4 ID)
const GA_MEASUREMENT_ID = 'G-M1LY91ED6S'; // TODO: Replace with your GA4 Measurement ID

// Component to track page views on route changes
function Analytics() {
  const location = useLocation();

  useEffect(() => {
    // Initialize GA on first load
    initGA(GA_MEASUREMENT_ID);
  }, []);

  useEffect(() => {
    // Track page view on route change
    trackPageView(location.pathname + location.search);
  }, [location]);

  return null;
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Analytics />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projects" element={<Timeline />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
