import { useRef } from 'react';
import Slider from "react-slick";
import './styles.css'

import img from '../../../assets/images/TextCarrousel/vivo.png'

import arrow from '../../../assets/images/carrousel/arrow.png'

const data = [
    {
        text: [
            'Das 500 empresas mais valiosas do mundo, 95% utilizam o Microsoft Azure.',
            'A infraestrutura global do Azure é composta por dois componentes principais: a infraestrutura física e os componentes de rede de conexão. O componente físico é composto por mais de 200 data centers físicos, organizados em regiões, e está vinculado a uma das maiores redes interconectadas do planeta.'
        ]
    },
    {
        text: [
            'Com a conectividade da rede global do Azure, cada um dos data centers fornece alta disponibilidade, baixa latência, escalabilidade e os avanços mais recentes na infraestrutura de nuvem.',
            'Juntos, esses componentes mantêm os dados dentro da rede confiável da Microsoft, e o tráfego IP nunca entra na internet pública.'
        ]
    },
]

const TextCarrousel = () => {
    const slider = useRef(null)

    const settings = {
        dots: false,
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
        <div className="text-carrousel-wrapper">
            <div className="text">
                <h3>Posição de Mercado</h3>
                <p>
                    Vamos entender a robustez dessa plataforma.
                </p>
                <img src={ img } alt="logo vivo" />
            </div>
            <div className="carrousel">
                <Slider {...settings} ref={slider}>
                    { data.map((item, index) => {
                        return (
                            <div className="item" value={ index + 1 } key={index}>
                                <div className="text-area">
                                    { item.text.map((item, i) => (
                                        <p key={ i }>{ item }</p>
                                    )) }
                                </div>
                            </div>
                        )
                    }) }
                </Slider>
                <div className="controls">
                    <button className="prev" onClick={prev}><img src={arrow} alt="voltar" draggable="false" /></button>
                    <button className="next" onClick={next}><img src={arrow} alt="avançar" draggable="false" /></button>
                </div>
            </div>
        </div>
    )
}

export default TextCarrousel