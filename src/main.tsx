import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Add error handling for deployment debugging
try {
  const container = document.getElementById("root");
  if (!container) {
    throw new Error("Root element not found");
  }
  const root = createRoot(container);
  root.render(<App />);
} catch (error) {
  console.error("App failed to mount:", error);
  // Fallback display
  document.body.innerHTML = `<div style="padding: 20px; font-family: Arial;">
    <h1>Loading Error</h1>
    <p>Error: ${error.message}</p>
    <p>Please refresh the page or contact support.</p>
  </div>`;
}
