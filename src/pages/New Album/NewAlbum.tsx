import { useState } from 'react'
export default function AddAlbum() {

    const [albumsFound, setAlbumsFound] = useState([])
    const [albumDetails, setAlbumDetails] = useState([])
    const [album, setAlbum] = useState('')

    const findAlbum = async (e) => {
        e.preventDefault()
        const fetchAlbum = await fetch(`https://ws.audioscrobbler.com/2.0/?method=album.search&album=${album}&api_key=${import.meta.env.VITE_LASTFM_API_KEY}&format=json`)
        const albumData = await fetchAlbum.json()
        setAlbumsFound(albumData.results.albummatches.album)
    }

    const addAlbumToList = (album) => {
        setAlbumDetails(album)
        console.log(albumDetails)
    }
    const listAlbums = albumsFound.map((album, index) => {
        return (
            <div className="album-list" key={index}>
                <p>{album.name}</p>
                <p>{album.artist}</p>
                <button className="add-album-btn" onClick={() => {addAlbumToList(album)}}>Add Album</button>
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