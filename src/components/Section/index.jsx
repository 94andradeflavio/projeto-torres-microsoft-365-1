import React from "react";
import './styles.css';

const Section = ({ children, bg = 'none', bgOrientation = 'center center', id, lineBG = '', bgMask = 'none' }) => {
    return (
        <section style={{
            backgroundImage: `url(${bg})`,
            backgroundPosition: bgOrientation
        }} id={ id }>
            <div className="section-mask" style={{backgroundImage: `url(${bgMask})`}}>
                { children }
            </div>
            { lineBG && <div className="bottom-line" style={{ backgroundColor: lineBG }} /> }
        </section>
    )
}

export default Section