import React from "react";
import './styles.css';

const Section = ({ children, bg = 'none', id, lineBG = '', bgMask = 'none' }) => {
    return (
        <section style={{backgroundImage: `url(${bg})`}} id={ id }>
            <div className="section-mask" style={{backgroundImage: `url(${bgMask})`}}>
                { children }
            </div>
            { lineBG && <div className="bottom-line" style={{ backgroundColor: lineBG }} /> }
        </section>
    )
}

export default Section