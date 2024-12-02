import React, {useState} from 'react';
import styles from './PoniendoAPrueba.css';
import { ReactComponent as Arrow } from './assets/down-arrow-download-svgrepo-com.svg'

const BannerCool = ({logo, number, name, heading, imageBanner}) => {
    const [onButton, setOnButton] = useState (0);

    const handleOnClick = () => {
        setOnButton(onButton + 1);
        console.log(`Presionaste ${onButton} veces` );
    }

    return (
        <div className='bigContainerBlack'>
            <div className='header'>
                <img src={logo} alt='logoMain'/>
                <h3 className='number'>{number}</h3>
                <h3 className='name'>{name}</h3>
            </div>

            <h1 className='heading'>{heading}</h1>
            <img className='imageBanner' src={imageBanner} alt="abstractShape"/>

            <div className='buttonContainerDiv'>
                <button className='pinkButton' onClick={handleOnClick}>
                    <Arrow/>   
                </button>
            </div>

        </div>


    );

};


export default BannerCool;