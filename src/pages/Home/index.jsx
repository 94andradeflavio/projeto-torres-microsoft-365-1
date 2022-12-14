import React from 'react'
import './index.css'

import Section from '../../components/Section';
import Container from '../../components/Container';
import Logo from '../../components/Sections-Components/Logo';
import TitleSubtitle from '../../components/Sections-Components/TitleSubtitle';
import ImageWithText from '../../components/Sections-Components/ImageWithText';
import SmallerCarrousel from '../../components/Sections-Components/SmallerCarrousel';

import bg1 from '../../assets/images/bloco-1/bg.jpg'
import bg2 from '../../assets/images/bloco-2/bg.jpg'

import iwt1 from '../../assets/images/bloco-2/img.png'

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
                            e ao seu desenvolvimento.
                        </p>
                        <button>Clique nos botões para ver alguns exemplos:</button>
                    </ImageWithText>
                    <SmallerCarrousel />
                </Container>
            </Section>
        </>
    )
}

export default Home