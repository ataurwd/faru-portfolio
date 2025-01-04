import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './../layout/Layout';
import Home from '../pages/Home';
import MySkills from '../pages/MySkills';

const Routes = () => {
    const route = new createBrowserRouter([
        {
            path: '/',
            element: <Layout />,
            children: [
                {
                    path: '/',
                    element: <Home/>
                },
                {
                    path: '/skills',
                    element: <MySkills/>
                }
            ]
        }
    ])
    return (
        <RouterProvider router={route}/>
    );
};

export default Routes;