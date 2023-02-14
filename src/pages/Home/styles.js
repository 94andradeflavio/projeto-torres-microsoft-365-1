import styled from "styled-components";

export const Home = styled.div`
    width: 100%;

    img.retranca {
        position: absolute;
        width: 15rem;
        left: 0;
        top: 2rem;
        z-index: 10;
    }

    .sign-area {
        width: 100%;
        display: flex;
    }

    .sign-area img {
        width: 100%;
        margin: 0 auto;
    }

    .iwt-1 p:not(:last-child) {
        margin-bottom: 3rem;
    }



    section.wp-capa::after,
    section.bg-vertical-accordion::after {
        content: '';
        position: absolute;
        background: linear-gradient(0deg, #660099 0%, #ffffff00 100%);
        bottom: 0;
        left: 0;
        width: 100%;
        height: 50%;
    }

    .text-box {
        width: 100%;
        max-width: 35rem;
        margin-bottom: 5rem;
    }

    .text-box p {
        margin-bottom: 1.5rem;
    }

    .text-box[value="2"] {
        color: #000;
    }

    .text-box[value="2"] h4 {
        font-size: 2rem;
        font-weight: 400;
        margin-bottom: 2rem;
        color: #83D300;

    }

    .cloud-azure h4,
    .cloud-azure h6 span,
    .cloud-azure p span {
        color: #83D300;
    }

    .cloud-azure h4 {
        font-size: 2rem;
        margin-bottom: 1rem;
    }

    .cloud-azure .container > p {
        margin-bottom: 2rem;

    }

    .cloud-azure .block-area {
        display: flex;
        flex-wrap: wrap;
        gap: 2rem;
        margin-bottom: 4rem;
    }

    .cloud-azure .block-area .block {
        background-color: #D9D9D9;
        box-shadow: 10px 10px 16px 0px #bd4aff;
        color: #660099;
        width: 14rem;
        padding: 1rem;
    }

    .cloud-azure .block-area .block p {
        font-weight: 700;
        text-align: center;
    }

    .text-box[value="2"] h4 span {
        font-weight: 700;
        color: #660099;
    }

    .cloud-azure .content-center h6 {
        margin-bottom: 1rem;
    }

    .cloud-azure .content-center h6 span {
        font-weight: 700;
    }

    .cloud-azure-section {
        background-size: 100% 100% !important;
        margin-top: -5rem !important;
    }

    .content-center {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .video-iwt {
        margin-top: -13rem !important;
    }

    .video-iwt .container {
        padding-top: 10rem;
    }

    .video-iwt h5.title-iwt {
        font-size: 1.8rem;
        text-align: center;
        margin-top: 5rem;
        margin-bottom: 2rem;
    }

    .video-iwt ul li {
        margin-bottom: 1.5rem;
    }

    .solucao-microsoft {
        margin-top: -15rem !important;
        padding-top: 9rem;
        z-index: 2 !important;
        color: #660099;
        text-align: center;
    }

    .solucao-microsoft h3 {
        margin-bottom: 2rem;
    }

    .solucao-microsoft h5 {
        font-size: 1.8rem;
        margin-bottom: 1rem;
    }

    .solucao-microsoft p {
        margin-bottom: 1.5rem;
    }

    .solucao-microsoft .image-with-text p {
        color: #000;
    }

    .solucao-microsoft .above-iwt-text {
        text-align: left;
        color: #000;
        margin-bottom: 10rem;
    }

    .solucao-microsoft button.saiba-mais {
        font-size: 1.4rem;
        color: #fff;
        background-color: #670099;
        border: none;
        padding: 1rem 2rem;
        cursor: pointer;
    }

    .mask-effect .section-mask {
        position: relative;
    }

    .mask-effect .section-mask::before {
        content: '';
        position: absolute;
        background: linear-gradient(180deg, #660099 0%, rgba(102, 0, 153, 0.9) 50%, rgb(102, 0, 153, .9) 100%);
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .mask-effect h3 {
        margin-bottom: 2rem;
    }

    .cloud-azure .section-mask::before,
    .video-iwt .section-mask::before,
    .iwt-section .section-mask::before {
        content: '';
        position: absolute;
        background-color: rgba(70, 1, 105, .95);
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    picture.world h3 {
        color: #660099;
        margin-bottom: 1.5rem;
        text-align: center;
    }

    picture.world img {
        width: 100%;
        margin-bottom: 5rem;
    }

    section.wp-asian {
        background-position: 5% bottom !important;
    }

    .main-modal-content {
        position: relative;
        background: #D9AEEE;
        color: #660099;
        width: 100%;
        max-width: 35rem;
        margin: 0 10px;
        padding: 2rem 2rem;
        padding-top: 3rem;

        display: flex;
        flex-direction: column;
    }

    .main-modal-content button.close {
        --size: 2rem;
        position: absolute;
        top: 1rem;
        right: 1rem;
        background-color: #660099;
        color: #fff;
        border: 2px solid #660099;
        border-radius: 50%;
        width: var(--size);
        height: var(--size);

        cursor: pointer;
        transition: .2s linear;
    }

    .main-modal-content button.close span {
        font-size: 1.8rem;
        font-weight: 700;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    button.close span {
        line-height: 1;
    }

    @media screen and (max-width: 768px) {
        section.wp-sm {
            background-position: 80% center;
        }
    }
`