import { useEffect, useState } from 'react'
import NewWindow from 'react-new-window'
import App from '../../App'
import * as C from './styles'


const WindowController = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [title, setTitle] = useState('')

    const handleOpenOnePage = () => {
        setIsOpen(true)
    }

    useEffect(() => {
        setTitle(document.title)
    }, [])

    return (
        <C.WindowController className='active'>
            <div className="content">
                {/* { isOpen.toString() } - { title } */}
                {!isOpen && 
                    <button onClick={handleOpenOnePage} >Clique para abrir a OnePage</button>
                }

                {isOpen && 
                    <>
                        <p>Aguarde... uma nova janela está sendo carregada.</p>
                        <NewWindow
                            title={`Nova Aba - ${title}`}
                            name={'new-window'}
                            onUnload={() => setIsOpen(false)}
                            features={{
                                width: 1024,
                                height: 768
                            }}
                            >
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