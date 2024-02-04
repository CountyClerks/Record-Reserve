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
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/signup'>Sign Up</Link>
                    </li>
                    <li>
                        <Link to='/login'>Log In</Link>
                    </li>
                    <li>
                        <button type="button" onClick={signingOut}>Log Out</button>
                    </li>
                </ul>
            </nav>
        </header>
    )
} 
