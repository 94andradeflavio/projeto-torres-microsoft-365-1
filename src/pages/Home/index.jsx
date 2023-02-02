import React from 'react'
import './index.css'

// Components
import Section from '../../components/Section';
import Carrousel from '../../components/Sections-Components/Carrousel';
import ClickTip from '../../components/Sections-Components/ClickTip';
import Container from '../../components/Container';
import DragAndDrop from '../../components/Sections-Components/DragAndDrop';
import FlipCards from '../../components/Sections-Components/FlipCards';
import Logo from '../../components/Sections-Components/Logo';
import CircularCarrousel from '../../components/Sections-Components/CircularCarrousel';
import SaibaMais from '../../components/Sections-Components/SaibaMais';
import ShowDownSlider from '../../components/Sections-Components/ShowDownSlider';
import TabView from '../../components/Sections-Components/TabView';
import SmallerCarrousel from '../../components/Sections-Components/SmallerCarrousel'
import ScrollableContent from '../../components/Sections-Components/ScrollableContent';
import TabViewAccordion from '../../components/Sections-Components/TabViewWithImage';
import TimeLine from '../../components/Sections-Components/TimeLine';
import Tooltip from '../../components/Sections-Components/Tooltip';
import VerticalAccordion from '../../components/Sections-Components/VerticalAccordion';
import VerticalTabViewWithImage from '../../components/Sections-Components/VerticalTabViewWithImage';

// Backgrounds
import bg1 from '../../assets/images/bg-1.png'
import accordionBg from '../../assets/images/accordion-bg.png'

import bgWall from '../../assets/images/bg-wall.png'
import bgMan from '../../assets/images/bg-man.png'
import bgMaskPurpleDiagonal from '../../assets/images/bg-mask-purple-diagonal.png'
import bgMaskPurple from '../../assets/images/bg-mask-purple.png'

// Images
import iwt1 from '../../assets/images/imageWithText/img-1.png'

// retranca
import retrancaImg from '../../assets/images/logo/retranca.png'

// assinatura (final)
import sign from '../../assets/images/logo/logo.png'
import ImageWithText from '../../components/Sections-Components/ImageWithText';

const Home = () => {

    return (
        <>
            <img src={retrancaImg} alt="" className="retranca" />
            <Section bg={bg1} id="start" customClass='wp-capa' >
                <Container>
                    <Logo />
                </Container>
            </Section>
            <Section bgColor='#660099'>
                <Container>
                    <ImageWithText 
                        imgSource={iwt1} 
                        personalClass='iwt-1'
                        reverse 
                        imgStyle={{
                            maxWidth: '20rem'
                        }}>
                        <p>
                            Os serviços de Cloud fazem parte de um mercado que sempre fomentou a inovação com grandes 
                            avanços tecnológicos.
                        </p>
                        <p>
                            Com o Vivo Cloud Azure, o cliente potencializa o alcance de suas metas e agiliza sua 
                            transformação digital.
                        </p>
                        <p>
                            É importante que você saiba que cada potencial cliente tem uma necessidade. Então, prepare-se 
                            para mergulhar em experiências práticas e teóricas sobre o que é o Azure, como o produto 
                            funciona e qual a sua posição no mercado.
                        </p>
                    </ImageWithText>
                    <SmallerCarrousel />
                    <div className="text-box" value="1">
                        <p>
                            Com o Cloud Azure, o cliente tem flexibilidade para inovar no seu negócio e ainda conta com 
                            a modalidade de pagamento baseada em consumo (on demand), que permite a redução de custos 
                            operacionais com uma configuração de infraestrutura realmente mais aderente às suas necessidades.
                        </p>
                        <p>
                            O Azure é destinado à execução de aplicativos e serviços com base nos conceitos da computação 
                            em nuvem híbrida.
                        </p>
                    </div>
                </Container>
            </Section>
            <Section
                lineBG='#bd4aff'>
                <Container>
                    <div className="text-box" value="2">
                        <h4>
                            Cloud Azure<br/>
                            <span>Sua arquitetura e seus serviços</span>
                        </h4>
                        <p>
                            O Azure oferece a liberdade de criar, gerenciar e implantar aplicativos em uma vasta rede 
                            global. Por ser um conjunto de serviços em nuvem, o cliente Azure poderá usar suas 
                            estruturas e ferramentas favoritas.
                        </p>
                        <p>
                            Vamos conhecer agora como funciona a arquitetura Azure e seus principais serviços.
                        </p>
                    </div>
                    <ClickTip text='Clique nos conceitos para expandir as informações.' center />
                    <VerticalTabViewWithImage />
                </Container>
            </Section>
            <Section
                customClass='bg-vertical-accordion'
                lineBG='#bd4aff' 
                bg={ accordionBg }>
                <Container>
                    <VerticalAccordion />
                </Container>
            </Section>
            <Section bgColor='#660099' customClass='cloud-azure'>
                <Container>
                    <h4><b>Cloud Azure</b></h4>
                    <p>Conheça suas características</p>

                    <p>O <span>Vivo Cloud Azure</span> conta com uma gama de funcionalidades que garantem apoio tecnológico ao negócio do cliente.</p>
                    <p>Suas características técnicas são divididas em oito blocos, sendo eles:</p>

                    <div className="block-area">
                        <div className="block"><p>Administração</p></div>
                        <div className="block"><p>Armazenamento</p></div>
                        <div className="block"><p>Segurança</p></div>
                        <div className="block"><p>Nuvem híbrida</p></div>
                        <div className="block"><p>Computação</p></div>
                        <div className="block"><p>Banco de dados</p></div>
                        <div className="block"><p>Mídia e CDN</p></div>
                        <div className="block"><p>Rede</p></div>
                    </div>

                    <div className="content-center">
                        <h6><span>Conheça cada característica detalhadamente.</span></h6>
                        <ClickTip text='Clique nos conceitos para expandir as informações.' whiteTheme />
                    </div>
                    <TabViewAccordion />
                </Container>
            </Section>
            <Section bg={bgWall} bgMask={ bgMaskPurpleDiagonal } id="tab" >
                <Container>
                    <TabView />
                </Container>
            </Section>
            <Section bg={bgWall} lineBG='#bd4aff' id="carrousel" >
                <Container>
                    <Carrousel />
                </Container>
            </Section>
            <Section bg={bgWall} id="circular-carrousel">
                <Container>
                    <CircularCarrousel />
                </Container>
            </Section>
            <Section bg={ bgWall } lineBG="#83d300" id="show-down-slider" >
                <Container>
                    <ShowDownSlider />
                </Container>
            </Section>
            <Section bg={ bgWall } bgMask={ bgMaskPurple } lineBG="#83d300" id="tooltip" >
                <Container>
                    <Tooltip />
                    <TimeLine />
                </Container>
            </Section>
            <Section bg={ bgWall } id="flip-cards" >
                <Container>
                    <FlipCards />
                </Container>
            </Section>
            <Section bg={ bgMan } id="saiba-mais" customClass='wp-sm' >
                <Container>
                    <SaibaMais />
                </Container>
            </Section>
            <Section bg={ bgWall } bgMask={ bgMaskPurple } lineBG="#B3D682" mt="-7.5rem" id="scrollable" >
                <Container>
                    <ScrollableContent />
                    <DragAndDrop />
                </Container>
            </Section>
            <Section bg={bgWall}>
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