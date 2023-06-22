import './Botao.css';
import React from 'react';

const Botao = (props) => {

    return(
    <>
        <button className="botao" onClick={props.onClick}>Login</button>
    </>
    )
}

export default Botao;