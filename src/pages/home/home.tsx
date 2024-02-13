
import { useState, useEffect } from 'react'
import { useAuth } from '../../services/auth'
import { db } from '../../services/firebase'
import { ref, get, child } from 'firebase/database'
import { Link } from 'react-router-dom'

export default function Home() {
    const currentUser = useAuth()
    const [ albumList, setAlbumList ] = useState([])
    const dbref = ref(db)
    const currentId = currentUser.authUser?.uid
    let index
    // useEffect(() => {
    //     //READING NULL FOR SOME REASON
    //     const getAlbumList = get(child(dbref, `users/${currentId}/albums`)).then((snapshot) => {
    //             const data = snapshot.val()
    //             console.log(data)
    //             setAlbumList(data)
    //         })
    //     getAlbumList
    // }, [])
    const getAlbumList = get(child(dbref, `users/${currentId}/albums`)).then((snapshot) => {
        const data = snapshot.val()
        setAlbumList(data)
    })
    getAlbumList
    const renderAlbums = albumList.map((albumList, index) => {
        console.log(albumList)
         return (
            <div className="album-list" key={index}>
                <img src={albumList.albumImage} alt="Album image" />
                <p>{albumList.albumName}</p>
                <p>{albumList.albumArtist}</p>
            </div>
        ) 
    })
    // function renderAlbums(albumList, index, currentUser) {
    //     console.log(albumList)
    //     if(currentUser == null) {
    //         return(
    //             <p>Hi</p>
    //         )
    //     } else {
    //         getAlbumList
    //         return (
    //             <div className="album-list" key={index}>
    //                 <img src={albumList[index].albumImage}/>
    //                 <p>{albumList.albumName}</p>
    //                 {/* <p>{albumList.albumArtist}</p> */}
    //             </div>
    //         )
    //     }
    // }
    return (
        <>
            <main>
                <li>
                    <Link to='/new-album'>Add Album</Link>
                </li>
                {/* {renderAlbums(albumList, index, currentUser)} */}
                {renderAlbums}
            </main>
        </>
    )
}