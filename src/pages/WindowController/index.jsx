import { useEffect, useState } from 'react'
import { NewWindow } from 'react-window-open'
import App from '../../App'
import * as C from './styles'


const WindowController = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [title, setTitle] = useState('')

    const handleOpenOnePage = () => {
        console.log('clicou')
        setIsOpen(true)
    }

    useEffect(() => {
        setTitle(document.title)
    }, [])

    return (
        <C.WindowController className=''>
            <div className="content">
                { isOpen.toString() } - { title }
                {!isOpen && 
                    <button onClick={handleOpenOnePage} >Clique para abrir a OnePage</button>
                }

                {isOpen && 
                    <>
                        <p>Aguarde... uma nova janela está sendo carregada.</p>
                        <NewWindow
                            title={title}
                            onClose={() => setIsOpen(false)}>
                            <App />
                        </NewWindow>
                    </>
                }
            </div>
            <div className="idle">
                <App />
            </div>
        </C.WindowController>
    )
}

export default WindowController