import { useSelector } from "react-redux";
import PageComponent from "../../components/PageComponent";
import { useEffect } from "react";

export default function Dashboard() {


//     useEffect(() => {
//     // اگر داده از سرور دریافت شده باشد، از آن در state استفاده کنید
//     if (user && Object.keys(user).length > 0) {
//         console.log(user.email);
//     }
// }, [user]); // این useEffect هر بار که user تغییر کند اجرا می‌شود
const user = useSelector((state) => state.user);
    return (

        <>
        <PageComponent title="Dashboard">محتوای داشبورد</PageComponent>
        <h1>{user.name}</h1>
        </>


    );
}
