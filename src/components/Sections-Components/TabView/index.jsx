import React, { useState } from "react";
import './styles.css';

import { data } from "../../../data/Tabview";


const TabView = () => {
    const [indexItem, setIndexItem] = useState(0)

    const chooseItem = item => {
        setIndexItem(item)
    }

    return (
        <div className="tab-view">
            <div className="tab-icons">
                { data.map((item, index) => (
                    <div className={ `icon ${ index === indexItem ? 'active' : '' }` } key={index} onClick={_ => chooseItem(index)}>
                        <img src={item.icon} alt="" />
                        <svg></svg>
                    </div>
                )) }
            </div>
            <div className="content">
                <img src={data[indexItem].icon} alt="" />
                <div className="text-area">
                    { data[indexItem].description.map((item, index) => (
                        <p key={index}>{item}</p>
                    ))  }
                </div>
            </div>
        </div>
    )
}

export default TabView