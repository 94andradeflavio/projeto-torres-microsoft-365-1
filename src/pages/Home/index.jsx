import React from 'react'
import './index.css'

// Components
import Section from '../../components/Section';
import ClickTip from '../../components/Sections-Components/ClickTip';
import Container from '../../components/Container';
import Logo from '../../components/Sections-Components/Logo';
import HorizontalAccordion from '../../components/Sections-Components/HorizontalAccordion';
import SmallerCarrousel from '../../components/Sections-Components/SmallerCarrousel'
import TabViewWithImage from '../../components/Sections-Components/TabViewWithImage';
import TextCarrousel from '../../components/Sections-Components/TextCarrousel';
import VerticalAccordion from '../../components/Sections-Components/VerticalAccordion';
import VerticalTabViewWithImage from '../../components/Sections-Components/VerticalTabViewWithImage';

// Backgrounds
import bg1 from '../../assets/images/bg-1.png'
import accordionBg from '../../assets/images/accordion-bg.png'
import cutWhiteSmallBg from '../../assets/images/cut-white-small-bg.png'
import cutWhiteBg from '../../assets/images/cut-white-bg.png'
import mask from '../../assets/images/mask.png'

// Images
import iwt1 from '../../assets/images/imageWithText/img-1.png'
import iwt2 from '../../assets/images/imageWithText/img-2.png'
import world from '../../assets/images/world.png'

// retranca
import retrancaImg from '../../assets/images/logo/retranca.png'

// assinatura (final)
import sign from '../../assets/images/sign.png'
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
            <Section bgColor='#640196' customClass='mask-effect' bgMask={ mask }>
                <Container>
                    <ImageWithText 
                        imgSource={iwt1} 
                        personalClass='iwt-1'
                        reverse 
                        imgStyle={{
                            maxWidth: '20rem'
                        }}>
                        <p id='servicos-cloud'>
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
                bg={ cutWhiteSmallBg }
                lineBG='#bd4aff'
                customClass='cloud-azure-section'
                id='cloud-azure'>
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
                bg={ accordionBg }
                id='accordion'>
                <Container>
                    <VerticalAccordion />
                </Container>
            </Section>
            <Section bgColor='#460169' customClass='cloud-azure' id='tab-view'  bgMask={ mask }>
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
                    <TabViewWithImage />
                </Container>
            </Section>
            <Section bg={ cutWhiteBg } bgSize='100% 100%' customClass='mercado' id='mercado'>
                <Container>
                    <picture className="world">
                        <h3>Posição de Mercado</h3>
                        <img src={ world } alt="mapa mundi" />
                    </picture>
                    <TextCarrousel />
                    <ClickTip text='Clique nos conceitos para expandir as informações.' center />
                    <HorizontalAccordion />
                </Container>
            </Section>
            <Section bgColor='#210131' customClass='iwt-2' bgMask={ mask } id='fim'>
                <Container>
                    <ImageWithText 
                        imgSource={iwt2} 
                        customStyle={{ marginTop: '12rem' }}
                        imgStyle={{ maxWidth: '20rem' }}>
                        <h3>Cloud Azure</h3>
                        <p>
                            Tenha em mente que o Azure possui um <span>portfólio completo de 
                            funcionalidades</span>, desde a camada de infraestrutura básica (máquina 
                            virtual, espaço para armazenamento e componentes de rede) até a camada 
                            de plataforma como serviços.
                        </p>
                        <p>
                            Com essa plataforma, seu cliente tem a liberdade de criar, executar e 
                            gerenciar aplicativos em várias nuvens com ferramentas e estruturas de 
                            escolha dele. Consegue imaginar seu cliente tendo todos esses recursos 
                            graças a sua consultoria?
                        </p>
                    </ImageWithText>
                    <div className="sign-area">
                        <img src={ sign } alt="assinatura" />
                    </div>
                </Container>
            </Section>
        </>
    )
}

export default Home