import React, {useState} from 'react';



{/* Aqui Declaro mi variable y dentro de [{Declaro mis props}], estas props se pasarán a este componente (componente hijo) desde el componente padre App.js
    Tiene que ser una Arrow Function*/}
    export function styledComponent () {
        return {
          color : "#320156",
      
        };
      }
      
      export function ImgStyle (){
        return {
            Width: "2px",
            
        };
      }

const NuevoIntento = ({miNombre, misApellidos, miEdad, razon, textoBoton, imagenGato}) => {


{/* Aquí estoy desestructurando un arreglo que contiene dos valores: 
    onClick (el estado actual) y setOnClick (la función para actualizar el estado).
    Estos valores son devueltos por el hook useState. 
    El estado tiene un valor inicial de 0 porque lo estoy estableciendo manualmente. */}

    {/* Los [] Se utilizan para desestructurar arrays en JS, a diferencia de los {} que se 
        utilizan para encapsular bloques de codigo o desestructurar objetos (no arreglos).
        
        En el caso de los parentesis (), estos se utilizan para agrupar operaciones*/}
    const [onClick, setOnClick] = useState(0);

    const ButtonClickPress = () => {
        setOnClick (onClick + 1 );
        console.log (`Hiciste click ${onClick} veces. Espero que esto esté bien escrito`); 
    }
    




    return(
    <div>
        <h1 style={styledComponent()}>{miNombre}</h1>
        <h2>{misApellidos}</h2>
        <h3>{miEdad}</h3>
        <p style={styledComponent()}>{razon}</p>
        <button  onClick={ButtonClickPress}>{textoBoton}</button>
        <img style={ImgStyle()} src={imagenGato} alt='imagen de un gato'/>

    </div>
        
    );

};

export default NuevoIntento;