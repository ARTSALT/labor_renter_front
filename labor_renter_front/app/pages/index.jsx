import React from 'react';
import Footer from '../components/Footer';
import '../globals.css';
import Header from '../components/Header';



function Index() {
  return (
    <div className="home">
        <Header />
        <div className='presentation_home'>
            <h1>Nossa Missão</h1>
            <p>Na Labor Renter, nossa missão é simplificar a maneira como você encontra e 
              contrata os melhores profissionais para suas necessidades. 
              Estamos aqui para conectar você a eletricistas, encanadores, pintores e outros especialistas qualificados de
              forma rápida, segura e eficiente.</p>
        </div>

        {/* <ImagemHome/> */}

        <div className='buttons_home'>
          <button className='button_home'>Eletricista</button>
          <button className='button_home'>Encanador</button>
          <button className='button_home'>Pintor</button>
        </div>

        <Footer />
    </div>
  );
}

export default Index;