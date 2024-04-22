import { useState, useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FaQuoteLeft, FaQuoteRight, FaTwitterSquare, FaInstagramSquare, FaFacebookSquare } from "react-icons/fa";
import { QuoteComponent } from './Citas.jsx';

{/* npm install react-icons (único comando para instalar la librería de react)*/}



function App() {
  
  
  const [currentQuote, setCurrentQuote] = useState(QuoteComponent());
  const [pageColor, setPageColor] = useState('orange');

  const colors = [
    '#8a2be2',
    '#3d636e',
    '#862b24',
    '#746f6f',
    '#297429'
  ];

  const generateNewColor = () => {
    let newColor;
    do {
      const randomIndex = Math.floor(Math.random() * colors.length);
      newColor = colors[randomIndex];
    } while (newColor === pageColor); // Repetir si el nuevo color es igual al color actual
    setPageColor(newColor);
    setCurrentQuote(QuoteComponent()); // Genera la nueva cita
  };

  useEffect(() => {
    document.body.style.backgroundColor = pageColor; // Cambia el color de fondo del body
  }, [pageColor]);

  return (
    <div id='quote-box' >

    <div className='text'>
      <i className='comilla' style={{ color: pageColor }}>
        <FaQuoteLeft/>
      </i>
        <span id='text' style={{ color: pageColor }}> {currentQuote.cita} </span>
      <i className='comilla' style={{ color: pageColor }}>
        <FaQuoteRight/>
      </i>
      
    </div>

    <div className='author' style={{ color: pageColor }}>  
      <span id='author'> - {currentQuote.author} </span>
    </div>

    <div className='buttons'>
      <a id='tweet-quote' href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(currentQuote.cita)} - ${encodeURIComponent(currentQuote.author)}`}>
        <i className='social-media' style={{ color: pageColor }}><FaTwitterSquare/></i>
      </a>
      <button id='new-quote' onClick={() => { generateNewColor(); setCurrentQuote(QuoteComponent()); }} style={{ backgroundColor: pageColor }}>New quote</button>
    </div>
  </div>
  )
}

export default App
