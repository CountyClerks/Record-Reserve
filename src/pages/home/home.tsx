
import { useState, useEffect } from 'react'
import { useAuth } from '../../services/auth'
import { db } from '../../services/firebase'
import { ref, onValue, remove } from 'firebase/database'
import { Link } from 'react-router-dom'

export default function Home() {
    const currentUser = useAuth()
    const [ albums, setAlbums ] = useState([])
    const [albumKeys, setAlbumKeys] = useState([])
    const currentId = currentUser.authUser?.uid
    useEffect(() => {
        const query = ref(db, `users/${currentId}/albums`)
        return onValue(query, (snapshot) => {
            const data = snapshot.val()
            if( snapshot.val() === null) {
                return null
            } else {
                let albumObj = Object.entries(snapshot.val())
                setAlbumKeys(albumObj)
            }
            if(snapshot.exists()) {
                Object.values(data).map((album) => {
                    setAlbums((albums) => [...albums, album])
                })
            }
        })
    }, [currentUser])

    const deleteAlbum = (albumKey) => {
        remove(ref(db, `users/${currentId}/albums/${albumKey}`))
    }
    const renderAlbums = albums.map((albums, index) => {
        let albumKey = albumKeys[index][0]
        if(albums) {
            return (
                <div className="album-list" key={index}>
                    <img src={albums.albumImage} alt="Album image" />
                    <p>{albums.albumName}</p>
                    <p>{albums.albumArtist}</p>
                    <button type="button" className="delete-album-btn" onClick={() => {deleteAlbum(albumKey)}}>Delete Album</button>
                </div>
            ) 
        } else if(albums.length = 0) {
            return (
                <p>There are no albums saved.</p>
            )
        } else {
            return (
                <p>Loading...</p>
            )
        }
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