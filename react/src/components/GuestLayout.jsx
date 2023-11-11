import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function GuestLayout() {

    const token = useSelector((state) => state.token);
    // console.log(token);
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
