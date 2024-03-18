import './css/App.css';
import React from 'react';
import backgroundImage from './Assests/background.jpg';
import MainCont from './Components/MainCont';

export default function App() {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh'
  };

  return (
    <div className="App" style={backgroundStyle}>
      <MainCont />
    </div>
  );
}
