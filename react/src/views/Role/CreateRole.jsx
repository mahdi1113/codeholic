import React from "react";
import { useEffect, useState } from "react";
import axiosClient from "../../axios";
import Test3 from "./Test3";
import { TreeViewComponent } from '@syncfusion/ej2-react-navigations';

axiosClient;
export default function CreateRole() {
    const [data, setData] = useState([]);
    const [selectedRoleId, setSelectedRoleId] = useState(null);

    const handleRoleSelect = (roleId) => {
        // اطلاع از تغییرات در انتخاب نقش
        setSelectedRoleId(roleId);
    };
    useEffect(() => {
        axiosClient
            .post("role")
            .then((res) => {
                console.log(res);
                setData(res.data);
            })
            .catch((error) => {
                console.log(error.response);
            });
    }, []);

    return (
        <>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="mb-0">فرم ایجاد نقش</h4>
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="form-group mb-1">
                                        <label htmlFor="name" className="mb-1">
                                            عنوان:
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="name"
                                            name="title"
                                            placeholder="عنوان را وارد کنید"
                                        ></input>
                                    </div>
                                    <div className="form-group mb-1">
                                        <label
                                            htmlFor="exampleTextarea"
                                            className="mb-1"
                                        >
                                            توضیحات نقش:
                                        </label>
                                        <textarea
                                            className="form-control"
                                            id="exampleTextarea"
                                            rows="3"
                                            placeholder="متن خود را وارد کنید"
                                        ></textarea>
                                    </div>
                                    <div className="form-group mb-2">
                                        <label
                                            htmlFor="exampleSelect"
                                            className="mb-1"
                                        >
                                            پدر این نقش را انتخاب کنید:
                                        </label>
                                        {/* <select
                                            className="form-control"
                                            id="exampleSelect"
                                        >
                                            <Test3 data={data} />
                                        </select> */}
                                        <Test3 data={data} />

                                        {/* /////////////////////////////////// */}
                                    </div>
                                    <button
                                        type="submit"
                                        className="btn btn-success mt-1"
                                    >
                                        ایجاد نقش
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
