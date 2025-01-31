"use client";
import React from 'react';
import '../globals.css';
import { useRouter } from 'next/navigation';	

function Index() {
  const router = useRouter();

  const handleButtonClick = (query) => {
    router.push(`/pages/pesquisa?q=${query}`); 
  };
  
  return (
    <div className="home">
      
        <div className='presentation_home'>
            <h1>Nossa Missão</h1>
            <p>Na Labor Renter, nossa missão é simplificar a maneira como você encontra e 
              contrata os melhores profissionais para suas necessidades. 
              Estamos aqui para conectar você a eletricistas, encanadores, pintores e outros especialistas qualificados de
              forma rápida, segura e eficiente.</p>
        </div>

        {/* <ImagemHome/> */}

        <div className='buttons_home'>
        <button className='button_home' onClick={() => handleButtonClick("Eletricista")}>
          Eletricista
        </button>
        <button className='button_home' onClick={() => handleButtonClick("Encanador")}>
          Encanador
        </button>
        <button className='button_home' onClick={() => handleButtonClick("Pintor")}>
          Pintor
        </button>
      </div>

    </div>
  );
}

export default Index;