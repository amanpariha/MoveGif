import './App.css';
import { useState } from 'react';
import wizardGif from "./assests/wizaart-img.56787174.gif"

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [transitionEnabled, setTransitionEnabled] = useState(false);

  const imgStyle = {
    width: '100px',
    height: 'auto',
    position: 'fixed',
    left: position.x,
    top: position.y,
    transition: transitionEnabled ? 'left 1.5s ease, top 1.5s ease' : 'none',
  };

  const handleClick = (event) => {
    const newX = event.clientX;
    const newY = event.clientY;

    setPosition({ x: newX, y: newY });
    setTransitionEnabled(true);

    setTimeout(() => {
      setTransitionEnabled(false);
    }, 1500); 
  };

  return (
    <div onClick={handleClick} style={{ height: '100vh', cursor: 'pointer' }}>
      <img
        src={wizardGif}
        alt="wizard"
        style={imgStyle}
      />
    </div>
  );
}

export default App;
