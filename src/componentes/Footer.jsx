/* Footer */

import Formulario from "./Formulario";
import Horario from "./Horario";
import Links from "./Links";

const Footer = () => {
  return (
    <footer id="Footer">
        <Formulario Reset="Reset" Enviar="Enviar"/>
        <Links/>
        <Horario/>
    </footer>
  )
}; export default Footer;
