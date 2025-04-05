import React from 'react'
import { createRoot } from 'react-dom/client'
import App from "./App.jsx"
import {Provider} from "./components/ui/provider.jsx"
import { BrowserRouter } from 'react-router-dom'
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider>
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)