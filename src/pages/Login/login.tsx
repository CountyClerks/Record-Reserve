import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../services/firebase'
import { useFormik } from 'formik'
import { useState } from 'react'

export default function Login() {
    const [ loginErrors, setLoginErrors ] = useState('')
    const navigate = useNavigate()

    const validate = values => {
        const errors: any = {}
        if(!values.email) {
            errors.email = 'Required'
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid Email Address'
        }

        if(!values.password) {
            errors.password = 'Required'
        }
        return errors
    }

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validate,
        onSubmit: values => {
            signInWithEmailAndPassword(auth, values.email, values.password)
            .then(() => {
                navigate('/')
            })
            .catch((error) => {
                console.log(error.code)
                if(error.code == "auth/invalid-credential") {
                    setLoginErrors('Invalid login attempt.')
                }
            })
        }
    })

    return (
        <main>
            <section className='login-card'>
                <form onSubmit={formik.handleSubmit}>
                    <label htmlFor="email">Email Address </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        onChange={formik.handleChange}
                        value={formik.values.email} 
                    />
                    {formik.errors.email ? <div>{formik.errors.email as string}</div> : null}
                    {loginErrors ? <div className="login-error">{loginErrors as string}</div> : null}
                    <label htmlFor="password">Password </label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        onChange={formik.handleChange}
                        value={formik.values.password} 
                    />
                    {formik.errors.password ? <div>{formik.errors.password as string}</div> : null}
                    <button type="submit">Log In</button>
                </form>
            </section>
            <section className="signup-redirect">
                <p>Don't have an account?</p>
                <Link to="/signup" className="signup-link">Log In</Link>
            </section>
        </main>
    )
}