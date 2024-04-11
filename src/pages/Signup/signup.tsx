import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../services/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { getDatabase, ref, set } from 'firebase/database';
import { useFormik } from 'formik'
import { useState } from 'react';

export default function Signup() {
    const [ emailError, setEmailError ]= useState('')
    const navigate = useNavigate()
    const db = getDatabase()

    const validate = values => {
        const errors: any = {}
        if(!values.email) {
            errors.email = 'Required'
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid Email Address'
        }

        if(!values.password) {
            errors.password = 'Required'
        } else if (values.password.length < 6) {
            errors.password = 'Password must be 6 characters or more.'
        }
        return errors
    }
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validate,
        onSubmit: values => {
            createUserWithEmailAndPassword(auth, values.email, values.password)
            .then((userCredential) => {
               set(ref(db, `users/${userCredential.user.uid}`), {
                        email: `${values.email}`
                    })
                navigate('/')
                console.log('test')
            })
            .catch((error) => {
                if(error.code == "auth/email-already-in-use") {
                    setEmailError("Email already in use.")
                }
            })
        }
    })

    return (
        <main className="signup-main">
            <section className='signup-card'>
                <form onSubmit={formik.handleSubmit} className="signup-form">
                    <label htmlFor="email">Email Address </label>
                    <input 
                        id="email"
                        name="email"
                        type="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        />
                    {formik.errors.email ? <div className="formik-email-error">{formik.errors.email as string}</div> : null}
                    {emailError ? <div className="emailUsed-error">{emailError as string}</div> : null}
                    <label htmlFor="password">Password </label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        onChange={formik.handleChange}
                        value={formik.values.password} 
                    />
                    {formik.errors.password ? <div className="formik-password-error">{formik.errors.password as string}</div> : null}
                    <button type="submit" className="signup-btn-submit">Sign Up</button>
                </form>
                <div className="login-redirect">
                    <p>Have an account?</p>
                    <Link to="/login" className="login-link">Log In</Link>
                </div>
            </section>
        </main>
    )
}