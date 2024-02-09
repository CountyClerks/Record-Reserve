
import { useState } from 'react'
import { useAuth } from '../../services/auth'
import { db } from '../../services/firebase'
import { ref, get, child } from 'firebase/database'
import { Link } from 'react-router-dom'

export default function Home() {
    const currentUser = useAuth()
    const [ displayName, setDisplayName ] = useState('')
    const dbref = ref(db)
    const currentId = currentUser.authUser?.uid

    // get(child(dbref, `users/${currentId}`)).then((snapshot) => {
    //     const data = snapshot.val()
    //     setDisplayName(data.username)
    // })

    // const profileName = () => {
    //     return (
    //         <h1>Current user is: {displayName ? displayName : ""}</h1>
    //     )
    // } 
    return (
        <>
            <main>
                <li>
                    <Link to='/new-album'>Add Album</Link>
                </li>
            </main>
        </>
    )
}