import React, { useState } from 'react';
import './App.css';

export default function App() {

  const [city, setCity] = useState();
  
  return (
    <div className="w-full h-screen bg-black flex items-center justify-center">
      <h1 className='text-white'>Weather App - api</h1>
    </div>
  );
}


