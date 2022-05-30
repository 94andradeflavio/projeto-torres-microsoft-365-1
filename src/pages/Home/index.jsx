import { useEffect, useState } from "react"
import useScorm from "../../hooks/useScorm"

import './index.css'

const Home = () => {
    const { scorm } = useScorm()
    const [name, setName] = useState('')
    const [nota, setNota] = useState('')
    const [passed, setPassed] = useState(false)

    const handleName = () => {
        setName(scorm.getLearnerName() === 'null' ? 'anônimo' : scorm.getLearnerName())
    }

    const handleScore = (ev) => {
        setNota(Math.trunc(ev.target.value))
        setPassed(nota >= 80 ? true : false)

        scorm.setScore(nota)
    }

    useEffect(() => {
        setName(scorm.getLearnerName() === 'null' ? 'anônimo' : scorm.getLearnerName())
        setNota(scorm.getScore() === 'null' ? '0' : scorm.getScore())
    },[scorm])
    
    useEffect(() => {
        setPassed(nota >= 80 ? true : false)
    }, [nota])

    return (
        <div>
            <h1>Bem-vindo a página home</h1>
            <p><button onClick={handleName}>Clique aqui para mostrar seu nome</button>: <strong>{name}</strong></p>
            <p>Sua nota atual é: <strong className={passed ? 'nota passed' : 'nota'}>{nota}%</strong></p>
            <input type="range" min="0" max="100" value={nota} onChange={handleScore} onClick={handleScore} />
        </div>
    )
}

export default Home