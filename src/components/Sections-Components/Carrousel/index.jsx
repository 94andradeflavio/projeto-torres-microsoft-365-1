import React, { useRef, useState } from "react";
import Slider from "react-slick";
import './styles.css';

import Modal from "react-modal";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import arrowPrev from '../../../assets/images/carrousel/white-left.png'
import arrowNext from '../../../assets/images/carrousel/white-left.png'

// images
import image1 from '../../../assets/images/carrousel/img1.png'
import image2 from '../../../assets/images/carrousel/img2.png'
import image3 from '../../../assets/images/carrousel/img3.png'

Modal.setAppElement('#root')

const data = [
    {
        image: image1,
        text: [
            'O levantamento foi realizado com 400 empresas de 17 países, incluindo o Brasil. Todas as organizações participantes possuem mais de 2.500 funcionários; portanto, são consideradas de grande porte. Elas são dos mais variados ramos da economia, como: educação, energia, saúde, tecnologia, varejo, finanças e administração pública.'
        ]
    },
    {
        image: image2,
        text: [
            'Esse dado é importante para demonstrar que as empresas que você negocia são o seu maior público-alvo. O pacote Microsoft 365 oferece as ferramentas ideais para a implementação do home office.'
        ]
    },
    {
        image: image3,
        text: [
            'Outra pesquisa, divulgada em maio de 2021, desta vez feita pela Pulses, startup especializada em clima organizacional, revelou que 80% dos brasileiros preferem o home office como regime de trabalho.',
            'Na ocasião, 21% dos entrevistados afirmaram que um dos problemas desse modelo de ocupação é a falta de estrutura que as companhias disponibilizaram aos funcionários. O levantamento foi feito com 89 mil funcionários de 261 empresas brasileiras.'
        ],
        buttonModal: true
    },
]

const Carrousel = () => {
    const [modal, setModal] = useState(false)

    const openModal = () => setModal(true)
    const closeModal = () => setModal(false)

    const slider = useRef(null)

    const settings = {
        dots: true,
        arrows: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    
    const prev = () => {
        slider.current.slickPrev()
    }

    const next = () => {
        slider.current.slickNext()
    }



    return (
        <div className="carrousel-wrapper">
            <Slider {...settings} ref={slider}>
                { data.map((item, index) => {
                    return (
                        <div className="item" value={ index + 1 } key={index}>
                            <img src={ item.image } alt="carrousel" />
                            <div className="text">
                                { item.text.map(text => (
                                    <p key={text}>{ text }</p>
                                )) }
                                { item.buttonModal && (
                                    <div 
                                        className="button-area" >
                                        <button 
                                            onClick={openModal} 
                                            className="carrousel-modal">
                                            Saiba Mais
                                        </button>
                                    </div>
                                ) }
                            </div>
                        </div>
                    )
                }) }
            </Slider>
            <div className="controls">
                <button className="prev" onClick={prev}><img src={arrowPrev} alt="voltar" draggable="false" /></button>
                <button className="next" onClick={next}><img src={arrowNext} alt="avançar" draggable="false" /></button>
            </div>

            <Modal
                isOpen={modal}
                onRequestClose={closeModal}
                overlayClassName="modal-overlay"
                className="modal-content"
                >
                <p>
                    Seu cliente ganha duas vezes: implementa um modelo de negócio que é tendência 
                    de mercado, eficaz e seguro e gera satisfação para os colaboradores dele.
                </p>
                <button className="close" onClick={closeModal}><span>&times;</span></button>
            </Modal>
        </div>
    )
}

export default Carrousel