
import { createBrowserRouter } from 'react-router-dom';
import Admin from '../Admin/Admin';
import Blog from '../Pages/Blog/Blog';
import Register from '../Pages/Register/Register';
import LogIn from '../Pages/Login/LogIn';
import Home from '../components/Home/Home';
import ErrorPage from '../Pages/Error/ErrorPage';


const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Admin/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/blog",
                element: <Blog/>
            },
            {
                path: "/register",
                element: <Register/>
            },
            {
                path: "/login",
                element: <LogIn/>
            },

        ]
       
    }
])

export default Routes;