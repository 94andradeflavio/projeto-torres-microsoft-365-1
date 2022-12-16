import React from "react";
import './styles.css';

const ImageWithText = ({ children, imgSource, align, reverse = false }) => {
    return (
        <div className={`image-with-text ${align} ${reverse ? 'reverse' : ''}`}>
            <img src={ imgSource } alt="" />
            <div className="text-area">
                { children }
            </div>
        </div>
    )
}

export default ImageWithText