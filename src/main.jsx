import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './Components/Navbar.jsx'
import Footer from './Components/Footer.jsx'
import PreLoader from './Components/PreLoader.jsx'

import 'animate.css';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <PreLoader /> */}
    <div className="container px-4 mx-auto">
      <Navbar />
      <App />
      <Footer />
    </div>
  </StrictMode>,
)
