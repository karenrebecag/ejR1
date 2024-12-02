import React, {useState} from "react";

const Banner3 = ({title2, description2, button2, image2}) => {

    const [clickCount, setClickCount] = useState (0);
    
    const handleButtonClick = () => {
        setClickCount(clickCount + 1);
        console.log(`Clickaste ${clickCount} veces`);
    }




    return (
        <div className="mainContainerBanner">

            <div className="leftContainer">
                <h1>{title2}</h1>
                <p>{description2}</p>
                <button onClick={handleButtonClick}>{button2}</button>
            </div>

            <div className="rightContainer">
                <img src={image2} alt="imageExample"/>
            </div>


        </div>





    );






}

export default Banner3;