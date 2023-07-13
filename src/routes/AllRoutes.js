import { Routes, Route } from "react-router-dom";
import {Home, Cart, LoginPage, Register, ProductList, WishList, Help, ProductDetail, CheckOuts, DashBoard, OrderSuccess, PageNotFound} from '../pages/index';
import { AddressAndContact } from "../pages/CheckOut/AddressAndContact";
import { ProtectedRoutes } from "./ProtectedRoutes";

import React from 'react'

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<ProtectedRoutes><Cart/></ProtectedRoutes>}/>
        <Route path="/wishlist" element={<ProtectedRoutes><WishList/></ProtectedRoutes>}/>
        
        <Route path="/help" element={<Help/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<Register/>}/>

        <Route path="/products/men" element={<ProductList category="Men"/>}/>
        <Route path="/products/women" element={<ProductList category="Women"/>}/>
        <Route path="/products/kids" element={<ProductList category="Kid"/>}/>
        <Route path="/products/sales" element={<ProductList category="sales"/>}/>
        <Route path="/products/all" element={<ProductList category="all"/>}></Route>

        <Route path="/product/:id" element={<ProductDetail/>}/>

        <Route path="/checkout" element={<ProtectedRoutes><CheckOuts/></ProtectedRoutes>}/>
        <Route path="/dashboard" element={<ProtectedRoutes><DashBoard/></ProtectedRoutes>}/>
        <Route path="/userInfo" element={<ProtectedRoutes><AddressAndContact/></ProtectedRoutes>}/> 
        <Route path="/ordersucess" element={<ProtectedRoutes><OrderSuccess/></ProtectedRoutes>}/>

        <Route path="*" element={<PageNotFound/>}/>
    </Routes>
  )
}
