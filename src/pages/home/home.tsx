
import { useState, useEffect } from 'react'
import { useAuth } from '../../services/auth'
import { db } from '../../services/firebase'
import { ref, onValue} from 'firebase/database'
import { Link } from 'react-router-dom'

export default function Home() {
    const currentUser = useAuth()
    const [ albums, setAlbums ] = useState([])
    const currentId = currentUser.authUser?.uid
    useEffect(() => {
        const query = ref(db, `users/${currentId}/albums`)
        return onValue(query, (snapshot) => {
            const data = snapshot.val()
            
            if(snapshot.exists()) {
                Object.values(data).map((album) => {
                    setAlbums((albums) => [...albums, album])
                })
            }
        })
    }, [currentUser])

    const renderAlbums = albums.map((albums, index) => {
        console.log(albums)
         return (
            <div className="album-list" key={index}>
                <img src={albums.albumImage} alt="Album image" />
                <p>{albums.albumName}</p>
                <p>{albums.albumArtist}</p>
            </div>
        ) 
    })

    return (
        <>
            <main>
                <li>
                    <Link to='/new-album'>Add Album</Link>
                </li>
                {renderAlbums}
            </main>
        </>
    )
}