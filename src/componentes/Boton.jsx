/* Boton */

const Boton = ({label, href, handleClick}) => {
  return (
      <button id="Boton" to={href} onClick={handleClick}>{label}</button>
  )
}; export default Boton;
