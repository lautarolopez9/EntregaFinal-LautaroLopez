/* Formulario */

import Boton from "./Boton"

const Formulario = ({ Reset, Enviar }) => {
    return (
        <div id="Formulario">
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                    <h4>Email</h4>
                </label>
                <input type="email" className="form-control input" id="exampleFormControlInput1" placeholder="Coloca tu Email" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">
                    <h4>Mensaje</h4>
                </label>
                <textarea className="form-control textarea" id="exampleFormControlTextarea1" rows="3" placeholder="Deja tu Mensaje"></textarea>
            </div>
            <Boton label={Reset} className="reset boton" />
            <Boton label={Enviar} className="enviar boton" />
        </div>
    )
}; export default Formulario;
