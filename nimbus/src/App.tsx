//import slideImage from './assets/slide1.png
import React from 'react';
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiper = new Swiper('.swiper', {
  // configure Swiper to use modules
  modules: [Navigation, Pagination, Autoplay],

  autoplay:{
   delay:6000,
  },
  // Optional parameters
  direction:'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },

});


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
            <button className='bg-white p-2 flex items-center justify-center rounded-sm w-40 hover:bg-secundaria-0 duration-300 hover:scale-95'>
              english
            </button>
          </div>
        </div>
      </nav>

      <section id='hero' className='w-full h-[600px}'>
      {/* Hero Section  */}

          <div className="swiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide ">
              <img src={require('./assets/slide1.png')} alt="" className='w-full bg-cover bg-no-repeat'/>
              </div>
              <div className="swiper-slide">
              <img src={require('./assets/slide1.png')} alt="" className='w-full'/>
              </div>
              <div className="swiper-slide">
              <img src={require('./assets/slide1.png')} alt="" className='w-full'/>
              </div>
              
            </div>
           {/* <div className="swiper-pagination"></div> 

            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>

            <div className="swiper-scrollbar"></div> */}
          </div>

      </section>

      {/* boxes */}
      <section className='w-full flex flex-col items-center justify-center py-20'>
        <div className='w-full p-6 max-w-7xl'>
          <div id='box' className='flex flex-col items-center mb-10 mt-4'>
              <h1 className='text-black text-3xl font-bold md:text-5xl'>Diminuir as incertezas gera mais segurança</h1>
          </div>
          <div className='w-full flex flex-col items-center gap-3 md:flex-row'>
            {/* boxes */}
            <div className='w-[400px] flex flex-col items-center gap-2 p-3'>
              <img src={require('../src/assets/boxImage.png')} alt="" className='w-[378px] h-[250px] hover:scale-105 duration-300 hover:opacity-80'/>
              <h2 className='text-2xl font-bold'>Otimização</h2>
              <h3 className='text-md  font-normal'>Adequação dos custos ao orçamento</h3>
              <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui! Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui!
              </p>
            </div>
            <div className='w-[400px] flex flex-col items-center gap-2 p-3'>
              <img src={require('../src/assets/boxImage2.png')} alt="" className='w-[378px] h-[250px] hover:scale-105 duration-300 hover:opacity-80'/>
              <h2 className='text-2xl font-bold'>Economia</h2>
              <h3 className='text-md  font-normal'>Planejamento mais produtivo</h3>
              <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui! Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui!
              </p>
            </div>
            <div className='w-[400px] flex flex-col items-center gap-2 p-3'>
              <img src={require('../src/assets/boxImage3.png')} alt="" className='w-[378px] h-[250px] hover:scale-105 duration-300 hover:opacity-80'/>
              <h2 className='text-2xl font-bold'>Confiança</h2>
              <h3 className='text-md font-normal'>Maior eficiência de mitigação dos impactos</h3>
              <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui! Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui!
              </p>
            </div>

          </div>
        </div>
      </section>
      
      {/* QUEM SOMOS  */}
      <section className='w-full bg-black flex flex-col items-center justify-center md:p-20 '>
        <div className='w-full max-w-7xl flex flex-col gap-10 p-10 lg:flex-row'>
          
          <div className='flex flex-col gap-10 text-white w-full lg:my-auto '>
            <h1 className='text-3xl font-bold md:text-6xl'>Look to find a hire great talent</h1>
            <p className='text-xl lg:w-3/4'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some </p>
            <p className='text-xl lg:w-3/4'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some </p>
            <button className='bg-white text-black font-bold p-3 rounded-sm md:w-1/2 hover:bg-secundaria-0 duration-300 hover:scale-95'>
              Podemos Conversar
            </button>
          </div>
          {/* Pictures - Team  */}
          <div className='flex flex-col gap-5 text-white w-full '>
            <div className='flex flex-row gap-5'>
              <img src={require('./assets/team1.png')} alt="" className='w-1/2 hover:scale-105 duration-300 hover:opacity-80'/>
              <img src={require('./assets/team2.png')} alt="" className='w-1/2 hover:scale-105 duration-300 hover:opacity-80'/>
            </div>
            <div className='flex flex-row gap-5'>
              <img src={require('./assets/team3.png')} alt="" className='w-1/2 h-[260] hover:scale-105 duration-300 hover:opacity-80'/>
              <img src={require('./assets/team4.png')} alt="" className='w-1/2 h-[260] hover:scale-105 duration-300 hover:opacity-80'/>
            </div>
          </div>

        </div>

      </section>   

      {/** Partners */}   
      <section className='w-full bg-secundaria-0 flex flex-col items-center justify-center md:py-20'>
            <div className='flex flex-col p-6 w-full max-w-7xl md:flex-row'>
              
            <div className='flex flex-col gap-6 text-black w-full lg:my-auto '>
                <h1 className='text-3xl font-bold md:text-5xl'>Chronos </h1>
                <p className='text-xl lg:w-2/3 font-quicksand'>
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some                </p>
                <p className='text-xl lg:w-2/3 font-quicksand'>
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some                </p>
                <p className='text-xl lg:w-2/3 font-quicksand'>
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some                </p>
                <button className='bg-black text-white font-bold p-3 rounded-sm md:w-1/2 hover:bg-secundaria-0 duration-300 hover:scale-95'>
                  Solicite um orçamento
                </button>
              </div>

              <div className='flex flex-row'>
                <img src={require('./assets/tablet.png')} alt="" className='hidden md:block w-[280px] h-[280px] z-10 relative right-20 hover:scale-95 duration-300'/> 
                <img src={require('./assets/celphone.png')} alt="" className='hidden md:block w-[190px] h-[270px] relative top-24 right-32 z-30 hover:scale-125 duration-300' /> 
                <img src={require('./assets/macbook.png')} alt="" className='hidden md:block w-[525px] h-[300px] z-0 relative top-56 right-56 hover:scale-95 duration-300'/>
              </div>
            </div>
      </section>
      {/** parceiros */}
      <section className='w-full flex flex-col items-center justify-center py-20'>
        <div className='w-full max-w-7xl flex flex-col mx-auto p-10'>
          
          <h1 className='text-3xl text-black font-bold mb-12'>Nossos Parceiros</h1>
          <div className='w-1/2 flex flex-col justify-around p-6'>
            <img src={require('./assets/cliente.png')} alt="" className='w-40'/>
            <img src={require('./assets/cliente.png')} alt="" className='w-40'/>
            <img src={require('./assets/cliente.png')} alt="" className='w-40'/>
            <img src={require('./assets/cliente.png')} alt="" className='w-40'/>
            <img src={require('./assets/cliente.png')} alt="" className='w-40'/>
          </div>
          <div className='w-1/2 flex flex-col justify-around p-6'>
            <img src={require('./assets/cliente.png')} alt="" className='w-40'/>
            <img src={require('./assets/cliente.png')} alt="" className='w-40'/>
            <img src={require('./assets/cliente.png')} alt="" className='w-40'/>
            <img src={require('./assets/cliente.png')} alt="" className='w-40'/>
            <img src={require('./assets/cliente.png')} alt="" className='w-40'/>
          </div>
          

        </div>
      </section>
    </body>
  );
}

export default App;
