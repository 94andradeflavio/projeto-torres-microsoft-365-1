import React from 'react'
import './styles.css'

const TabView = () => {
    return (
        <div className="tab-view">
            <div className="line-area">
                <div className="line">
                    <div className="inner-line" />
                </div>
                <ul>
                    <li>Destaques</li>
                    <li>Inovação</li>
                    <li>Produtos</li>
                    <li>Impressões</li>
                    <li>Estrelas</li>
                    <li>Confiança</li>
                </ul>
            </div>
            <div className="content">
                <h4 className="title">Lorem ipsum</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic sunt explicabo amet laborum, cupiditate non mollitia ipsum voluptates repudiandae rerum fuga doloremque maiores assumenda nostrum reiciendis molestias nihil neque iure.</p>
            </div>
        </div>
    )
}

export default TabView