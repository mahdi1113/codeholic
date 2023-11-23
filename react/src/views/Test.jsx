// import { useEffect, useState } from "react";
// import axiosClient from "../axios"
// import Test2 from "./Test2";
// import { TreeViewComponent } from '@syncfusion/ej2-react-navigations';
// export default function Test() {
// const [data , setData] = useState([]);
// useEffect(() => {
// axiosClient.post('role').then(res => {
// // console.log(res);
// setData(res.data);
// }).catch(error =>{
// console.log(error.response);
// })
// },[])

// // const hierarchicalData =
// // [
// // {
// // "id": 1,
// // "title": "title1",
// // "description": "this is title1",
// // "parent_id": 0,
// // "created_at": null,
// // "updated_at": null,
// // "sub_child": [
// // {
// // "id": 2,
// // "title": "title2",
// // "description": "this is title2",
// // "parent_id": 1,
// // "created_at": null,
// // "updated_at": null,
// // "sub_child": [
// // {
// // "id": 5,
// // "title": "title5",
// // "description": "this is title5",
// // "parent_id": 2,
// // "created_at": null,
// // "updated_at": null,
// // "sub_child": [
// // {
// // "id": 6,
// // "title": "title6",
// // "description": "this is title6",
// // "parent_id": 5,
// // "created_at": null,
// // "updated_at": null,
// // "sub_child": []
// // }
// // ]
// // }
// // ]
// // },
// // {
// // "id": 3,
// // "title": "title3",
// // "description": "this is title3",
// // "parent_id": 1,
// // "created_at": null,
// // "updated_at": null,
// // "sub_child": []
// // },
// // {
// // "id": 4,
// // "title": "title4",
// // "description": "this is title4",
// // "parent_id": 1,
// // "created_at": null,
// // "updated_at": null,
// // "sub_child": []
// // }
// // ]
// // }
// // ]

// const fields = { dataSource: data, id: 'id', text: 'title', child: 'sub_child' };

// return (
// <>

    // {/*
    // <TreeViewComponent fields={fields} /> */}
    //
// </>
// )
// }

// // RoleTree.js

// ////////////////////////////////////////////////////////////////////////////////
// // App.js
// // import React from 'react';
// // import RoleTree from './RoleTree'; // مسیر صحیح را وارد کنید
// // import Test2 from "./Test2";

// // const App = () => {
// // const rolesData = [
// // {
// // id: 1,
// // name: 'Super Admin',
// // children: [
// // {
// // id: 2,
// // name: 'Admin',
// // children: [
// // { id: 3, name: 'Editor' },
// // { id: 4, name: 'Viewer' },
// // ],
// // },
// // { id: 5, name: 'Moderator' },
// // ],
// // },
// // ];

// // return (
// // <div>
    // // <h1>نمایش درخت نقش‌ها در ری‌اکت</h1>
    // //
    // <RoleTree data={rolesData} />
    // //
// </div>
// // );
// // };

// import { TreeViewComponent } from '@syncfusion/ej2-react-navigations';
// function Test() {
// console.log('salam');
// // define the array of data
// const hierarchicalData = [

// {

// "id": 1,

// "title": "title1",

// "description": "this is title1",

// "parent_id": 0,

// "created_at": null,

// "updated_at": null,

// "sub_child": [

// {

// "id": 2,

// "title": "title2",

// "description": "this is title2",

// "parent_id": 1,

// "created_at": null,

// "updated_at": null,

// "sub_child": [

// {

// "id": 5,

// "title": "title5",

// "description": "this is title5",

// "parent_id": 2,

// "created_at": null,

// "updated_at": null,

// "sub_child": [

// {

// "id": 6,

// "title": "title6",

// "description": "this is title6",

// "parent_id": 5,

// "created_at": null,

// "updated_at": null,

// "sub_child": []

// }

// ]

// }

// ]

// },

// {

// "id": 3,

// "title": "title3",

// "description": "this is title3",

// "parent_id": 1,

// "created_at": null,

// "updated_at": null,

// "sub_child": []

// },

// {

// "id": 4,

// "title": "title4",

// "description": "this is title4",

// "parent_id": 1,

// "created_at": null,

// "updated_at": null,

// "sub_child": []

// }

// ]

// }

// ];
// const fields = { dataSource: hierarchicalData, id: 'id', text: 'title', child: 'sub_child' };
// return (
// // specifies the tag for render the TreeView component
//
{/* <TreeViewComponent fields={fields} />); */}
// }
// export default Test;

// import React, { useEffect, useState } from "react";
// import Test2 from "./Test2";
// import axiosClient from "../axios"
// import './tree.css'
// export default function Test() {

// const [data , setData] = useState([]);
// useEffect(() => {
// axiosClient.post('role').then(res => {
// console.log(res);
// setData(res.data);
// }).catch(error =>{
// console.log(error.response);
// })
// },[])

// const [state, setstate] = useState([]);
// return (
// <>
    // <div className="tree">{Test2(data)}</div>
    // </>
// );
// }

import axios from 'axios'
import React from 'react'
import axiosClient from '../axios'

export default function Test() {
const isTokenExpired = (token) => {
if (!token) {
return true;
}

const decodedToken = parseToken(token);
const expirationTime = decodedToken.exp * 1000;

return Date.now() >= expirationTime;
};

const parseToken = (token) => {
const base64Url = token.split('.')[1];
const base64 = base64Url.replace('-', '+').replace('_', '/');
return JSON.parse(atob(base64));
};

const token = "17|VKNlva7QFziRoSye9FjQCes4S0OfbuCtlCZMLVFzdc4ed3a6";
const isExpired = isTokenExpired(token);

if (isExpired) {
return(
<h1>توکن منقضی شده است</h1>
)
} else {
return(
<h1>توکن معتبر است</h1>
)
}
}
