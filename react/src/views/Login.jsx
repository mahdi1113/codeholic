import { useState } from "react";
import axiosClient from "../axios";
import { useDispatch, useSelector } from "react-redux";
import { addToken } from "../redux/loginAction";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState("");
    const [unauthorized, setUnauthorized] = useState("");

    const token = useSelector((state) => state);
    const dispatch = useDispatch();

    const cursorP = {
        cursor: 'pointer',
      };

    const handleSubmit = function (e) {
        e.preventDefault();

        axiosClient
            .post("/login", {
                email: email,
                password: password,
            })
            .then((res) => {
                localStorage.setItem("token", res.data.token);
                dispatch(addToken(res.data.token));
                console.log(res.data);
            })
            .catch((error) => {
                if (error.response.status === 401) {
                    setUnauthorized("نام کاربری یا رمز عبور اشتباه است");
                }else{
                    setErrors(error.response.data.errors);
                }
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
                        onSubmit={handleSubmit}
                        className="login-form border rounded p-4"
                    >
                        {/* <BiUser size={32} className="mb-2" /> */}
                        <i
                            className="bi bi-person d-flex justify-content-center"
                            style={icon}
                        ></i>
                        <h2 className="text-center">ورود</h2>
                        {unauthorized ? (
                        <div className="alert alert-danger w-100" role="alert">
                            {unauthorized}
                            <i
                                className="bi bi-x"
                                style={cursorP}
                                onClick={() => setUnauthorized(false)}
                            ></i>
                        </div>
                    ) : (
                        ""
                    )}

                        <div className="form-group">
                            <label className="m-1">آدرس ایمیل:</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="آدرس ایمیل"
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
                            <label className="m-1">رمز عبور:</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="رمز عبور"
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
                        <div className="form-group mt-3">
                            <button className="btn btn-primary btn-block">
                                ورود
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
