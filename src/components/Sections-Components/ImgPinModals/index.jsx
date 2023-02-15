import { useState } from 'react'
import Modal from "react-modal";

import './styles.css'

import map from '../../../assets/images/imgPinModals/map.png'
import { fixImage } from '../../../helpers/fixImage';

Modal.setAppElement('#map')

const data = [
    {
        title: 'Governo',
        text: 'Por conta da grande necessidade de mobilidade de +10.000 funcionários, a empresa implementou os serviços <b>Microsoft SharePoint</b>, para substituir a intranet, e o <b>Microsoft Teams</b>, para melhorar a comunicação da equipe em tempo real.'
    },
    {
        title: 'Varejo',
        text: 'Diante da necessidade de fornecer informações rápidas entre o time de vendas e as demais áreas, a empresa implementou o <b>Microsoft Outlook</b> como recurso para envio de atualizações e documentos. Já para comunicações e colaborações internas, passou a utilizar o <b>Microsoft Teams</b> para dar maior agilidade a seus mais de 1000 funcionários.'
    },
    {
        title: 'Indústria',
        text: 'Para possibilitar que seus quase 500 funcionários tivessem acesso a arquivos e documentos a partir de qualquer dispositivo, a empresa implementou o <b>Microsoft OneDrive</b> em substituição a pendrives/USB Flash Drive.'
    },
    {
        title: 'Saúde',
        text: 'Pensando em alternativas para capacitar seus +2000 funcionários espalhados pelos país, a empresa implementou o <b>Microsoft Teams</b> para treinamentos/workshops, e o <b>Microsoft Planner</b> para ter uma visão das atividades da equipe, atribuição de tarefas, criação de planos e construção de gráficos do desempenho da equipe.'
    },
    {
        title: 'Educação',
        text: 'Para proporcionar a melhor experiência para seus mais de 5000 alunos do ensino a distância, a instituição implantou o <b>Office 365</b> para desenvolvimento de peças educacionais, e também o <b>Microsoft Teams</b> para a realização das aulas ao vivo, bem como para a entrega das atividades assíncronas.'
    },
    {
        title: 'Logística',
        text: 'Com o intuito de dinamizar a comunicação entre seus +10.000 funcionários, a empresa implementou o <b>Microsoft Teams</b>. Já para permitir a edição e o acesso de arquivos em diferentes dispositivos e em qualquer local, a solução escolhida foi o <b>Microsoft OneDrive</b>.'
    },
    {
        title: 'Tecnologia',
        text: 'A empresa precisa implantar ferramentas para gerir de forma mais eficiente seus projetos. Sendo assim, foi implementado o <b>Microsoft Project</b>, para gestão de projetos, e o <b>Microsoft OneDrive</b>, para armazenamento e compartilhamento de arquivos entre seus quase 50 funcionários e clientes.'
    },
]

const ImgPinModals = () => {
    const [modal, setModal] = useState(false)
    const [selected, setSelected] = useState(0)

    const openModal = ev => {
        setSelected(ev.target.value - 1)
        setModal(true)
    }


    const closeModal = () => setModal(false)

    return (
        <div className="imgpinmodals-wrapper">
            <img src={ fixImage(map) } alt="mapa da cidade" />

            { data.map((item, index) => (
                <button 
                    key={ index }
                    className='pin'
                    value={ index + 1 } 
                    onClick={e => 
                    openModal(e)}>{ index + 1 }</button>
            )) }

            <Modal
                isOpen={modal}
                onRequestClose={closeModal}
                overlayClassName="modal-overlay"
                className="imgpinmodal-modal-content"
                >
                <div className="number"><span>{ selected + 1 }</span></div>
                <h2>Segmento: { data[selected].title }</h2>
                <p dangerouslySetInnerHTML={{ __html: data[selected].text }} />
                <button className="close" onClick={closeModal}><span>&times;</span></button>
            </Modal>
        </div>
    )
}

export default ImgPinModals