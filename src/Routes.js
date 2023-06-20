import React from 'react';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from './pages/Login/Login.js';
import Pedidos from './pages/Pedidos/Pedidos.js';



function Rotas() {
  return (
    <BrowserRouter>
           <Routes>
           <Route element = { <Login/> }  path="/" exact />
           <Route element = { <Pedidos/> }  path="/pedidos" />
           </Routes>
       </BrowserRouter>
  );
}

export default Rotas;
