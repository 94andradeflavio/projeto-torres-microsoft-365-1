import React from 'react'
import './index.css'

// Components
import Section from '../../components/Section';
import Container from '../../components/Container';
import Logo from '../../components/Sections-Components/Logo';
import ImageWithText from '../../components/Sections-Components/ImageWithText';
import WhatIsWorkspace from '../../components/Sections-Components/WhatIsWorkspace';
import HorizontalAccordion from '../../components/Sections-Components/HorizontalAccordion';
import LargerCarrousel from '../../components/Sections-Components/LargerCarrousel';
import VerticalAccordion from '../../components/Sections-Components/VerticalAccordion';
import Video from '../../components/Sections-Components/Video';
import SaibaMais from '../../components/Sections-Components/SaibaMais';
import TabViewWithImage from '../../components/Sections-Components/TabViewWithImage';

// Backgrounds
import bg1 from '../../assets/images/bg-1.png'
// import bg2 from '../../assets/images/bg-2.png'
import bg3 from '../../assets/images/bg-3.png'
import bg4 from '../../assets/images/bg-4.png'
import bg5 from '../../assets/images/bg-5.png'
import bg6 from '../../assets/images/bg-6.png'
import bg7 from '../../assets/images/bg-7.png'
import bg8 from '../../assets/images/bg-8.png'

import bgWall from '../../assets/images/bg-wall.png'
import bgMaskPurple from '../../assets/images/bg-mask-purple.png'

// Images

// Image With Text
import iwt2 from '../../assets/images/imageWithText/img-2.png'
import iwt3 from '../../assets/images/imageWithText/img-3.png'

// retranca
import retrancaImg from '../../assets/images/logo/retranca.png'

// assinatura (final)
import sign from '../../assets/images/sign.png'

// video import
import video from '../../assets/videos/example.mp4'

const Home = () => {

    return (
        <>
            <img src={retrancaImg} alt="" className="retranca" />
            <Section bg={bg1} id="start" lineBG='#B3D682'>
                <Container>
                    <Logo />
                </Container>
            </Section>
            <Section bg={bgWall} bgMask={bgMaskPurple} id="google-workspace" >
                <Container>

                </Container>
            </Section>
            <Section bg={bg3} id="vivo-empresas">
                <Container>
                    <ImageWithText imgSource={iwt2} reverse={true} >
                        <div className="vivo-empresas">
                            <h4>Vivo</h4>
                            <h4><span>Empresas</span></h4>

                            <p>
                                Expandindo o objetivo da Telefônica em tornar-se um provedor d ud, em 2021 a empresa fechou 
                                parceria com o Google para a revenda de serviços de&nbsp;nuvem.
                            </p>
                            <p>
                                Com o propósito de oferecer uma base eficaz para empresas, administração pública e diversos 
                                outros tipos de organizações, a colaboração promove o aceleramento da transformação 
                                digital e fortalece a corporação atendida para o futuro, encontrando novas formas 
                                de inovar e&nbsp;prosperar.
                            </p>
                        </div>
                    </ImageWithText>
                </Container>
            </Section>
            <Section bg={bg4} id="what-is-workspace">
                <Container>
                    <WhatIsWorkspace />
                    <HorizontalAccordion />
                </Container>
            </Section>
            <Section bg={bg5} id="larger-carrousel">
                <Container>
                    <LargerCarrousel />
                </Container>
            </Section>
            <Section bg={bg6} id="vertical-accordion">
                <Container>
                    <VerticalAccordion />
                    <Video source={ video } title="Título do vídeo" />
                    <SaibaMais />
                    <TabViewWithImage />
                </Container>
            </Section>
            <Section bg={bg7} id="image-with-text">
                <Container>
                    <ImageWithText imgSource={iwt3} 
                    style={{
                        maxWidth: '25rem',
                        marginTop: '-5rem'
                    }}>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio quae dolor mollitia veritatis excepturi nam consequuntur eum, 
                            illum, saepe neque et id tempora officiis quidem! Aliquid similique ut voluptate&nbsp;modi.
                        </p>
                    </ImageWithText>
                </Container>
            </Section>
            <Section bg={bg8}>
                <Container>
                    <div className="sign-area">
                        <img src={ sign } alt="" />
                    </div>
                </Container>
            </Section>
        </>
    )
}

export default Home