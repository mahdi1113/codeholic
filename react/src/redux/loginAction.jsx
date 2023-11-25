import { createStore } from "redux";
import axiosClient from "../axios";
import { useState } from "react";

// const Login = "LOG_IN";
// const Logout = "LOG_OUT";

// export const login = function(){
//     return{
//         type: Login
//     }
// }

// export const logout = function(){
//     return{
//         type: Logout
//     }
// }

// const initialState = {
//     isLoggedIn: false,
//     // user: {},
// }

// const authReducer = function(state = initialState , action){
//     switch(action.type){
//         case Login:
//             return{
//                 ...state,
//                 isLoggedIn: true
//             }
//         case Logout:
//             return{
//                 ...state,
//                 isLoggedIn: false
//             }
//         // case 'set':
//         //     return{
//         //         ...state,
//         //         user: action.payload
//         //     }
//         default:
//             return state
//     }

// }

// const store = createStore(authReducer);

// export default store;

// export const ProductGetAll = "PRODUCT_GET_ALL";
// export const ProductGetById = "PRODUCT_GET_BY_ID";
// export const ProductAdd = "PRODUCT_ADD";
// export const ProductRemove = "PRODUCT_REMOVE";
// export const ProductEdit = "PRODUCT_EDIT";

// export const getAll = function(){
//     type: ProductGetAll
// }

// export const getById = function(id){
//     return{
//         type: ProductGetById,
//         payload: id
//     }

// }

// export const add = function(item){
//     return{
//         type: ProductAdd,
//         payload:item
//     }
// }

// export const remove = function(id){
//     type: ProductRemove;
//     payload:id
// }

// export const edit = function(item){
//     type: ProductEdit;
//     payload:item
// }

// const initialState = {
//     items:[
//             // {id:1 , title:'product1' , price: 100},
//             // {id:2 , title:'product2' , price: 200}
//     ]
// }

// function ProductRducer(state = initialState,action){
//     switch(action.type){
//         case ProductGetAll:
//             return {...state , items: state.items}
//         case ProductGetById:
//             return  {...state , items: state.items.find(q => q.id == action.payload)}
//         case ProductRemove:
//             return {...state , items: state.items.filter(q => q.id != action.payload)}
//         case ProductAdd:
//             return {...state , items: action.payload}
//         default:
//             return state;
//     }
// }

// const store = createStore(ProductRducer)

// export default store;
// =====================================================================

const tokenAdd = "SET_TOKEN";
const userAdd = "SET_USER";
const tokenRemove = "REMOVE_TOKEN";
const userRemove = "REMOVE_USER";

export const addToken = function (token) {
    return {
        type: tokenAdd,
        payload: token,
    };
};

export const RemoveToken = function () {
    return {
        type: tokenRemove,
    };
};

export const addUser = function (user) {
    return {
        type: userAdd,
        payload: user,
    };
};

export const removeUser = function () {
    return {
        type: userRemove,
    };
};
   const initialState = {
        user: '',
    };

function tokenReudcer(state = initialState, action) {
    switch (action.type) {
        case tokenAdd:
            return { ...state, token: action.payload };
            case userAdd:
            return { ...state, user: action.payload };
        default:
            return state;
    }
}

const store = createStore(tokenReudcer)
export default store;
// // // // // // // // // // // // // // // // // // // // // // //
// let user = {};
// const initialState = {}

// async function fetchData() {
//     try {
//         const response = await axiosClient.post('au');
//         user = response.data;
//         // console.log("user", user);
//     } catch (error) {
//         console.log(error.response);
//     }
// }

// // تابع fetchData را فراخوانی می‌کنیم
// fetchData().then(() => {
//     // اگر درخواست با موفقیت انجام شود، initialState را به‌روزرسانی کنید
//     initialState.user = user;
//     // console.log(initialState);
// });

// function tokenReducer(state = initialState, action) {
//     switch (action.type) {
//         case tokenAdd:
//             return { ...state, token: action.payload };
//         case userAdd:
//             return { ...state, user: action.payload };
//         default:
//             return state;
//     }
// }

// const store = createStore(tokenReducer);
// export default store;
