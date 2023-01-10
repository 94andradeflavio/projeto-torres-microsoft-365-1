import React from "react";
import './styles.css';

const Section = ({ children, bg = 'none', id }) => {
    return (
        <section style={{backgroundImage: `url(${bg})`}} id={ id }>
            { children }
        </section>
    )
}

export default Section