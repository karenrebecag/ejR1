import React, {Component} from "react";
import styles from "../src/styles/banner.css"
import rightVectorBanner from "../src/assets/rightVectorBanner.svg"

class Banner2 extends Component {
    constructor(props){
        super(props)
        this.state = {
            clickCount: 0,
        };
    }

    handleButtonClick = () => {
        this.setState((prevState) => ({
            clickCount: prevState.clickCount + 1,
        }));
        console.log("Clickaste ${this.state.clickCount + 1} veces")

    };

    render () {
        const { title, description, buttonText, image} = this.props;

        return (
            <div className="mainContainerBanner">
                <div className="leftContainer">
                    <h1>{title}</h1>
                    <p>{description}</p>
                    <button onClick={this.handleButtonClick}>{buttonText}</button>
                </div>    
        
                <div className="rightContainer">
                    <img src={rightVectorBanner}></img>
                </div>
            </div>

        );

    }

}

export default Banner2