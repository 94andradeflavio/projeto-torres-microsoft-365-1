import React from 'react'
import './index.css'

// Components
import Section from '../../components/Section';
import Container from '../../components/Container';
import Logo from '../../components/Sections-Components/Logo';
import TitleSubtitle from '../../components/Sections-Components/TitleSubtitle';
import ImageWithText from '../../components/Sections-Components/ImageWithText';
import SmallerCarrousel from '../../components/Sections-Components/SmallerCarrousel';
import WhatIsWorkspace from '../../components/Sections-Components/WhatIsWorkspace';
import HorizontalAccordion from '../../components/Sections-Components/HorizontalAccordion';
import LargerCarrousel from '../../components/Sections-Components/LargerCarrousel';
import VerticalAccordion from '../../components/Sections-Components/VerticalAccordion';
import Video from '../../components/Sections-Components/Video';
import SaibaMais from '../../components/Sections-Components/SaibaMais';
import TabView from '../../components/Sections-Components/TabView';

// Backgrounds
import bg1 from '../../assets/images/bloco-1/bg.jpg'
import bg2 from '../../assets/images/bloco-2/bg.jpg'
import bg3 from '../../assets/images/bloco-3/bg.jpg'
import bg4 from '../../assets/images/bloco-4/bg.jpg'
import bg5 from '../../assets/images/bloco-5/bg.jpg'
import bg6 from '../../assets/images/bloco-6/bg.jpg'

// Images
import iwt1 from '../../assets/images/bloco-2/img.png'
import iwt2 from '../../assets/images/bloco-3/logo.png'

const Home = () => {

    return (
        <>
            <Section bg={bg1}>
                <Container>
                    <Logo />
                </Container>
            </Section>
            <Section bg={bg2}>
                <Container>
                    <TitleSubtitle
                        title="Google Workspace"
                        subtitle="Traga o cliente para o digital!" />
                    <ImageWithText imgSource={iwt1} align="end">
                        <p>
                            Em uma realidade cada vez mais impactada pela transformação digital, uma empresa precisa 
                            estar preparada para lidar com os desafios que se conectam ao mercado, aos consumidores 
                            e ao seu&nbsp;desenvolvimento.
                        </p>
                        <button>Clique nos botões para ver alguns exemplos:</button>
                    </ImageWithText>
                    <SmallerCarrousel />
                </Container>
            </Section>
            <Section bg={bg3}>
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
            <Section bg={bg4}>
                <Container>
                    <WhatIsWorkspace />
                    <HorizontalAccordion />
                </Container>
            </Section>
            <Section bg={bg5}>
                <Container>
                    <LargerCarrousel />
                </Container>
            </Section>
            <Section bg={bg6}>
                <Container>
                    <VerticalAccordion />
                    <Video source="#" />
                    <SaibaMais />
                    <TabView />
                </Container>
            </Section>
        </>
    )
}

export default Home