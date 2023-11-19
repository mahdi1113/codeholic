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
import EditRole from './views/Role/EditRole';
import PopupForm from './views/Role/EditRoleModal';

const tr = ['dashboard','surveys','signUp'];

const route1 = [
    {
        path: 'dashboard',
        element: <Dashboard />,
        name: 'داشبورد'
    },
    {
        path: 'surveys',
        element: <Surveys />
    },
    // {
    //     path: 'test',
    //     element: <Test />
    // },
    {
        path: 'createRole',
        element: <CreateRole />
    },
    {
        path: 'editRole',
        element: <EditRole />
    },
    {
        path: 'testrole',
        element: <PopupForm />
    },
    {
        path: 'signUp',
        element: <SignUp />
    },
]

const router2 = [
    {
        path: 'Login',
        element: <Login />
    },
]

const matchingRoutes = route1.filter(route => tr.includes(route.path));

const router = createBrowserRouter([
    {
      path: '/',
      element: <DefultLayout />,
      children: matchingRoutes,
    },
    {
      path: '/',
      element: <GuestLayout />,
      children: router2,
    },
  ]);



export default router;
