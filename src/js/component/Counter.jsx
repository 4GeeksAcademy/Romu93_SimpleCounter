import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";

const navStyle = {
        background: "black",
        fontSize: "100px",
        padding: "20px",
}
const cardStyle = {
        background: "#212529",
        border: "1px solid grey",
        borderRadius: "15%",
        margin: "5px",
        color: "white",              
}
const firstCard = {
        background: "#212529",
        border: "1px solid grey",
        borderRadius: "15%",
        margin: "5px",
        color: "white",
        marginLeft: "25px"}

const lastCard = {
        background: "#212529",
        border: "1px solid grey",
        borderRadius: "15%",
        margin: "5px",
        color: "white",
        marginRigth: "30px",
}
const divisor = {
        color: "white",
} 

export const SecondsCounter = props => {
        const firstDigit = props.counter % 10
        const secondDigit = Math.floor((props.counter / 10) % 10)
        const thirdtDigit = Math.floor((props.counter / 100) % 10)
        const fourthDigit = Math.floor((props.counter / 1000) % 10)
        const fifthDigit = Math.floor((props.counter / 10000) % 10)
        const sixthDigit = Math.floor((props.counter / 100000) % 10)
        const seventhDigit = Math.floor((props.counter / 1000000) % 10)

        return (
                <div className="nav justify-content-center" style={navStyle}>    
                        <div className="card-body" style={firstCard}  >
                        <i className="fa fa-clock"></i>
                        </div>                    
                        <div className="card-body" style={cardStyle} >
                         <p className="card-text">{seventhDigit}</p>
                        </div>
                        <div className="card-body" style={cardStyle}>
                         <p className="card-text">{sixthDigit}</p>
                        </div>
                        <div className="card-body" style={cardStyle}>
                         <p className="card-text">{fifthDigit}</p>
                        </div>
                        <div className="card-body" style={cardStyle}>
                         <p className="card-text">{fourthDigit}</p>
                        </div>
                        <div className="card-body" style={cardStyle}>
                         <p className="card-text">{thirdtDigit}</p>
                        </div>
                        <div style={divisor}>
                         <p className="card-text">{":"}</p>
                        </div>
                        <div className="card-body" style={cardStyle}>
                         <p className="card-text">{secondDigit}</p>
                        </div>
                        <div className="card-body" style={lastCard}>
                         <p className="card-text">{firstDigit}</p>
                        </div>                        
                </div>
        )
}

SecondsCounter.propTypes = {
        counter: PropTypes.number
}