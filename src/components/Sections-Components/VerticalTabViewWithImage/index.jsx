import { useState } from "react";
import './styles.css'

import { data } from "../../../data/VerticalTabviewWithImage";

const VerticalTabViewWithImage = () => {
    const [indexItem, setIndexItem] = useState(0)

    const chooseItem = item => {
        setIndexItem(item)
    }

    return (
        <div className="verticalTabViewWithImage-wrapper">
            <div className="tab-icons">
                { data.map((item, index) => (
                    <div className={ `icon ${ index === indexItem ? 'active' : '' }` } key={index} onClick={_ => chooseItem(index)}>
                        {item.title}
                    </div>
                )) }
            </div>
            <div className="content">
                <img src={ data[indexItem].image } alt={ data[indexItem].title } />
                <div className="text-area">
                    <h4>{ data[indexItem].title }</h4>
                    { data[indexItem].paragraph && data[indexItem].paragraph.map((item, index) => (
                        <p key={index}>{item}</p>
                    ))  }
                    { data[indexItem].list && (
                        <ul>
                            { data[indexItem].list.map((item, index) => (
                                <li key={index}>{ item }</li>
                            )) }
                        </ul>
                    ) }
                </div>
            </div>
        </div>
    )
}

export default VerticalTabViewWithImage