import './CampoTexto.css';
import React from 'react';

const CampoTexto = (props) => {
    return (
        <div className = "campo-texto">  
            <label>{props.label}</label>
            <input placeholder={props.placeholder} onChange={props.onChange} type={props.type} />
        </div>
    )
}

export default CampoTexto;