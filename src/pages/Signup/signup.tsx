import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { db } from '../../services/firebase'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import 'firebase/firestore'

export default function Signup() {
    const auth = getAuth()
    const [ username, setUsername ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const navigate = useNavigate()

    const register = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user
                const userDoc = doc(db, `users/${user.uid}`)
                function writeNewDoc() {
                    const docData = {
                        userEmail: `${user.email}`,
                        username: username,
                    }
                    setDoc(userDoc, docData)
                }
                writeNewDoc()
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
            <section className="signup-redirect">
                <p>Have an account?</p>
                <Link to="/" className="login-link">Log In</Link>
            </section>
        </main>
    )
}