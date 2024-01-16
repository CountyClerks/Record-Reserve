import { Link, useNavigate } from 'react-router-dom'
export default function Signup() {
    return (
        <main>
            <section className='signup-card'>
                <form className='signup-form'>
                    <input
                        type="text"
                        placeholder="Username"
                        className="signup-input"
                        value={}
                        required/>
                    <input
                        type="password"
                        placeholder="Password"
                        className="signup-input"
                        value={}
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