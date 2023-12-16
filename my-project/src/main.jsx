import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ContextProvider } from "./MyContext.jsx";
import { UserContextProvider } from './Usercontext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
    < UserContextProvider >

      <App />
      </ UserContextProvider> 
    </ContextProvider>
  </React.StrictMode>,
)
