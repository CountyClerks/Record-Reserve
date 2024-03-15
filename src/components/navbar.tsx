import { Link } from 'react-router-dom'
import { auth } from "../services/firebase"
import { signOut } from "firebase/auth"
import profileImg from "../images/user.svg"
import { useState } from 'react'

export default function Navbar() {

    const [showMenu, setShowMenu] = useState(false)
    const signingOut = (e: React.ChangeEvent<any>) => {
        e.preventDefault()
        signOut(auth).then((
        ) => {
        }).catch((error) => {
            console.log(error)
        })
        window.location.reload()
    }

    const handleNavClick = () => {
        if(showMenu === true) {
            setShowMenu(false)
        } else if (showMenu === false) {
            setShowMenu(true)
        }
    }
    return (
        <header>
            <nav>
                <div className="navbar">
                    <Link to='/' className="nav-link">Record Reserve</Link>
                    <div id="hamburger-menu">
                        <img src={profileImg} className="profile-image" onClick={handleNavClick}/>
                        <div className="nav-links" style={{display: showMenu ? 'block' : 'none'}}>
                            <Link to='/signup' className="nav-link">Sign Up</Link>
                            <Link to='/login' className="nav-link">Log In</Link>   
                            <Link to="/" className="nav-link" onClick={signingOut}>Log Out</Link> 
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
} 
