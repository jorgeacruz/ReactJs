import React from 'react';
import slideImage from './assets/slide1.png'

function App() {
  return (
    <body>
      {/* navigation */}
      <nav className='w-full flex flex-col items-center justify-center bg-black p-6'>
        <div className='w-full max-w-7xl h-12 flex justify-between items-center'>
          <div>
            {/* logomarca */}
            <h1 className='text-white font-bold text-lg'>Nimbus Meteorologia</h1>
          </div>
          <div className='hidden md:flex flex-row items-center gap-20'>
            <ul className="flex flex-row text-white gap-8">
              <li>Home</li>
              <li>Empresa</li>
              <li>Serviços</li>
              <li>Fale Conosco</li>
            </ul>
            <button className='bg-white p-2 flex items-center justify-center rounded-sm w-40 hover:bg-secundaria-0 duration-300'>
              english
            </button>
          </div>
        </div>
      </nav>

      <section id='hero' className='w-full h-[600px}'>
      {/* Hero Section */}
        <img src={slideImage} alt="Hero Section" title='Hero Section' className='w-full bg-no-repeat bg-cover'/>
        
      </section>

      {/* boxes */}
      <section className='w-full flex flex-col items-center justify-center'>
        <div className='w-full p-6 max-w-7xl'>
          <div id='box' className='flex flex-col items-center mb-10 mt-4'>
              <h1 className='text-black text-3xl font-quicksand font-bold'>Diminuir as incertezas gera mais segurança</h1>
          </div>
          <div className='w-full flex flex-col items-center gap-3 md:flex-row'>
            {/* boxes */}
            <div className='w-[400px] flex flex-col items-center gap-2 p-3'>
              <img src={require('../src/assets/boxImage.png')} alt="" className='w-[378px] h-[250px]'/>
              <h2 className='text-2xl font-bold'>Otimização</h2>
              <h3 className='text-xl font-bold'>Planejamento mais produtivo</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam similique molestias distinctio, sed at magni minima fugiat tempore rerum perspiciatis, totam repellendus labore obcaecati hic natus, eligendi a voluptatem. Qui!
              </p>
            </div>
            <div className='w-[400px] flex flex-col items-center gap-2 p-3'>
              <img src={require('../src/assets/boxImage2.png')} alt="" className='w-[378px] h-[250px]'/>
              <h2 className='text-2xl font-bold'>Economia</h2>
              <h3 className='text-xl font-bold'>Planejamento mais produtivo</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam similique molestias distinctio, sed at magni minima fugiat tempore rerum perspiciatis, totam repellendus labore obcaecati hic natus, eligendi a voluptatem. Qui!
              </p>
            </div>
            <div className='w-[400px] flex flex-col items-center gap-2 p-3'>
              <img src={require('../src/assets/boxImage3.png')} alt="" className='w-[378px] h-[250px]'/>
              <h2 className='text-2xl font-bold'>Confiança</h2>
              <h3 className='text-xl font-bold'>Planejamento mais produtivo</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam similique molestias distinctio, sed at magni minima fugiat tempore rerum perspiciatis, totam repellendus labore obcaecati hic natus, eligendi a voluptatem. Qui!
              </p>
            </div>

          </div>
        </div>
      </section>

    </body>
  );
}

export default App;
