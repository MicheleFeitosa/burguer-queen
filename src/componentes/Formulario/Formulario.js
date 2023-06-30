import Botao from '../Botao/Botao';
import CampoTexto from '../CampoTexto/CampoTexto';
import {login} from '../../API/login/login.js';
import './Formulario.css';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Formulario = () => {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();
  
  const handleEmailChange = (event) => {
    console.log(event.target.value)
   setEmail(event.target.value);
 };

 const handleSenhaChange = (event) => {
  console.log(event.target.value);
   setSenha(event.target.value);
 };
 

 const handleSubmit = async (event) => { 
   event.preventDefault(); 
   try {
    const response = await login(email, senha);
    console.log(response);
    const jsonData = await response.json();
    if(response.ok){
      navigate("/pedidos");
      localStorage.setItem('token', jsonData.accessToken)
    }
   
   } catch(error){
    console.log(error);
 }
 }

    return(
       <section className="formulario">
          <form >
            <h2>Login</h2>
            <CampoTexto label="Email" placeholder="Digite seu email" value={email}
             onChange={handleEmailChange} type="text"/>
            <CampoTexto label="Senha" placeholder="Digite sua senha" value={senha}
             onChange={handleSenhaChange} type="password"/>
            <Botao type="submit" onClick={handleSubmit}/>
          </form>
       </section>
    )
}

export default Formulario;