import { useState } from "react";
import './styles.css';

import { data } from "../../../data/TabviewWithImage";

import { fixImage } from "../../../helpers/fixImage";


const TabViewWithImage = () => {
    const [indexItem, setIndexItem] = useState(0)

    const chooseItem = item => {
        setIndexItem(item)
    }

    return (
        <div className="tab-view-with-image">
            <div className="tab-icons">
                { data.map((item, index) => (
                    <div className={ `icon ${ index === indexItem ? 'active' : '' }` } key={index} onClick={_ => chooseItem(index)}>
                        {item.icon}
                    </div>
                )) }
            </div>
            <div className="content">
                <div className="title">
                    {data[indexItem].icon}
                    <h4>{ data[indexItem].title }</h4>
                </div>
                <div className="images">
                    { data[indexItem].images.map((img, index) => (
                        <img src={ fixImage(img) } alt={ img } key={index} />
                    )) }
                </div>
                <div className="text-area">
                    { data[indexItem].texts.map(item => (
                        <div className="text" key={item.text}>
                            <h5>{ item.title }</h5>
                            <p>{ item.text }</p>
                        </div>
                    )) }
                </div>
            </div>
        </div>
    )
}

export default TabViewWithImage