import React, { useState } from 'react';
import './App.css';

function App() {

  const [nome, setNome] = useState();
  const [email, setEmail] = useState();
  const [telefone, setTelefone] = useState();

  function handleRegistre(){
    alert(setNome)
  }
  return (
    <div className="bg-gradient-to-bl from-[#fc4c02] from-40% to-yellow-600 w-full h-screen flex items-center justify-center">
      <div className='w-full h-[600px] max-w-sm rounded-2xl bg-white shadow-xl flex flex-col justify-center items-center gap-4'>
          <img src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/323_Strava_logo-512.png" alt="Strava Inscrição" 
          className='w-24'/>
          <form action="" className='flex flex-col gap-3'>
            <h2 className='text-black font-bold text-center'>Registre sua Conta</h2>
            <input type="text" className=' text-center w-[300px] rounded-lg border border-black p-2' 
            placeholder='Digite seu nome'
            value={nome}
            onChange={(e) => setNome(e.target.value)}
             />
            <input type="text" className='text-center w-[300px] rounded-lg border border-black p-2'
            placeholder='Digite seu e-mail' />
            <input type="text" className='text-center w-[300px] rounded-lg border border-black p-2'
            placeholder='Telefone de Contato' />
            <input type="text" className='text-center w-[300px] rounded-lg border border-black p-2'
            placeholder='Cadastre sua senha' />
            <button className='bg-[#fc4c02] p-2 rounded-lg text-white font-bold hover:bg-black duration-300' onClick={handleRegistre}>
              Registrar minha conta
            </button>
          </form>
      </div>
    </div>
  );
}

export default App;
