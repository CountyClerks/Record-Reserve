import { Link } from 'react-router-dom'
import { auth } from "../services/firebase"
import { signOut } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import profileImg from "../images/user.svg"
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
                        <img src={profileImg} className="profile-image"/>
                    </li>
                </ul>
                <div className="hamburger-menu">
                    <Link to='/signup' className="nav-link">Sign Up</Link>
                    <Link to='/login' className="nav-link">Log In</Link>    
                    <button type="button" className="log-out-btn" onClick={signingOut}>Log Out</button>
                </div>
            </nav>
        </header>
    )
} 
