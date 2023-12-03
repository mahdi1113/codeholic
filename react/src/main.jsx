import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-rtl/dist/css/bootstrap-rtl.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';
import '@coreui/coreui-pro/dist/css/coreui.min.css'
// import router from './router.jsx';
import router from './router.jsx';
import { RouterProvider } from 'react-router-dom';
import { Provider } from "react-redux";
import store from './redux/loginAction.jsx';

// console.log(router.routes[0].children[0].path);

// const arr = ['test','test2','test3'];
// console.log(router.routes[0].children.length);
// console.log(arr.length);
// router.routes[0].children.for(let i = 0 , i < 4 , i ++){

// }

// const t = router.routes[0].children.filter((item,index) => {
//     return item.path !== 'signUp';
// });
// console.log(t);

// for (let i = 0; i < router.routes[0].children.length; i++) {
//     for(let k = 0; k < arr.length ; k++)
//     {
//         if(router.routes[0].children[i].path === arr[k])
//         {
//             console.log(router.routes[0].children[i].path);
//         }else{
//             console.log('noooooo');
//         }
//     }
//   }

// if(router.routes[0].children)

// console.log(router.routes[0]);
// const r = '';
// if(router.routes[0].children[0].path === 'dashboard')
// {
//     r =
// }else{
//     console.log('no');
// }
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}  />
    </Provider>
  </React.StrictMode>,

)
