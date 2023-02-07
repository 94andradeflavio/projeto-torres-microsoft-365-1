import React from 'react'
import './index.css'

// Components
import Section from '../../components/Section';
import Carrousel from '../../components/Sections-Components/Carrousel';
import ClickTip from '../../components/Sections-Components/ClickTip';
import Container from '../../components/Container';
import Logo from '../../components/Sections-Components/Logo';
import HorizontalAccordion from '../../components/Sections-Components/HorizontalAccordion';
import SmallerCarrousel from '../../components/Sections-Components/SmallerCarrousel'
import TabViewWithImage from '../../components/Sections-Components/TabViewWithImage';
import TextCarrousel from '../../components/Sections-Components/TextCarrousel';
import VerticalAccordion from '../../components/Sections-Components/VerticalAccordion';

// Backgrounds
import bg1 from '../../assets/images/bg-1.png'
import cutWhiteSmallBg from '../../assets/images/cut-white-small-bg.png'
import cutWhiteBg from '../../assets/images/cut-white-bg.png'
import mask from '../../assets/images/mask.png'

// Images
import iwt1 from '../../assets/images/imageWithText/img-1.png'
import iwt2 from '../../assets/images/imageWithText/img-2.png'
import iwt3 from '../../assets/images/imageWithText/img-3.png'
import iwt4 from '../../assets/images/imageWithText/img-4.png'
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
                        <h3>Mercado</h3>
                        <p id='servicos-cloud'>
                            Com o crescimento da modalidade de trabalho home office, é necessário o 
                            investimento em aplicações inteligentes e eficazes.
                        </p>
                        <p>
                            Do ponto de vista empresarial, um dos desafios é orientar o trabalho dos 
                            colaboradores aos objetivos, metas e resultados.
                        </p>
                    </ImageWithText>
                    <SmallerCarrousel />
                </Container>
            </Section>

            <Section
                bg={ cutWhiteSmallBg }
                lineBG='#bd4aff'
                customClass='cloud-azure-section'
                id='cloud-azure'>
                <Container>
                    <Carrousel />
                </Container>
            </Section>

            <Section bgColor='#460169' bgMask={ mask } customClass='iwt-section'>
                <Container>
                    <ImageWithText 
                        imgSource={iwt2} 
                        personalClass='iwt-1' 
                        imgStyle={{
                            maxWidth: '20rem',
                            boxShadow: '20px 10px 20px 0px #bd4aff'
                        }}>
                        <p>
                            Com o crescimento da modalidade de trabalho home office, é necessário 
                            o investimento em aplicações inteligentes e eficazes.
                        </p>
                        <p>
                            Do ponto de vista empresarial, um dos desafios é orientar o trabalho dos 
                            colaboradores aos objetivos, metas e resultados.
                        </p>
                    </ImageWithText>
                    <ImageWithText 
                        imgSource={iwt3} 
                        reverse
                        personalClass='iwt-1' 
                        imgStyle={{
                            maxWidth: '20rem',
                            boxShadow: '20px 10px 20px 0px #bd4aff'
                        }}>
                        <p>
                            O que confirma isso, é que as expectativas dos funcionários mudaram. O relatório do Índice de 
                            Tendência do Trabalho do ano de 2020 mostrou que, enquanto 73% dos funcionários desejam ter a 
                            opção de continuar trabalhando remotamente, 67% querem mais engajamento presencial. Fazendo 
                            com que tenhamos um novo normal estabelecido em um mundo híbrido.
                        </p>
                        <p>
                            Além disso, ainda existem os nômades digitais, trabalhadores que possuem 
                            maiores liberdades de onde e quando trabalham e a modalidade presencial, 
                            com todas as suas demandas e necessidades.
                        </p>
                    </ImageWithText>
                    <ImageWithText 
                        imgSource={iwt4} 
                        personalClass='iwt-1' 
                        imgStyle={{
                            maxWidth: '20rem',
                            boxShadow: '20px 10px 20px 0px #bd4aff'
                        }}>
                        <p>
                            Como podemos observar, o mundo do trabalho atual é complexo, havendo 
                            em um mesmo cenário trabalhadores que atuam home office, na modalidade 
                            híbrida, presencialmente e, ainda, sem um lugar fixo, como os nômades 
                            digitais.
                        </p>
                        <p>
                            Para cada uma dessas modalidades, o Microsoft 365 possui soluções, 
                            fornecendo vantagens que facilitam o dia a dia no trabalho:
                        </p>
                    </ImageWithText>
                </Container>
            </Section>

            <Section
                bgColor='#fff'>
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