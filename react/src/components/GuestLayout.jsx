// import { useSelector } from "react-redux";
// import { Navigate, Outlet } from "react-router-dom";

// export default function GuestLayout() {

//     // const token = localStorage.getItem('token');
//     // console.log(token);
//     // if(token){
//     //     console.log('yes');
//     //     return <Navigate to='/' />

//     // }

//     return (
//         <>
//             part of layout
//             <Outlet />
//         </>
//     );
// }


// import { useSelector } from "react-redux";
// import { Navigate, Outlet } from "react-router-dom";

// export default function GuestLayout() {

//     // const token = useSelector((state) => state.token);
//     const token = localStorage.getItem('token');
//     console.log(token);
//     if(token !== null){
//         return <Navigate to='/' />
//     }
//     return (
//         <>
//             part of layout
//             <Outlet />
//         </>
//     );
// }


import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function GuestLayout() {

    // const token = useSelector((state) => state.token);
    // console.log(token);
    const token = localStorage.getItem('token');
    if(token){
        return <Navigate to='/' />
    }

    return (
        <>
            part of layout
            <Outlet />
        </>
    );
}
