/* CardDetail */

const CardDetail = ({img, id, categoria, modelo, marca, precio, stock, descripcion}) => {

  return (
    <div id="CardDetail">
      <div className="CardDetail__contenedor">
        <img src={img} alt={categoria} className="contenedor__foto"/>
        <div className="contenedor__texto">
          <h4>Id: {id}</h4>
          <h4>Categoria: {categoria}</h4>
          <h4>Marca: {marca}</h4>
          <h4>Modelo: {modelo}</h4>
          <h4>Precio: ${precio}</h4>
          <h4>Stock: {stock}</h4>
        </div>
      </div>
      <h5 className="contenedor__descripcion">Descripción: {descripcion}</h5>
    </div>
  )
}; export default CardDetail;
