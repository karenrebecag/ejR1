import React from "react"
import "../src/styles/banner.css";
import rightVectorBanner from "../src/assets/rightVectorBanner.svg";


export function Banner (){
return(
    <div className="mainContainerBanner">
        <div className="leftContainer">
            <h1>Bitodex is peer to peer
            innovative network</h1>
            <p>Leverage agile frameworks to provide synopsis level Iterative approaches
            to corporate strategy foster collaborative the value proposition. </p>
            <button>Learn More</button>
        </div>    

        <div className="rightContainer">
            <img src={rightVectorBanner}></img>
        </div>

    </div>
);

};

export default Banner;