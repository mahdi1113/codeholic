import { Link, Navigate, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axiosClient from "../axios";
import { addUser } from "../redux/loginAction";
import {useEffect, useState} from 'react'

import router from "../router";
export default function DefultLayout() {
    let navigate = useNavigate();
    const dispatch = useDispatch();

    /////////////////////////////////////////
    useEffect(() => {
        axiosClient.post('au')
            .then(response => {
                dispatch(addUser(response.data));
            })
            .catch(error => {
                console.error(error);
            });
    }, [dispatch]);

    /////////////////////////////////////////
    const user = useSelector((state) => state.user);
    // console.log(user);
    const token = localStorage.getItem('token');
    if (!token) {
        return <Navigate to="login" />;
    }

    const [isRoleDropdownOpen, setIsRoleDropdownOpen] = useState(false);
    const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
    const handleRoleMouseEnter = () => {
        setIsRoleDropdownOpen(true);
    };
    const handleRoleMouseLeave = () => {
        setIsRoleDropdownOpen(false);
    };
    const handleUserMouseEnter = () => {
        setIsUserDropdownOpen(true);
    };
    const handleUserMouseLeave = () => {
        setIsUserDropdownOpen(false);
    };
    const logoutUser = function(e){
        e.preventDefault();
        axiosClient.post('/logout').then(res => {
            dispatch(addUser(''))
            localStorage.removeItem('token');
            return navigate('/login')
            // console.log(res);
        })
        .catch(error => {
            alert(JSON.stringify(error))
            console.log(error);
        })
    }
  if(!token)
  return (
    <Navigate to="/login"  />
  );
  else
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
                            
                            
                            <li 
                             className="nav-item dropdown"
                             onMouseEnter={handleUserMouseEnter}
                             onMouseLeave={handleUserMouseLeave}
                             >
                            <a className="nav-link"
                                href="#" id="navbarDarkDropdownMenuLink"
                                role="button" data-bs-toggle="dropdown"
                                aria-expanded="true"
                            >
                                کاربران
                            </a>
                            {isUserDropdownOpen  && (
                            <ul className="dropdown-menu dropdown-menu show p-0 text-center"
                                aria-labelledby="navbarDarkDropdownMenuLink" data-bs-popper="none"
                                onMouseEnter={handleUserMouseEnter}
                                onMouseLeave={handleUserMouseLeave}
                                onClick={handleUserMouseLeave}
                                >
                                <li>
                                    <Link
                                        className="dropdown-item"
                                        to="/AddUser"
                                    >
                                        ثبت کاربر
                                    </Link>
                                </li>
                                <li>
                                <Link
                                    className="dropdown-item"
                                    to="/AddUser"
                                >
                                    مدیریت کاربران
                                </Link>
                                </li>
                            </ul>

                            )}
                            </li>






                             <li 
                             className="nav-item dropdown"
                             onMouseEnter={handleRoleMouseEnter}
                             onMouseLeave={handleRoleMouseLeave}
                             >
                            <a className="nav-link"
                                href="#" id="navbarDarkDropdownMenuLink"
                                role="button" data-bs-toggle="dropdown"
                                aria-expanded="true"
                            >
                                نقش ها
                            </a>
                            {isRoleDropdownOpen  && (
                            <ul className="dropdown-menu dropdown-menu show p-0 text-center"
                                aria-labelledby="navbarDarkDropdownMenuLink" data-bs-popper="none"
                                onMouseEnter={handleRoleMouseEnter}
                                onMouseLeave={handleRoleMouseLeave}
                                onClick={handleRoleMouseLeave}
                                >
                                <li>
                                    <Link
                                        className="dropdown-item"
                                        to="/createRole">ایجاد نقش</Link>
                                </li>
                                <li>
                                    <Link
                                        className="dropdown-item"
                                        to="/editRole">ویرایش نقش</Link>
                                </li>
                            </ul>

                            )}
                            </li>

                            <Link
                                className="nav-link"
                                to="/mails"
                            >
                                نامه ها
                            </Link>

                            <Link
                                className="nav-link"
                                to="/References"
                            >
                                ارجاعات
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
                        <span>!hello {user.name}</span>
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
