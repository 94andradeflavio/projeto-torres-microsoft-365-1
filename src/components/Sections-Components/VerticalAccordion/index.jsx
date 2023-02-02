import React, { useState } from "react";
import './styles.css';

import { data } from "../../../data/VerticalAccordion";

import logo from '../../../assets/images/logo/logo2.png'

const VerticalAccordion = () => {
    const [accordion, setAccordion] = useState(-1)

    const toggleAccordion = (index) => {
        if(accordion === index) {
            setAccordion(-1)
            return
        }
        setAccordion(index)
    }

    return (
        <div className="vertical-accordion-wrapper">
            <div className="side-text">
                <img src={ logo } alt="logo" />
                <p>
                    O Azure fornece armazenamento baseado em nuvem, em que o cliente pode usar para armazenar seus aplicativos e fazer backup de seus dados 
                    com segurança e confiabilidade.
                </p>
            </div>
            <div className="vertical-accordion">
                <div className="accordion-wrapper">
                    { data.map((item, index) => (
                        <div className={`accordion ${ accordion === index ? 'show' : '' }`} key={index}>
                            <div className="header" onClick={ _ => toggleAccordion(index) }>
                                <h4>{item.title}</h4><span>{ accordion === index ? '-' : '+' }</span>
                            </div>
                            <div className="content">
                                { item.description.map((desc, index) => 
                                    <p key={index} dangerouslySetInnerHTML={{ __html: desc }} />
                                ) }
                            </div>
                        </div>
                    )) }
                </div>
            </div>
        </div>
    )
}

export default VerticalAccordion