import React, { useState } from 'react';
import QRCode from 'react-qr-code';
import QRcodeLink from 'qrcode';

import './App.css';

export default function App() {

  const [link, setLink] = useState('');
  const [qrcodeLink, setQrCodeLink] = useState('');

  //download QRcode
  function handleGenerate(Link_url) {
    QRcodeLink.toDataURL(Link_url,{
      //props qr code png
      width:600,
      margin:2,

    }, function(err, url){

      setQrCodeLink(url);

    })
  }

  // build QrCode realtime
  function handleQRcode(e){ 

    setLink(e.target.value);
    handleGenerate(e.target.value);
    
  }

  return (
    <div className="w-full h-screen bg-gradient-to-tr from-blue-600 to-blue-950 flex items-center justify-center mx-auto">
      <div className='p-10 w-full max-w-md h-[700px] bg-slate-400 rounded-2xl shadow-black-500 shadow-md flex flex-col items-center justify-center gap-3 '>
        <h1 className='text-black text-2xl font-bold'>Crie aqui seu QR Code!</h1>
        <input type='text' 
        className=' text-center p-2 border border-black bg-white rounded-md w-2/3'
        placeholder='Digite aqui e pronto'
        value={link}
        onChange={(e) => setLink(e.target.value)}/>
        <QRCode value={link} className='rounded-lg hover:scale-105 duration-300 my-3' />
        <a href={qrcodeLink} download={`qrcode.png`}  
        className=' text-center font-bold p-2 bg-black text-white w-2/3 rounded-md hover:bg-red-500 duration-300'
        >
            Fazer Download 
        </a>
      </div>
    </div>
  );
}


