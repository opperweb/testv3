import './styles.css'
import { Link } from "react-router-dom"

export default function Login() {
    return(<div>
        <div className="form">
            <h1 id='title'>North Soft</h1>
            <p id='text'>Bienvenido de vuelta exelente día</p>
            <input type="text" className='input' placeholder=' Username' />
            <input type="text" className='input' placeholder=' Password' />
        
            <Link to="home" className='login-btn'>login</Link>
        </div>
    </div>)
}