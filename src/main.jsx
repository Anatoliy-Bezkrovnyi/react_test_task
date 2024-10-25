import { StrictMode } from 'react'
import { Provider } from "react-redux"
import { store } from "./redux/store"
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import "modern-normalize"
import './index.css'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>      
        <BrowserRouter>
          <App />
        </BrowserRouter>     
    </Provider>
  </StrictMode>,
)
