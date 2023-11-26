import React from 'react';
import './App.css';

export default function App() {
  return (
    <div className="w-full h-screen bg-gradient-to-tr from-blue-600 to-blue-950 flex items-center justify-center mx-auto">
      <div className='p-10 w-full max-w-xl h-[700px] bg-slate-400 rounded-2xl shadow-black-500 shadow-md flex flex-col items-center justify-center gap-3 '>
        <h1 className='text-black text-2xl font-bold'> Crie aqui seu QRCODE</h1>
        <p> Digite seu texto abaixo ou cole seu link e clique em gerar QRCODE</p>
        <input type='text' className='p-2 border border-black bg-transparent rounded-3xl w-full'/>
      </div>
    </div>
  );
}


