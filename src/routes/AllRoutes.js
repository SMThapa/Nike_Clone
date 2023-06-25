import { Routes, Route } from "react-router-dom";
import {Home, Cart, LoginPage, Register, ProductList, WishList, Help, ProductDetail} from '../pages/index';

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
        <Route path="/products/men" element={<ProductList category="men"/>}/>
        <Route path="/products/women" element={<ProductList category="women"/>}/>
        <Route path="/products/kids" element={<ProductList category="kid"/>}/>
        <Route path="/products/sales" element={<ProductList category="sales"/>}/>
        <Route path="/products/all" element={<ProductList category="all"/>}></Route>
        <Route path="/:id" element={<ProductDetail/>}/>
    </Routes>
  )
}