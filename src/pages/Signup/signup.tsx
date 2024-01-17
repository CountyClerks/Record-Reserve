import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { auth } from '../../services/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { getDatabase, ref, set } from "firebase/database";

export default function Signup() {
    const [ username, setUsername ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const navigate = useNavigate()
    const db = getDatabase()
    const register = (e: React.ChangeEvent<any>) => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
               set(ref(db, `users/${userCredential.user.uid}`), {
                        username: username,
                        email: `${email}`
                    })
            })
            .catch((error: string) => {
                console.log(error)
            })
        navigate('/')
    }

    return (
        <main>
            <section className='signup-card'>
                <form className='signup-form' onSubmit={register}>
                    <input
                        type="text"
                        placeholder="Username"
                        className="signup-input"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required/>
                    <input
                        type="email"
                        placeholder="Email"
                        className="signup-input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required/>
                    <input
                        type="password"
                        placeholder="Password"
                        className="signup-input"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required/>
                    <button type="submit" className="signup-button">Sign Up</button>
                </form>
            </section>
            <section className="login-redirect">
                <p>Have an account?</p>
                <Link to="/login" className="login-link">Log In</Link>
            </section>
        </main>
    )
}