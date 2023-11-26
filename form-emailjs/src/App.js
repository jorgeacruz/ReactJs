import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [senha, setSenha] = useState('')

  function sendEmail(e){
    e.preventDefault();
    if(name === '' || email === '' || telefone === ''){
      alert('Preencha todos os campos')
    } else {
      alert('ok')
    }
  }

  return (
    <div className="bg-gradient-to-bl from-[#fc4c02] from-40% to-yellow-600 w-full h-screen flex items-center justify-center">
       <div className='w-full h-[600px] max-w-sm rounded-2xl bg-white shadow-xl'>

      <form onSubmit={sendEmail} className='h-[550px] flex flex-col justify-center items-center gap-3 p-10'>

      <img src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/323_Strava_logo-512.png" alt="Strava Inscrição" 
          className='w-24'/>
        <input 
          className='w-full text-center rounded-lg border border-black p-2'
          type="text"
          placeholder="Digite seu nome"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        
        <input 
          className='w-full text-center rounded-lg border border-black p-2'
          type="text"
          placeholder="Digite seu email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input 
          className='w-full text-center  rounded-lg border border-black p-2'
          type="text"
          placeholder="Deixe seu contato"
          onChange={(e) => setTelefone(e.target.value)}
          value={telefone}
        />
        <input 
          className='w-full text-center rounded-lg border border-black p-2'
          type="text"
          placeholder="Cadastre sua senha"
          
          onChange={(e) => setSenha(e.target.value)}
          value={senha}
        />

        
        <button className='w-full bg-[#fc4c02] p-2 rounded-lg text-white font-bold hover:bg-black duration-300' 
            >
          Registrar minha Conta Strava
        </button>
        {/** 
        <input className="button" type="submit" value="Enviar" />
        */}
      </form>
      </div>
    </div>
  );
}

export default App;
