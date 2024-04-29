import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import IndukProps from './pages/Induk-Props.jsx'
import LandingPage from './pages/LandingPages.jsx'
import Navbar from './componen/Navbar.jsx'
import Sidebar from './componen/Sidebar.jsx'
import Layout from './componen/Layout.jsx'
import Home from './pages/Home.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <LandingPage /> */}
    {/* <Navbar /> */}
    {/* <Sidebar /> */}
    {/* <Layout /> */}
    {/* <Home /> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
