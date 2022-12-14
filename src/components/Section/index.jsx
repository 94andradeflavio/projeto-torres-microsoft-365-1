import React from "react";
import './styles.css';

const Section = ({ children, bg = 'none' }) => {
    return (
        <section style={{backgroundImage: `url(${bg})`}}>
            { children }
        </section>
    )
}

export default Section