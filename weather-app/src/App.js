import React from 'react';
import './App.css';

import clouds from './assets/video/clouds.mp4'

export default function App() {

  
  
  return (
    <div className="w-full h-screen bg-yellow-900 flex flex-col items-center justify-center gap-5">
     <div className='w-full max-w-7xl overlay border border-white rounded-xl '>
        <video src={clouds} autoPlay loop muted />
     </div>
    </div>
  );
}


