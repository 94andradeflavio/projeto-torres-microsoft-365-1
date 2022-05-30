import { Link } from "react-router-dom"
import './navigation.css'

const Navigation = () => {

    return (
        <header>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/testerota'>Teste de rota</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navigation