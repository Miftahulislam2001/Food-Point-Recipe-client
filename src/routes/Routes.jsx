
import { createBrowserRouter } from 'react-router-dom';
import Admin from '../Admin/Admin';

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Admin/>,

       
    }
])

export default Routes;