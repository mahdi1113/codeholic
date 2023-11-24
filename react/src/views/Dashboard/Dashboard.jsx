import { useSelector } from "react-redux";
import PageComponent from "../../components/PageComponent";

export default function Dashboard() {
    const user = useSelector((state) => state.user);
    console.log(user);
    return (

        <PageComponent title="Dashboard">محتوای داشبورد</PageComponent>

    );
}
