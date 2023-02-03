// Icons
import logo from '../assets/images/horizontalAccordion/logo.png'

const colors = {
    lightBlue: 'rgba(0, 177, 244, 1)',
    orange: 'rgba(255, 134, 1, 1)',
    red: 'rgba(255, 28, 55, 1)',
    green: 'rgba(154,204,52, 1)',
    yellow: 'rgba(251,212,69, 1)'
}

export const data = [
    {
        orientation: 'left',
        image: logo,
        description: 'Operamos ao redor do globo em mais de 140 países e mais regiões do que qualquer outro fornecedor.',
        color: colors.green
    },
    {
        orientation: 'right',
        image: logo,
        description: 'Através da inovação constante, o Azure oferece uma solução segura, confiável e sustentável.',
        color: colors.yellow
    },
    {
        orientation: 'left',
        image: logo,
        description: 'O Cloud Azure apresenta como característica principal a alta escalabilidade para as aplicações e recursos, através de milhares de máquinas (hardware) disponíveis em data centers espalhados por várias regiões do mundo.',
        color: colors.yellow
    },
    {
        orientation: 'right',
        image: logo,
        description: 'Data centers ajudam a conectar e capacitar nossas vidas diárias, com centenas deles armazenando e gerenciando dados em todo o mundo.',
        color: colors.red
    },
    {
        orientation: 'left',
        image: logo,
        description: 'Os data centers do Azure são edifícios físicos localizados em todo o mundo, abrigando um grupo de servidores de computadores em rede – cada um equipado com energia, refrigeração e rede independentes.',
        color: colors.red
    },
    {
        orientation: 'right',
        image: logo,
        description: 'O Azure oferece aos clientes a flexibilidade de implantar aplicativos no lugar que eles precisam.',
        color: colors.red
    },
]