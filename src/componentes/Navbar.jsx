/* Navbar.js */

import { useState, useEffect } from "react";
import Logo from "./Logo";
import CartWidget from "./CartWidget";
import Dropdown from "./Dropdown";

const Navbar = ({categoriaDropdown}) => {
  const [categoria, setCategoria] = useState("Todos");

  const MANEJADOR_CATEGORIA = (categoria) => {
    setCategoria(categoria);
    categoriaDropdown(categoria);
  };

  useEffect(() => {
    document.title = `Padel Store, ${categoria}`;
  }, [categoria]);

  return (
    <header id="Navbar">
      <div className="header__contenedor">
        <Dropdown handleClick={MANEJADOR_CATEGORIA} />
        <Logo />
      </div>
      <CartWidget />
    </header>
  );
}; export default Navbar;
