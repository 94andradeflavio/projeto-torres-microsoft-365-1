import React, { useState } from 'react'
import Modal from "react-modal";
import './index.css'

// Components
import Section from '../../components/Section';
import Carrousel from '../../components/Sections-Components/Carrousel';
import Container from '../../components/Container';
import ImgPinModals from '../../components/Sections-Components/ImgPinModals';
import Logo from '../../components/Sections-Components/Logo';
import SmallerCarrousel from '../../components/Sections-Components/SmallerCarrousel'
import TabViewWithImage from '../../components/Sections-Components/TabViewWithImage';
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
import iwt5 from '../../assets/images/imageWithText/img-5.png'
import iwt6 from '../../assets/images/imageWithText/img-6.png'

// retranca
import retrancaImg from '../../assets/images/logo/retranca.png'

// assinatura (final)
import sign from '../../assets/images/sign.png'
import ImageWithText from '../../components/Sections-Components/ImageWithText';

Modal.setAppElement('#root')

const Home = () => {
    const [modal, setModal] = useState(false)

    const openModal = () => setModal(true)
    const closeModal = () => setModal(false)

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

            <Section bgColor='#460169' customClass='cloud-azure' bgMask={ mask }>
                <Container>
                    <h4><b>Microsoft 365</b></h4>
                    <p>
                        As ferramentas da solução Microsoft 365 possibilitam acessibilidade para 
                        todos os tamanhos de empresas, um ambiente ágil e integrado.
                    </p>
                    <TabViewWithImage />
                </Container>
            </Section>

            <Section bg={ cutWhiteBg } bgSize='100% 100%' customClass='solucao-microsoft' id='mercado'>
                <Container>
                    <h3>Solução Microsoft 365</h3>
                    <p>
                        Clique nos ícones abaixo para ver exemplos de aplicação das facilidades do 
                        Microsoft 365 em diferentes segmentos.
                    </p>
                    <ImgPinModals />
                    <p>
                        Agora que você já viu alguns casos de aplicação, vamos conhecer cases em que 
                        a Vivo proporcionou a solução ideal para o cliente.
                    </p>
                    <ImageWithText
                        imgSource={iwt5}
                        imgStyle={{ 
                            maxWidth: '20rem',
                            boxShadow: '20px 10px 20px 0px #bd4aff'
                        }}
                        customStyle={{
                            textAlign: 'left'
                        }}>
                        <h5>Case Toyota</h5>
                        <p>
                            A Toyota tinha o desafio de implementar o Home Office e fazer com que 
                            seus colaboradores possam participar mais ativamente da organização dos 
                            arquivos de trabalho.
                        </p>
                        <p>
                            Um ponto de mudança dentro da Toyota é a criação da comunidade 
                            “know it” - um portal dentro do Teams e SharePoint, onde os funcionários 
                            encontram informações sobre os aplicativos do Microsoft 365, com 
                            perguntas, vídeos e troca de informações sobre o uso da tecnologia.
                        </p>
                        <button className="saiba-mais" onClick={openModal}>Saiba Mais</button>
                        <Modal
                            isOpen={modal}
                            onRequestClose={closeModal}
                            overlayClassName="modal-overlay"
                            className="main-modal-content"
                            >
                            <p>
                                A ferramenta Microsoft Forms também tem incentivado os colaboradores 
                                a dar sugestões para melhorar o modelo de trabalho e a criação de um 
                                roteiro digital para definição do local do escritório híbrido.
                            </p>
                            <button className="close" onClick={closeModal}><span>&times;</span></button>
                        </Modal>
                    </ImageWithText>
                    <ImageWithText
                        reverse
                        imgSource={iwt6}
                        imgStyle={{ 
                            maxWidth: '20rem',
                            boxShadow: '20px 10px 20px 0px #bd4aff'
                        }}
                        customStyle={{
                            textAlign: 'left'
                        }}>
                        <h5>Case Ikea</h5>
                        <p>
                            A implantação do Microsoft 365 tem ajudado os 166 mil funcionários a 
                            apoiar a organização em seus esforços de sustentabilidade. Assim, reduzem 
                            processos baseados em papel e substituem viagens e atendimentos 
                            presenciais por colaboração digital.
                        </p>
                        <p>
                            A ferramenta modernizou a forma de trabalhar da Ikea, permitindo a 
                            conexão de mais pessoas, melhorando a comunicação e otimizando processos. 
                            Para você ter uma ideia, em cinco meses, todos os funcionários já tinham 
                            acesso ao Teams.
                        </p>
                    </ImageWithText>
                    <div className="above-iwt-text">
                        <p>
                            A implantação do Microsoft 365 tem ajudado os 166 mil funcionários a apoiar 
                            a organização em seus esforços de sustentabilidade. Assim, reduzem processos 
                            baseados em papel e substituem viagens e atendimentos presenciais por 
                            colaboração digital.
                        </p>
                        <p>
                            A ferramenta modernizou a forma de trabalhar da Ikea, permitindo a conexão 
                            de mais pessoas, melhorando a comunicação e otimizando processos. Para você 
                            ter uma ideia, em cinco meses, todos os funcionários já tinham acesso ao 
                            Teams.
                        </p>
                    </div>
                </Container>
            </Section>

            <Section bgColor='#210131' customClass='iwt-2' bgMask={ mask } id='fim'>
                <Container>
                    <ImageWithText 
                        imgSource={iwt2} 
                        customStyle={{ marginTop: '12rem' }}
                        imgStyle={{ 
                            maxWidth: '20rem'
                        }}>
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