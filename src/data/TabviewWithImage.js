import React from 'react';

import { ReactComponent as Icon1 } from '../assets/images/tabView/icon-1.svg';
import { ReactComponent as Icon2 } from '../assets/images/tabView/icon-2.svg';
import { ReactComponent as Icon3 } from '../assets/images/tabView/icon-3.svg';
import { ReactComponent as Icon4 } from '../assets/images/tabView/icon-4.svg';
import { ReactComponent as Icon5 } from '../assets/images/tabView/icon-5.svg';
import { ReactComponent as Icon6 } from '../assets/images/tabView/icon-6.svg';
import { ReactComponent as Icon7 } from '../assets/images/tabView/icon-7.svg';
import { ReactComponent as Icon8 } from '../assets/images/tabView/icon-8.svg';

export const data = [
    {
        icon: <Icon1 />,
        title: 'Administração',
        texts: [
            {
                title: 'Portal da Microsoft',
                text: 'O cliente pode criar, gerenciar e monitorar todos os produtos Azure em um único lugar.'
            },
            {
                title: 'Automação',
                text: 'Com essa funcionalidade, o gerenciamento em nuvem é simplificado.'
            },
            {
                title: 'Azure Monitor',
                text: 'Aplicativos, infraestrutura e rede: tudo em um único lugar.​'
            },
        ]
    },
    {
        icon: <Icon2 />,
        title: 'Armazenamento',
        texts: [
            {
                title: 'Serviço de backup do Azure',
                text: 'Com essa função, é possível realizar o backup de possíveis dados perdidos.'
            },
            {
                title: 'Armazenamento em disco',
                text: 'O armazenamento é feito em bloco de alto desempenho e altamente durável.'
            },
            {
                title: 'StorSimple',
                text: 'Aqui, o cliente tem armazenamento integrado entre dispositivos locais e nuvem.'
            },
        ]
    },
    {
        icon: <Icon3 />,
        title: 'Segurança',
        texts: [
            {
                title: 'Azure AD',
                text: 'Gerenciamento de acessos e habilitação de login único.'
            },
            {
                title: 'Central de Segurança',
                text: 'O cliente poderá habilitar a proteção avançada contra possíveis ameaças.'
            },
            {
                title: 'Azure Sentinel',
                text: 'Protege a empresa do cliente com uma segurança inteligente, utilizando o SIEM nativo da nuvem.'
            },
        ]
    },
    {
        icon: <Icon4 />,
        title: 'Nuvem Híbrida',
        texts: [
            {
                title: 'Azure Stack',
                text: 'Permite que o cliente execute aplicativos em um ambiente local junto com os serviços do Azure em seu data center.'
            },
            {
                title: 'Azure Stack Edge',
                text: 'Atua como um portão de armazenamento de nuvem e habilita transferências de dados autônomos para o Azure.'
            },
            {
                title: 'SQL do Azure',
                text: 'Linguagem moderna para migração e modernização do aplicativo.'
            },
        ]
    },
    {
        icon: <Icon5 />,
        title: 'Computação',
        texts: [
            {
                title: 'Instâncias de Conteiner',
                text: 'O cliente pode executar facilmente contêiners no Azure sem gerenciar servidores.'
            },
            {
                title: 'Máquinas Virtuais do Windows',
                text: 'Aqui, é possível prover máquinas virtuais do Windows em segundos.'
            },
            {
                title: 'AKS',
                text: 'Um sistema que simplifica a implantação, o gerenciamento e as operações dentro do Kubernetes.'
            },
        ]
    },
    {
        icon: <Icon6 />,
        title: 'Banco de Dados',
        texts: [
            {
                title: 'Banco de Dados SQL Azure',
                text: 'Esse SQL é altamente gerenciável e inteligente.'
            },
            {
                title: 'Cache Redis do Azure',
                text: 'Com esse cache, é possível dar controle aos aplicativos com uma alta taxa de transferência de dados.'
            },
            {
                title: 'Serviço de Migração',
                text: 'O cliente terá, de forma simplificada, a migração de seu banco de dados local para a nuvem.'
            },
        ]
    },
    {
        icon: <Icon7 />,
        title: 'Mídia e DCN',
        texts: [
            {
                title: 'Proteção do Conteúdo',
                text: 'Com essa funcionalidade, o cliente poderá distribuir conteúdo com segurança usando AES, PlayReady, Widevine e FairPlay.'
            },
            {
                title: 'Rede de Distribuição do Conteúdo',
                text: 'Com amplo alcance global, é possível transferir os conteúdos de forma confiável.'
            },
            {
                title: 'Serviços de Mídia',
                text: 'Com esse serviço, é possível codificar, armazenar e transmitir áudio e vídeo em escala.'
            },
        ]
    },
    {
        icon: <Icon8 />,
        title: 'Rede',
        texts: [
            {
                title: 'Load Balancer',
                text: 'Aqui, é possível fornecer alta disponibilidade e desempenho de rede aos aplicativos do cliente.'
            },
            {
                title: 'Rede Virtual',
                text: 'O cliente pode provisionar redes privadas e se conectar a data centers locais.'
            },
            {
                title: 'Observador de Rede',
                text: 'É uma solução de monitoramento de desempenho e diagnóstico de rede.'
            },
        ]
    },

]