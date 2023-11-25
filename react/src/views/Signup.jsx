import { useState, useEffect } from "react";
import axiosClient from "../axios";
import { useDispatch, useSelector } from "react-redux";
// import { getById,add } from "../redux/loginAction";
import { addToken } from "../redux/loginAction";
import Tree from "./Role/Tree";
import Swal from 'sweetalert2';

export default function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password_confirmation, setPasswordConfirmation] = useState("");
    const [errors, setErrors] = useState("");
    const [expandedNodes, setExpandedNodes] = useState([]);
    const [selectedNode, setSelectedNode] = useState(null);
    const [data, setData] = useState([]);

    const token = useSelector((state) => state);
    const dispatch = useDispatch();

    console.log(token);
    const fetchData = () => {
        axiosClient
            .get("role")
            .then((res) => {
            setData(res.data);
            })
            .catch((error) => {
                Swal.fire(error.response.data.message);
            });
    };
    useEffect(() => {
        fetchData();
      }, []); // Include selectedNode as a dependency
    const handleSubmit = function (e) {
        e.preventDefault();
        console.log(selectedNode);
        axiosClient
            .post("/addUser", {
                name: name,
                email: email,
                password: password,
                password_confirmation: password_confirmation,
                role_id: selectedNode
            })
            .then((res) => {
                // dispatch(add('aaaa'))
                localStorage.setItem('token',res.data.token)
                dispatch(addToken(res.data.token));
                Swal.fire({
                    icon: 'success',
                    title: 'success',
                    text: 'نقش با موفقیت ایجاد شد',
                  })
            })
            .catch((error) => {
                // setErrors(error.response.data.errors);
                Swal.fire({
                    icon: 'warning',
                    title: 'Warning',
                    text: error.response.data.message || 'There was an error processing your request.',
                });
            });
    };

    const icon = {
        fontSize:
        "10em" /* تغییر اندازه آیکون به دلخواه با استفاده از font-size */,
    };
    return (
        <>
            <div
                className="container d-flex justify-content-center align-items-center"
                style={{ height: "100vh" }}
            >
                <div className="col-md-6">
                    <form
                        className="login-form border rounded p-4"
                        onSubmit={handleSubmit}
                    >
                        {/* <BiUser size={32} className="mb-2" /> */}
                        <i
                            className="bi bi-person-fill-add d-flex justify-content-center"
                            style={icon}
                        ></i>
                        <h2 className="text-center">ثبت نام</h2>
                        <div className="form-group">
                            <label className="m-1">نام کاربری</label>
                            <input
                                type="name"
                                className="form-control"
                                placeholder="نام کاربری"
                                name="name"
                                onChange={(e) => {
                                    setName(e.target.value);
                                }}
                            />
                            {errors.name ? (
                                <span className="text-danger font-size-error">
                                    {errors.name}
                                </span>
                            ) : (
                                ""
                            )}
                        </div>
                        <div className="form-group">
                            <label className="m-1">آدرس ایمیل</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="آدرس ایمیل"
                                name="email"
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                            />
                            {errors.email ? (
                                <span className="text-danger font-size-error">
                                    {errors.email}
                                </span>
                            ) : (
                                ""
                            )}
                        </div>
                        <div className="form-group">
                            <label className="m-1">رمز عبور</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="رمز عبور"
                                name="password"
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                            />
                            {errors.password ? (
                                <span className="text-danger font-size-error">
                                    {errors.password}
                                </span>
                            ) : (
                                ""
                            )}
                        </div>
                        <div className="form-group">
                            <label className="m-1">تکرار رمز عبور</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="رمز عبور"
                                name="password_confirmation"
                                onChange={(e) => {
                                    setPasswordConfirmation(e.target.value);
                                }}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <label
                                htmlFor="exampleSelect"
                                className="mb-1"
                            >
                                    نقش این کاربر را انتخاب کنید
                            </label>

                            <Tree
                            data={data}
                            expandedNodes={expandedNodes}
                            setExpandedNodes={setExpandedNodes}
                            selectedNode={selectedNode}
                            setSelectedNode={setSelectedNode}
                            />

                        </div>
                        <div className="form-group mt-3">
                            <button className="btn btn-primary btn-block">
                                ثبت نام
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
