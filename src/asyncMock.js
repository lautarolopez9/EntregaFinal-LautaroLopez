/* asyncMock */

const PRODUCTOS = [
    {
      id: "1",
      img: "./src/img/calcetin-nox-negro-rojo.webp",
      categoria: "Calcetines",
      marca: "Nox",
      modelo: "Negro-Rojo",
      descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed reprehenderit placeat dolorum dicta provident quasi minima quibusdam. Quod repellendus error reiciendis eligendi odit culpa assumenda ratione vitae, recusandae quidem nulla.",
      stock: 20,
      precio: 9990,
    },
    {
      id: "2",
      img: "./src/img/grip-wilson.webp",
      categoria: "Grips",
      marca: "Wilson",
      modelo: "Blanco",
      descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed reprehenderit placeat dolorum dicta provident quasi minima quibusdam. Quod repellendus error reiciendis eligendi odit culpa assumenda ratione vitae, recusandae quidem nulla.",
      stock: 100,
      precio: 2990,
    },
    {
      id: "3",
      img: "./src/img/pala-nox.webp",
      categoria: "Palas",
      marca: "Nox",
      modelo: "ML10 Pro Cup Luxury",
      descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed reprehenderit placeat dolorum dicta provident quasi minima quibusdam. Quod repellendus error reiciendis eligendi odit culpa assumenda ratione vitae, recusandae quidem nulla.",
      stock: 5,
      precio: 259990,
    },
    {
      id: "4",
      img: "./src/img/pelota-padel-m_m.webp",
      categoria: "Pelotas",
      marca: "M/M",
      modelo: "Padel Pro",
      descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed reprehenderit placeat dolorum dicta provident quasi minima quibusdam. Quod repellendus error reiciendis eligendi odit culpa assumenda ratione vitae, recusandae quidem nulla.",
      stock: 50,
      precio: 5990,
    },
    {
      id: "5",
      img: "./src/img/protector-nox.webp",
      categoria: "Protectores",
      marca: "Nox",
      modelo: "Ventus Verde-Negro",
      descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed reprehenderit placeat dolorum dicta provident quasi minima quibusdam. Quod repellendus error reiciendis eligendi odit culpa assumenda ratione vitae, recusandae quidem nulla.",
      stock: 10,
      precio: 7990,
    },
    {
      id: "6",
      img: "./src/img/grip-wilson-rosado.webp",
      categoria: "Grips",
      marca: "Wilson",
      modelo: "Rosado",
      descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed reprehenderit placeat dolorum dicta provident quasi minima quibusdam. Quod repellendus error reiciendis eligendi odit culpa assumenda ratione vitae, recusandae quidem nulla.",
      stock: 100,
      precio: 2990,
    },
    {
      id: "7",
      img: "./src/img/protector-nox-axul.webp",
      categoria: "Protectores",
      marca: "Nox",
      modelo: "Ventus Azul-Celeste",
      descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed reprehenderit placeat dolorum dicta provident quasi minima quibusdam. Quod repellendus error reiciendis eligendi odit culpa assumenda ratione vitae, recusandae quidem nulla.",
      stock: 10,
      precio: 7990,
    },
    {
      id: "8",
      img: "./src/img/calcetin-nox-negro-blanco.webp",
      categoria: "Calcetines",
      marca: "Nox",
      modelo: "Negro-Blanco",
      descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed reprehenderit placeat dolorum dicta provident quasi minima quibusdam. Quod repellendus error reiciendis eligendi odit culpa assumenda ratione vitae, recusandae quidem nulla.",
      stock: 20,
      precio: 9990,
    }
];
  
export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(PRODUCTOS);
        },500)
    })
}

export const getProductsById = (productId) => {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve(PRODUCTOS.find(producto => producto.id === productId));
      }, 500)
  })
}

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve(PRODUCTOS.filter(producto => producto.categoria === categoryId));
      }, 500)
  })
}