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
        </main>

    )

}