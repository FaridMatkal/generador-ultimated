import { useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FaQuoteLeft, FaQuoteRight, FaTwitterSquare, FaInstagramSquare, FaFacebookSquare } from "react-icons/fa";
import { QuoteComponent } from './Citas.jsx';

{/* npm install react-icons (único comando para instalar la librería de react)*/}

function App() {
  
  const quoteGenerator = QuoteComponent();

  return (
    <div id='quote-box'>

    <div className='text'>
      <i className='comilla'>
        <FaQuoteLeft/>
      </i>
        <span id='text'> </span>
      <i className='comilla'>
        <FaQuoteRight/>
      </i>
      
    </div>

    <div className='author'>
      <span id='author'>  </span>
    </div>

    <div className='buttons'>
      <a id='tweet-quote' href="">
        <i className='social-media'><FaTwitterSquare/></i>
      </a>
      <a href="">
        <i className='social-media'><FaInstagramSquare/></i>
      </a>
      <a href="">
        <i className='social-media'><FaFacebookSquare/></i>
      </a>
      <button id='new-quote'>New quote</button>
    </div>
  </div>
  )
}

export default App
