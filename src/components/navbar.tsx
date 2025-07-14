import { Link, useNavigate } from 'react-router-dom'
import { auth } from "../services/firebase"
import { signOut } from "firebase/auth"
import { useState } from 'react'


export default function Navbar() {
    const navigate = useNavigate()
    const [showMenu, setShowMenu] = useState(false)
    const signingOut = (e: React.ChangeEvent<any>) => {
        e.preventDefault()
        signOut(auth).then(() => {
        }).catch((error) => {
            console.log(error)
        })
        navigate('/')
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
                    <div className="navbar-logo">
                        <img className='record-image' src='/src/images/vinyl-record.png' />
                        <Link to='/' className="home-link">Record Reserve</Link>
                    </div>
                    <div id="hamburger-menu">
                        <button className="profile-button" onClick={handleNavClick}></button>
                        <div className="nav-links" style={{display: showMenu ? 'block' : 'none'}}>
                            <Link to='/signup' className="nav-link">Sign Up</Link>
                            <Link to='/login' className="nav-link">Log In</Link>   
                            <button className="logout-button" onClick={signingOut}>Log Out</button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
} 
