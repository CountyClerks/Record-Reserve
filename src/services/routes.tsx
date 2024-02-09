import {createBrowserRouter} from 'react-router-dom'
import Signup from '../pages/Signup/SignUp'
import Login from '../pages/Login/Login'
import App from '../App'
import Home from '../pages/Home/Home'
import NewAlbum from '../pages/New Album/NewAlbum'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { path: '', element: <Home /> },
            { path: 'signup', element: <Signup /> },
            { path: 'login', element: <Login /> },
            { path: 'new-album', element: <NewAlbum />},
        ]
    }
])