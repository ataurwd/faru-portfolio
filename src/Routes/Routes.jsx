import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './../layout/Layout';
import Home from '../pages/Home';
import MySkills from '../pages/MySkills';
import Project from '../pages/Project';
import Contact from '../pages/Contact';

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
                },
                {
                    path: '/project',
                    element: <Project/>
                },
                {
                    path: '/contact',
                    element: <Contact/>
                }
            ]
        }
    ])
    return (
        <RouterProvider router={route}/>
    );
};

export default Routes;