import React from 'react';

import { ReactComponent as Icon1 } from '../assets/images/tabView/icon-1.svg';
import { ReactComponent as Icon2 } from '../assets/images/tabView/icon-2.svg';
import { ReactComponent as Icon3 } from '../assets/images/tabView/icon-3.svg';
import { ReactComponent as Icon4 } from '../assets/images/tabView/icon-4.svg';

// images

// e-mail profissional
import outlook from '../assets/images/tabView/images/outlook.png'
import exchange from '../assets/images/tabView/images/exchange.png'

// ferramentas de trabalho
import excel from '../assets/images/tabView/images/excel.png'
import word from '../assets/images/tabView/images/word.png'
import access from '../assets/images/tabView/images/access.png'
import powerpoint from '../assets/images/tabView/images/powerpoint.png'

// ferramentas de colaboração
import teams from '../assets/images/tabView/images/teams.png'

// nuvem
import onedrive from '../assets/images/tabView/images/onedrive.png'
import sharepoint from '../assets/images/tabView/images/sharepoint.png'

export const data = [
    {
        icon: <Icon1 />,
        title: 'E-mail Profissional',
        images: [
            outlook,
            exchange
        ],
        texts: [
            {
                title: 'Outlook e Exchange',
                text: 'Permitem o acesso a e-mails a partir de qualquer dispositivo e lugar.'
            }
        ]
    },
    {
        icon: <Icon2 />,
        title: 'Ferramentas de trabalho',
        images: [
            excel,
            word,
            access,
            powerpoint
        ],
        texts: [
            {
                title: 'Word, Excel, Power point, Access',
                text: 'Ferramentas online de colaboração e compartilhamento entre times e colaboradores.'
            }
        ]
    },
    {
        icon: <Icon3 />,
        title: 'Ferramentas de colaboração',
        images: [
            teams
        ],
        texts: [
            {
                title: 'Teams',
                text: 'Permitem a realização de reuniões online com os colaboradores e clientes.'
            }
        ]
    },
    {
        icon: <Icon4 />,
        title: 'Nuvem',
        images: [
            onedrive,
            sharepoint
        ],
        texts: [
            {
                title: 'One Drive e SharePoint',
                text: 'Oferecem a oportunidade de ter os documentos armazenados em nuvem, sem a necessidade de grandes investimentos iniciais em infraestrutura de TI, além de ter com segurança, com definição de quais usuários ou grupos podem ter acesso aos documentos e pastas.'
            }
        ]
    },
]