import React from "react";
import './styles.css';

const WhatIsWorkspace = () => {
    return (
        <div className="what-is-workspace">
            <h4>O que é</h4>
            <h4><span>Workspace?</span></h4>
            <p>
                O Google Workspace é um agregador de aplicativos de colaboração executados 
                da nuvem, como Gmail, Calendar, Drive, Docs, Sheets, Slides, Meets, entre&nbsp;outros.
            </p>
            <p>
                Sua finalidade é potencializar a produtividade, aprimorar a comunicação e promover 
                a colaboração das equipes baseado em três&nbsp;pilares:
            </p>
            <div className="blocks-area">
                <div className="block"><p>Flexível</p></div>
                <div className="block"><p>Útil</p></div>
                <div className="block"><p>Simples</p></div>
            </div>

            <h4>Flexibilidade</h4>
            <p>
                O serviço se destaca por contar com soluções flexíveis, práticas e leves para 
                qualquer&nbsp;dispositivo.
            </p>
            <button>Clique nos ícones e veja algumas vantagens:</button>

        </div>
    )
}

export default WhatIsWorkspace