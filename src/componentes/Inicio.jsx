/* Inicio */

import InicioTexto from "./InicioTexto";
import InicioBoton from "./InicioBoton";
import InicioTools from "./InicioTools";
import Ingreso from "./Ingreso";
import InicioContacto from "./InicioContacto";
import Logo from "./Logo";

const Inicio = () => {
  return (
    <div id="Inicio">
        <InicioTools />
        <div className="inicio__botones">
          <Logo />
          <InicioBoton />
          <InicioContacto />
        </div>
        <Ingreso />
        <InicioTexto />
    </div>
  )
}; export default Inicio;
