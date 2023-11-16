
import {createBrowserRouter} from 'react-router-dom'
import App from './App';

import Dashboard from './views/Dashboard';
import SignUp from './views/Signup';
import Surveys from './views/Surveys';
import Login from './views/Login';
import GuestLayout from './components/GuestLayout';
import { Children } from 'react';
import DefultLayout from './components/DefultLayout';
import Test from './views/Test';
import CreateRole from './views/Role/CreateRole';

const router = createBrowserRouter([

    {
        path: '/',
        element: <DefultLayout />,
        children: [
            {
                path: 'dashboard',
                element: <Dashboard />
            },

            {
                path: 'surveys',
                element: <Surveys />
            },
            {
                path: 'test',
                element: <Test />
            },
            

        ]
    },

    {
        path: '/',
        element: <GuestLayout />,
        children: [

            {
                path: 'signUp',
                element: <SignUp />
            },

            {
                path: 'Login',
                element: <Login />
            },
            {
                path: 'createRole',
                element: <CreateRole />
            }
        ]
    }
]);

export default router;
