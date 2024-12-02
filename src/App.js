import React from 'react';
import './App.css';
import Banner2 from './Banner2.jsx';
import Banner3 from './HooksEx1.jsx'
import NuevoIntento from './hooksEx2.jsx'
import BannerCool from './PoniendoAPrueba.jsx';
import imgBannerCool from './assets/Number=Gradient 18.png'
import logo from './assets/logo.png'



function App() {
  return (
    <div className='appContainer'>
    <div className="App">
      <Banner2 
      title="Bitodex is peer to peer innovative network" 
      description = "Leverage agile frameworks to provide synopsis level Iterative approaches to corporate strategy foster collaborative the value proposition. "
      buttonText = "Learn More"
      />
      

    <Banner3
      title2="Aqui va un intento mas"
      description2= "ya estoy cansada y frustrada"
      button2="ayuda"
    />

    

    <NuevoIntento
    miNombre = "Karen Rebeca"
    misApellidos = "Ortiz Gonzalez"
    miEdad = "23 Años"
    razon = " Quiero aferrarme a mejorar en esto."
    textoBoton = "Hice Esto yo sola al fin"/>
    <img src={"https://i.pinimg.com/originals/ea/8b/13/ea8b137fbc46bea2f12cc9087e57053d.gif"}/>

    <BannerCool
    logo={logo}
    number="6001 43 62"
    name= "Karen Ortiz"
    heading= "DIGITAL CREATIVE LABS"
    imageBanner = {imgBannerCool}
    
    />
    
    </div>
    </div>




  );
}




export default App;