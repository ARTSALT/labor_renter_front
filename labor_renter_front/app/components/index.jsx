import React from 'react';


function Index() {
  return (
    <div className="home">
        {/* </Header> */}
        <div className='presentation_home'>
            <h1>Nossa Missão</h1>
            <p>Encontre os melhores profissionais para o seu projeto</p>
        </div>

        {/* </ImagemHome> */}

        <div className='buttons_home'>
          <button className='button_home'>Eletricista</button>
          <button className='button_home'>Encanador</button>
          <button className='button_home'>Pintor</button>
        </div>
        {/* </Footer> */}
    </div>
  );
}

export default Index;