/* Dropdown */

import {Link} from "react-router-dom";

const Dropdown = ({handleClick}) => {
  return (
    <div className="dropdown" id="Dropdown">
        <button className="btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-list svg" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
            </svg>
        </button>
        <ul className="dropdown-menu">
            <Link className="dropdown-item" to={"/"} onClick={() => handleClick("Todos")} >todos</Link>
            <Link className="dropdown-item" to={"/categoria/Pelotas"} onClick={() => handleClick("Pelotas")} >pelotas</Link>
            <Link className="dropdown-item" to={"/categoria/Grips"} onClick={() => handleClick("Grips")} >grips</Link>
            <Link className="dropdown-item" to={"/categoria/Calcetines"} onClick={() => handleClick("Calcetines")} >calcetines</Link>
            <Link className="dropdown-item" to={"/categoria/Protectores"} onClick={() => handleClick("Protectores")} >protectores</Link>
            <Link className="dropdown-item" to={"/categoria/Palas"} onClick={() => handleClick("Palas")} >palas</Link>
        </ul>
    </div>
  )
}; export default Dropdown;
