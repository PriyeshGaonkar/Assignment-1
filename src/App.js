import React from 'react';
import img1 from './image/image3.jpg' 
import Header from './component/header/header'
import './App.css';

function App() {
  return (
    <div className="App">
      
      <Header />
      <img src={img1} alt="height:30%" /> 
    </div>
    
  );
}

export default App;
