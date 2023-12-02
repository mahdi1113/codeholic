import {createBrowserRouter} from 'react-router-dom'
import App from './App';
import Dashboard from './views/Dashboard/Dashboard';
import AddUser from './views/Users/AddUser';
import Surveys from './views/Surveys/Surveys';
import Login from './views/Login';
import GuestLayout from './components/GuestLayout';
import { Children } from 'react';
import DefultLayout from './components/DefultLayout';
import Test from './views/Test';
import CreateRole from './views/Role/CreateRole';
import EditRole from './views/Role/EditRole';
import Mails from './views/Mails/Mails';
import PopupForm from './views/Role/EditRoleModal';

// const tr = ['dashboard','surveys','signUp'];

const route1 = [
    {
        path: 'Dashboard',
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
    {
        path: 'createRole',
        element: <CreateRole />
    },
    {
        path: 'editRole',
        element: <EditRole />
    },
    {
        path: 'mails',
        element: <Mails />
    },
    {
        path: 'testrole',
        element: <PopupForm />
    },
    {
        path: 'AddUser',
        element: <AddUser />
    },
]

const router2 = [
    {
        path: 'Login',
        element: <Login />
    },
]

// const matchingRoutes = route1.filter(route => tr.includes(route.path));

const router = createBrowserRouter([
    {
      path: '/',
      element: <DefultLayout />,
      children: route1,
    },
    {
      path: '/',
      element: <GuestLayout />,
      children: router2,
    },
  ]);



export default router;
