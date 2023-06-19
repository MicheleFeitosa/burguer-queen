import Botao from '../Botao/Botao';
import CampoTexto from '../CampoTexto/CampoTexto';
import './Formulario.css';

const Formulario = () => {

    return(
       <section className="formulario">
          <form>
            <h2>Login</h2>
            <CampoTexto label="Email" placeholder="Digite seu email" />
            <CampoTexto label="Senha" placeholder="Digite sua senha"/>
            <Botao />
          </form>
       </section>
    )
}

export default Formulario;