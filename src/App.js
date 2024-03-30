import './App.css';
import { useState } from 'react';
import wizardGif from "./assests/wizaart-img.56787174.gif"

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const imgStyle = {
    width: '100px',
    height: 'auto',
    position: 'fixed',
    left: position.x,
    top: position.y,
    transition: 'transform 0.5s ease',
  };

  const handleMouseMove = (event) => {
    const newX = event.clientX;
    const newY = event.clientY;
  
    const dx = newX - position.x;
    const dy = newY - position.y;
    
    const distance = Math.sqrt(dx * dx + dy * dy);
    const speed = distance / 5000; 

    const newLeft = position.x + dx * speed;
    const newTop = position.y + dy * speed;
  
    setPosition({ x: newLeft, y: newTop });
  };
  

  return (
    <div onMouseMove={handleMouseMove} style={{ height: '100vh' }}>
    <img
      // src="https://www.wizard.financial/static/media/wizaart-img.56787174.gif"
      src={wizardGif}
      alt="wizard"
      style={imgStyle}
    />
  </div>
  );
}

export default App;
