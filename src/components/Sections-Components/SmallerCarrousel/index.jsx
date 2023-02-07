import React, { useRef } from "react";
import Slider from "react-slick";
import './styles.css';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import image1 from '../../../assets/images/carrousel/smallerCarrousel/icon-1.png'
import image2 from '../../../assets/images/carrousel/smallerCarrousel/icon-2.png'

import arrow from '../../../assets/images/carrousel/arrow.png'

const SmallerCarrousel = () => {
    const slider = useRef(null)

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
    };
    
    const prev = () => {
        slider.current.slickPrev()
    }

    const next = () => {
        slider.current.slickNext()
    }

    return (
        <div className="smaller-carrousel">
            <Slider {...settings} ref={slider}>
                <div className="item">
                    <div className="flex-area">
                        <img src={image1} alt="" />
                        <div>
                            <p>
                                Uma matéria do Olhar Digital de 2020 aponta que, pós-pandemia, 30% 
                                das empresas devem manter o home office.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="flex-area">
                        <img src={image2} alt="" />
                        <div>
                            <p>
                                Outra informação apontada foi que o investimento no trabalho remoto 
                                chega a 90% no que se refere à infraestrutura.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="flex-area">
                        <img src={image1} alt="" />
                        <div>
                            <p>
                                Podemos perceber que, desde 2020, é tendência que as empresas 
                                adotem essa modalidade de trabalho.
                            </p>
                        </div>
                    </div>
                </div>
            </Slider>
            <div className="controls">
                <button className="prev" onClick={prev}><img src={arrow} alt="voltar" /></button>
                <button className="next" onClick={next}><img src={arrow} alt="avançar" /></button>
            </div>
        </div>
    )
}

export default SmallerCarrousel