import './css/App.css';
import React from 'react';
import backgroundImage from './Assests/background.jpg';

export default function App() {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh'
  };

  return (
    <div className="App" style={backgroundStyle}>

        <p>
          Hello World!
        </p>
    </div>
  );
}
