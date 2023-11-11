import { useState } from "react";
import axiosClient from "../axios";
import { useDispatch, useSelector } from "react-redux";
// import { getById,add } from "../redux/loginAction";
import { addToken } from "../redux/loginAction";

export default function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password_confirmation, setPasswordConfirmation] = useState("");
    const [errors, setErrors] = useState("");

    const token = useSelector((state) => state);
    const dispatch = useDispatch();

    console.log(token);

    const handleSubmit = function (e) {
        e.preventDefault();

        axiosClient
            .post("/signup", {
                name: name,
                email: email,
                password: password,
                password_confirmation: password_confirmation,
            })
            .then((res) => {
                // dispatch(add('aaaa'))
                localStorage.setItem('token',res.data.token)
                dispatch(addToken(res.data.token));
                console.log(res.data);
            })
            .catch((error) => {
                setErrors(error.response.data.errors);
                console.log(error.response);
            });
    };

    const icon = {
        fontSize:
            "10em" /* تغییر اندازه آیکون به دلخواه با استفاده از font-size */,
    };
    return (
        <>
             {/* <h3>Counter : {pro}</h3> */}
            {/* <button
                className="btn btn-primary me-2"
                onClick={() =>
                    dispatch(add({ id: 10, title: "aa", price: 500 }))
                }
            >
                Increase
            </button>{" "}

            <button
                className="btn btn-warning me-2"
                onClick={() => dispatch(logout())}
            >
                Decrease
            </button> */}
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
