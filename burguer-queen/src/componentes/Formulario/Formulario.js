import Botao from '../Botao/Botao';
import CampoTexto from '../CampoTexto/CampoTexto';
import {login} from '../../API/login/login.js';
import './Formulario.css';
import React, { useState } from 'react';

const Formulario = () => {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  
  const handleEmailChange = (event) => {
   setEmail(event.target.value);
 };

 const handleSenhaChange = (event) => {
   setSenha(event.target.value);
 };

 const handleSubmit = async (event) => { 
   event.preventDefault(); 
   try {
   const response = await login(email, senha);
   const jsonData = await response.json();
   console.log(jsonData);
    } catch(error){
  console.log(error);
  }
 }

    return(
       <section className="formulario">
          <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <CampoTexto label="Email" placeholder="Digite seu email" value={email}
             onChange={handleEmailChange} />
            <CampoTexto label="Senha" placeholder="Digite sua senha" value={senha}
             onChange={handleSenhaChange}/>
            <Botao type="submit"/>
          </form>
       </section>
    )
}

export default Formulario;