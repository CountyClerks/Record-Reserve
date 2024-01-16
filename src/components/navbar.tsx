/*
    Navbar links
        Home
            Create a new character
                Form with character attributes
            Show current character list
        Sign Up
            Firebase username and password
        Log In
            Firebase auth
*/
import { Link } from 'react-router-dom'
export default function Navbar() {
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
                </ul>
            </nav>
        </header>
    )
} 
