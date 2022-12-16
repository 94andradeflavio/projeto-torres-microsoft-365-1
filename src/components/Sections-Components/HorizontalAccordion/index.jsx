import React, {useState} from "react";
import './styles.css';

import { data } from "../../../data/HorizontalAccordion";

const HorizontalAccordion = () => {
    const [accordion, setAccordion] = useState(-1)

    const toggleAccordion = (index) => {
        if(accordion === index) {
            setAccordion(-1)
            return
        }
        setAccordion(index)
    }

    return (
        <div className="horizontal-accordion">
            { data.map((item, index) => (
                <div className={`accordion ${ accordion === index ? 'show' : '' }`} 
                    orientation={item.orientation} 
                    key={index}>
                    <img src={item.image} alt={item.name} onClick={ _ => toggleAccordion(index) } />
                    <div className="content">
                        <h5>{ item.title }</h5>
                        <p>{ item.description }</p>
                    </div>
                </div>
            )) }
        </div>
    )
}

export default HorizontalAccordion