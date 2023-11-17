// import { Link, Navigate, Outlet } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// // import { useSelector, useDispatch } from "react-redux";
// import axiosClient from "../axios";
// // import { addToken } from "../redux/loginAction";
// export default function DefultLayout() {

//     // let navigate = useNavigate();
//     // const dispatch = useDispatch();
//     // const token = useSelector((state) => state.token);
//     const token = localStorage.getItem("token");
//     console.log(token);
//     console.log('salam');
//     // if (!token) {
//     //     console.log('no');
//     //     return <Navigate to="/Login" />;
//     // }

//     const logoutUser = function(e){
//         e.preventDefault();
//         axiosClient.post('/logout').then(res => {
//             dispatch(addToken(''))
//             localStorage.removeItem('token');
//         }).then(res => {
//             console.log(res);
//         }).catch(error => {
//             console.log(error);
//         })
//     }

//     return (
//         <>
//             <nav className="navbar navbar-expand-lg navbar-light bg-light">
//                 <div className="container">
//                     <a className="navbar-brand" to="#">
//                         MME
//                     </a>
//                     <button
//                         className="navbar-toggler"
//                         type="button"
//                         data-toggle="collapse"
//                         data-target="#navbarNavAltMarkup"
//                         aria-controls="navbarNavAltMarkup"
//                         aria-expanded="false"
//                         aria-label="Toggle navigation"
//                     >
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div
//                         className="collapse navbar-collapse"
//                         id="navbarNavAltMarkup"
//                     >
//                         <div className="navbar-nav">
//                             <Link className="nav-item nav-link active" to="/">
//                                 خانه
//                             </Link>
//                             <Link className="nav-item nav-link" to="/dashboard">
//                                 داشبورد
//                             </Link>
//                             <Link
//                                 className="nav-item nav-link d-flex"
//                                 to="/surveys"
//                             >
//                                 نظر سنجی ها
//                             </Link>
//                             <Link
//                                 className="nav-item nav-link d-flex"
//                                 to="/createRole"
//                             >
//                                 نقش ها
//                             </Link>
//                             <Link
//                                 className="nav-link"
//                                 onClick={(e) => logoutUser(e)}
//                             >
//                                 خروج
//                             </Link>
//                         </div>
//                     </div>
//                     <div className="d-flex" role="search">
//                         <span>!hello mahdi</span>
//                         <i
//                             className="bi bi-person-circle me-2"
//                             style={{ fontSize: "18px" }}
//                         ></i>
//                     </div>
//                 </div>
//             </nav>

//             <Outlet />
//         </>
//     );
// }




// import { Link, Navigate, Outlet } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import axiosClient from "../axios";
// import { addToken } from "../redux/loginAction";
// export default function DefultLayout() {

//     let navigate = useNavigate();
//     const dispatch = useDispatch();
//     // const token = useSelector((state) => state.token);
//     const token = localStorage.getItem('token');
//     console.log(token);
//     if (token === null) {
//         return <Navigate to="login" />;
//         // console.log('yes');
//     }

//     const logoutUser = function(e){
//         e.preventDefault();
//         axiosClient.post('/logout').then(res => {
//             dispatch(addToken(''))
//             localStorage.removeItem('token');
//             return navigate('/login')
//         }).then(res => {
//             console.log(res);
//         }).catch(error => {
//             console.log(error);
//         })
//     }

//     return (
//         <>
//             <nav className="navbar navbar-expand-lg navbar-light bg-light">
//                 <div className="container">
//                     <a className="navbar-brand" to="#">
//                         MME
//                     </a>
//                     <button
//                         className="navbar-toggler"
//                         type="button"
//                         data-toggle="collapse"
//                         data-target="#navbarNavAltMarkup"
//                         aria-controls="navbarNavAltMarkup"
//                         aria-expanded="false"
//                         aria-label="Toggle navigation"
//                     >
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div
//                         className="collapse navbar-collapse"
//                         id="navbarNavAltMarkup"
//                     >
//                         <div className="navbar-nav">
//                             <Link className="nav-item nav-link active" to="/">
//                                 خانه
//                             </Link>
//                             <Link className="nav-item nav-link" to="/dashboard">
//                                 داشبورد
//                             </Link>
//                             <Link
//                                 className="nav-item nav-link d-flex"
//                                 to="/surveys"
//                             >
//                                 نظر سنجی ها
//                             </Link>
//                             <Link
//                                 className="nav-item nav-link d-flex"
//                                 to="/createRole"
//                             >
//                                 نقش ها
//                             </Link>
//                             <Link
//                                 className="nav-link"
//                                 onClick={(e) => logoutUser(e)}
//                             >
//                                 خروج
//                             </Link>
//                         </div>
//                     </div>
//                     <div className="d-flex" role="search">
//                         <span>!hello mahdi</span>
//                         <i
//                             className="bi bi-person-circle me-2"
//                             style={{ fontSize: "18px" }}
//                         ></i>
//                     </div>
//                 </div>
//             </nav>

//             <Outlet />
//         </>
//     );
// }


import { Link, Navigate, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axiosClient from "../axios";
import { addToken } from "../redux/loginAction";
export default function DefultLayout() {

    let navigate = useNavigate();
    // const dispatch = useDispatch();
    // const token = useSelector((state) => state.token);
    const token = localStorage.getItem('token');
    console.log(token);
    if (!token) {
        return <Navigate to="login" />;
    }

    const logoutUser = function(e){
        e.preventDefault();
        axiosClient.post('/logout').then(res => {
            // dispatch(addToken(''))
            localStorage.removeItem('token');
            return navigate('/login')
        }).then(res => {
            console.log(res);
        }).catch(error => {
            console.log(error);
        })
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand" to="#">
                        MME
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarNavAltMarkup"
                    >
                        <div className="navbar-nav">
                            <Link className="nav-item nav-link active" to="/">
                                خانه
                            </Link>
                            <Link className="nav-item nav-link" to="/dashboard">
                                داشبورد
                            </Link>
                            <Link
                                className="nav-item nav-link d-flex"
                                to="/surveys"
                            >
                                نظر سنجی ها
                            </Link>
                            <Link
                                className="nav-item nav-link d-flex"
                                to="/createRole"
                            >
                                نقش ها
                            </Link>
                            <Link
                                className="nav-link"
                                onClick={(e) => logoutUser(e)}
                            >
                                خروج
                            </Link>
                        </div>
                    </div>
                    <div className="d-flex" role="search">
                        <span>!hello mahdi</span>
                        <i
                            className="bi bi-person-circle me-2"
                            style={{ fontSize: "18px" }}
                        ></i>
                    </div>
                </div>
            </nav>

            <Outlet />
        </>
    );
}
