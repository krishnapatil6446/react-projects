import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import {BrowserRouter, ReactProvider, createBrowserRouter} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Layout from './layout.jsx'

const router = createBrowserRouter([
  { path :'/', 
    element:<Layout/>,
    children:[{
      path:'',
      element:<Home/> 
    },{}]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ReactProvider/>
  </StrictMode>,
)
