import React from "react";
import './styles.css';

const ImageWithText = ({ children, imgSource, align, personalClass = '', reverse = false, customStyle = {}, imgStyle = { maxWidth: '25rem' } }) => {
    return (
        <div style={ customStyle } className={`image-with-text ${align} ${personalClass} ${reverse ? 'reverse' : ''}`}>
            <img src={ imgSource } style={ imgStyle } alt={ imgSource } />
            <div className="text-area">
                { children }
            </div>
        </div>
    )
}

export default ImageWithText