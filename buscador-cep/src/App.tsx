import React from 'react';
import './App.css';

function App() {
  return (
    <div className="w-full h-screen flex items-center justify-center mx-auto bg-Primary">
      <div className='w-full max-w-4xl flex flex-col items-center gap-3 '>
        <img src='https://i.pinimg.com/originals/83/23/8c/83238c8117658fe5ee2cafb479b0eb68.png' alt="" />
        <input type="text" className='bg-transparent border border-Secondary w-full max-w-sm p-2 rounded-lg text-center' placeholder='Pesquise seu Cep'/>
        <button className='bg-black text-white p-2 w-full max-w-sm rounded-lg hover:bg-Secondary duration-300 hover:scale-95'>
          Pesquisar Cep
        </button>

        <div className='w-full max-w-sm flex flex-col items-center gap-4 py-8 mt-10 bg-Secondary text-white rounded-lg'>
          <h1 className="text-2xl font-bold">21060-130</h1>
          <p>Rua Teixeira Franco 129</p>
          <p>Ramos - Rio de Janeiro</p>

        </div>
      </div>
    </div>
  );
}

export default App;
