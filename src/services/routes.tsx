import {createBrowserRouter} from 'react-router-dom'
import Signup from '../pages/Signup/signup'
import Login from '../pages/Login/login'
import App from '../App'
import Home from '../pages/Home/home'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { path: '', element: <Home /> },
            { path: '', element: <Signup /> },
            { path: '', element: <Login /> },
        ]
        
    }
])