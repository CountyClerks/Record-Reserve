import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../services/firebase'

export default function Login() {

    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const navigate = useNavigate()

    const signIn = (e: React.ChangeEvent<any>) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

            })
            .catch((error) => {
                console.log(error)
            })
        navigate('/')
    }
    return (
        <main>
            <section className='login-card'>
                <form className='login-form' onSubmit={signIn}>
                    <input 
                        type="email"
                        placeholder="Email"
                        className="login-input"
                        onChange={(e) => setEmail(e.target.value)}
                        required/>
                    <input 
                        type="password"
                        placeholder="Password"
                        className="login-input"
                        onChange={(e) => setPassword(e.target.value)}
                        required/>
                    <button type="submit" className="login-button">Log In</button>
                </form>
            </section>
            <section className="signup-redirect">
                <p>Don't have an account??</p>
                <Link to="/signup" className="signup-link">Log In</Link>
            </section>
        </main>
    )
}