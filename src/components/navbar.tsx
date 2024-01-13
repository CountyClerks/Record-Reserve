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
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/signup'>Sign Up</Link>
            <Link to='/login'>Log In</Link>
        </nav>
    )
} 
