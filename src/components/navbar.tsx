import { Link } from 'react-router-dom'
import { auth } from "../services/firebase"
import { signOut } from "firebase/auth"
import { useNavigate } from "react-router-dom"
export default function Navbar() {

    const navigate = useNavigate()
    const signingOut = (e: React.ChangeEvent<any>) => {

        e.preventDefault()

        signOut(auth).then(() => {
        }).catch((error) => {
            console.log(error)
        })
        navigate('/')
    }
    return (
        <header>
            <nav>
                <ul className="nav-list">
                    <li>
                        <Link to='/' className="nav-link">Home</Link>
                    </li>
                    <li>
                        <Link to='/signup' className="nav-link">Sign Up</Link>
                    </li>
                    <li>
                        <Link to='/login' className="nav-link">Log In</Link>
                    </li>
                    <li>
                        <button type="button" className="log-out-btn" onClick={signingOut}>Log Out</button>
                    </li>
                </ul>
            </nav>
        </header>
    )
} 
