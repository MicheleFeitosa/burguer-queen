import logoBC from '../../imagens/logo-bc2.png';
import './Logo.css';

function LogoBurguer(){
 return(
   <header className="logoburger">
       <img src={logoBC} alt = "logo-burger-cafe"/>
   </header>
   
 )

}

export default LogoBurguer;