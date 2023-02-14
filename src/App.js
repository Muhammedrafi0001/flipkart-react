
// import {Provider, useDispatch} from "react-redux"
// import { store } from "./app/store";

import Home from '../src/pages/home/Home'
import ProductDetails from '../src/pages/poroductdetailse/ProductDetails'
import Product from '../src/pages/product/Product';
import Cart from '../src/pages/cart/Cart';
import Footers from './component/footer/Footer';

import Navbar from './component/navbar/Navbar';

import './App.css'

import {BrowserRouter,Routes,Route} from 'react-router-dom'

import supabase from "./supabase/supabase";
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setUser } from './slice/Userslices';

function App() {

   const dispatch =useDispatch()

  const getUser =async ()=>{
    const {data,error} =await supabase.auth.getSession()
   if(data.session){

     dispatch(setUser(data.session.user));
   }
  }

  useEffect(()=>{
    getUser()
  },[ getUser()])
  return (
  
    <BrowserRouter>
    <Navbar/>
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Product' element={<Product/>}/>
      <Route path='/productdetails/:id' element={<ProductDetails/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
    <Footers/>
    </BrowserRouter>
  
  );
}

export default App;
