import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-rtl/dist/css/bootstrap-rtl.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import router from './router.jsx';
import { RouterProvider } from 'react-router-dom';
import { Provider } from "react-redux";
import store from './redux/loginAction.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,

)
