import React from 'react'
import './index.css'

// Components
import Section from '../../components/Section';
import Carrousel from '../../components/Sections-Components/Carrousel';
import Container from '../../components/Container';
import Logo from '../../components/Sections-Components/Logo';
import ImageWithText from '../../components/Sections-Components/ImageWithText';
// import WhatIsWorkspace from '../../components/Sections-Components/WhatIsWorkspace';
// import HorizontalAccordion from '../../components/Sections-Components/HorizontalAccordion';
// import LargerCarrousel from '../../components/Sections-Components/LargerCarrousel';
import CircularCarrousel from '../../components/Sections-Components/CircularCarrousel';
import SaibaMais from '../../components/Sections-Components/SaibaMais';
import ShowDownSlider from '../../components/Sections-Components/ShowDownSlider';
import TabView from '../../components/Sections-Components/TabView';
import TabViewWithImage from '../../components/Sections-Components/TabViewWithImage';
import Tooltip from '../../components/Sections-Components/Tooltip';
import VerticalAccordion from '../../components/Sections-Components/VerticalAccordion';
// import Video from '../../components/Sections-Components/Video';

// Backgrounds
import bg1 from '../../assets/images/bg-1.png'
// import bg2 from '../../assets/images/bg-2.png'
// import bg3 from '../../assets/images/bg-3.png'
// import bg4 from '../../assets/images/bg-4.png'
// import bg5 from '../../assets/images/bg-5.png'
import bg6 from '../../assets/images/bg-6.png'
import bg7 from '../../assets/images/bg-7.png'
// import bg8 from '../../assets/images/bg-8.png'

import bgWall from '../../assets/images/bg-wall.png'
import bgMaskPurpleDiagonal from '../../assets/images/bg-mask-purple-diagonal.png'
import bgMaskPurple from '../../assets/images/bg-mask-purple.png'
import bgAsian from '../../assets/images/bg-asian.png'

// Images

// Image With Text
// import iwt2 from '../../assets/images/imageWithText/img-2.png'
import iwt3 from '../../assets/images/imageWithText/img-3.png'

// retranca
import retrancaImg from '../../assets/images/logo/retranca.png'

// assinatura (final)
import sign from '../../assets/images/logo/logo.png'

const Home = () => {

    return (
        <>
            <img src={retrancaImg} alt="" className="retranca" />
            <Section bg={bg1} id="start" lineBG='#B3D682'>
                <Container>
                    <Logo />
                </Container>
            </Section>
            <Section bg={bgWall} bgMask={ bgMaskPurpleDiagonal } id="google-workspace" >
                <Container>
                    <TabView />
                </Container>
            </Section>
            <Section bg={bgWall} id="vivo-empresas" lineBG='#bd4aff'>
                <Container>
                    <Carrousel />
                </Container>
            </Section>
            <Section bg={bgAsian} id="what-is-workspace" lineBG='#bd4aff' bgOrientation='center top'>
                <Container>
                    <VerticalAccordion />
                </Container>
            </Section>
            <Section bg={bgWall} id="larger-carrousel">
                <Container>
                    <CircularCarrousel />
                </Container>
            </Section>
            <Section bg={ bgWall } lineBG="#83d300" >
                <Container>
                    <ShowDownSlider />
                </Container>
            </Section>
            <Section bg={ bgWall } bgMask={ bgMaskPurple } >
                <Container>
                    <Tooltip />
                </Container>
            </Section>
            <Section bg={bg6} id="vertical-accordion">
                <Container>
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