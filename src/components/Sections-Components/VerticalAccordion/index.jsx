import React, { useState } from "react";
import './styles.css';

import { data } from "../../../data/VerticalAccordion";

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