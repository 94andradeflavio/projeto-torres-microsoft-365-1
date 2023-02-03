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
                            <h4>O que é o Microsoft Azure?</h4>
                            <p>
                                O Microsoft Azure é uma plataforma de nuvem que oferece mais de 200 produtos e serviços.
                            </p>
                            <p>
                                A plataforma garantirá que o cliente esteja pronto para o futuro com as últimas 
                                tecnologias de ponta em termos de big data, inteligência artificial, realidade 
                                aumentada, IoT e segurança.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="flex-area">
                        <img src={image2} alt="" />
                        <div>
                            <h4>Como a Vivo atua?</h4>
                            <p>
                                Em parceria com a Microsoft, a Vivo atua na comercialização dessa solução por meio 
                                da modalidade de subscrição CSP (Cloud Service Provider). 
                            </p>
                            <p>
                                A parceria Vivo Empresas com a Microsoft pode trazer mais eficiência financeira, 
                                mobilidade, desempenho e segurança para o seu cliente.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="flex-area">
                        <img src={image1} alt="" />
                        <div>
                            <h4>Por que o Cloud Azure é necessário?</h4>
                            <p>
                                O Azure é a única nuvem híbrida consistente, pois oferece produtividade incomparável 
                                ao desenvolvedor, além de fornecer segurança abrangente e multicamadas. 
                            </p>
                            <p>
                                Contar com os serviços em nuvem é a única maneira de uma empresa ter suas 
                                informações e soluções disponíveis de maneira rápida e segura.
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