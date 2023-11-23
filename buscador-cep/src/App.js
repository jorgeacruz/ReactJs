import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

import api from './services/api';

function App() {

  // armazena dados do campo
  const [input, setInput] = useState('');
  //armazena dados a api - Object
  const [zip, setZip] = useState({})


  async function handleClick(){
   
    if(input === ""){

      toast('Preencha o campo com cep desejado');
      setInput('')
      return;

    } else {
     
      try{

        const response = await api.get(`${input}/json`);
        console.log(response.data)
        setZip(response.data);
        setInput('');
        toast('Cep Consultado com Sucesso!')

      } catch { toast('error') }

    }
    
  }

  function limpaCampo(){
    if(Object.keys(zip.length > 0 )){
      <div></div>
    }
  }

  return (
    <div className="w-full h-screen flex items-center justify-center mx-auto bg-Primary">
      <div className='w-full max-w-4xl flex flex-col items-center gap-3 '>
        <img src='https://i.pinimg.com/originals/83/23/8c/83238c8117658fe5ee2cafb479b0eb68.png' alt="Buscador de Cep" className='w-1/2' />
        <input type="text" className='bg-transparent border border-Secondary w-full max-w-sm p-2 rounded-lg text-center' placeholder='Pesquise seu Cep'
        value={input}
        onChange={ (e) => setInput(e.target.value) }/>
        <button onClick={handleClick} className='bg-black text-white p-2 w-full max-w-sm rounded-lg hover:bg-Secondary duration-300 hover:scale-95'>
          Pesquisar Cep
        </button>

        {/** Renderiza condicional  */}
        {Object.keys(zip).length > 0 && (
          <div className='w-full max-w-sm flex flex-col items-center gap-4 py-8 mt-10 bg-Secondary text-white rounded-lg'>
            <h1 className="text-2xl font-bold">{zip.cep}</h1>
            <p>{zip.logradouro}</p>
            <p>{zip.bairro} | {zip.localidade} | {zip.uf}</p> 
            
            <button onClick={limpaCampo}>
              Limpar
            </button>
          </div>
        )}
        
      </div>
      {/** Props Toastify */}
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default App;
