import { Routes, Route } from "react-router-dom";
import {Home, Cart, LoginPage, Register, ProductList, WishList, Help, ProductDetail, CheckOuts, DashBoard} from '../pages/index';
import { AddressAndContact } from "../pages/CheckOutComponents";

import React from 'react'

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/wishlist" element={<WishList/>}/>
        <Route path="/help" element={<Help/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/products/men" element={<ProductList category="Men"/>}/>
        <Route path="/products/women" element={<ProductList category="Women"/>}/>
        <Route path="/products/kids" element={<ProductList category="Kid"/>}/>
        <Route path="/products/sales" element={<ProductList category="sales"/>}/>
        <Route path="/products/all" element={<ProductList category="all"/>}></Route>
        <Route path="/product/:id" element={<ProductDetail/>}/>
        <Route path="/checkout" element={<CheckOuts/>}/>
        <Route path="/dashboard" element={<DashBoard/>}/>
        <Route path="/userInfo" element={<AddressAndContact/>}/>
    </Routes>
  )
}
