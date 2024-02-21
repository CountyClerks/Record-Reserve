import { useState } from 'react'
import { getDatabase, ref, set, get, child, push, update } from 'firebase/database'
import { auth } from '../../services/firebase'

export default function AddAlbum() {
    
    const [albumsFound, setAlbumsFound] = useState([])
    const [album, setAlbum] = useState('')
    const db = getDatabase()

    const findAlbum = async (e) => {
        e.preventDefault()
        const fetchAlbum = await fetch(`https://ws.audioscrobbler.com/2.0/?method=album.search&album=${album}&api_key=${import.meta.env.VITE_LASTFM_API_KEY}&format=json`)
        const albumData = await fetchAlbum.json()
        setAlbumsFound(albumData.results.albummatches.album)
    }

    const addAlbumToList = (album, index) => {
        if(!auth) {
            get(child(ref(db), `users/${auth.currentUser.uid}/albums/`)).then((snapshot) => {
                if(snapshot.exists()) {
                    const albumData = {
                        albumName: album.name,
                        albumArtist: album.artist,
                        albumImage: album.image[2]["#text"]
                    }
                    const newAlbumKey = push(child(ref(db), `users/${auth.currentUser.uid}/albums/`)).key
                    const updates = {}
                    updates[`users/${auth.currentUser.uid}/albums/` + newAlbumKey] = albumData
                    update(ref(db), updates)
                    console.log(updates)
                }else {
                    set(ref(db, `users/${auth.currentUser.uid}/albums/${index}`), {
                        albumName: album.name,
                        albumArtist: album.artist,
                        albumImage: album.image[2]["#text"]
                    })
                }
            })
        } else {
            alert('You are not logged in.')
        }
    }

    const listAlbums = albumsFound.map((album, index) => {
        return (
            <div className="album-list" key={index}>
                <img src={album.image[2]["#text"]} alt="Album image" />
                <p>{album.name}</p>
                <p>{album.artist}</p>
                <button className="add-album-btn" onClick={() => {addAlbumToList(album, index)}}>Add Album</button>
            </div>
        )
    })
    return (
        <>
            <section className="new-album-card">
                <form className="find-album" onSubmit={findAlbum}>
                    <input
                        type="text"
                        placeholder="Album Name"
                        className="find-album-name"
                        onChange={(e) => setAlbum(e.target.value)}/>
                    <button type="submit">Find Album</button>
                </form>
                <div className="album-list">
                    {listAlbums}
                </div>
            </section>
        </>
    )
}