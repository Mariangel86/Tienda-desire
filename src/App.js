import React, {useState} from "react";
import styled from "styled-components";
import { NavLink, Routes, Route  } from "react-router-dom";
import Inicio from "./componentes/Inicio";
import Blog from "./componentes/Blog";
import Tienda from "./componentes/Tienda";
import Error404 from "./componentes/Error404";
import Carrito from "./componentes/Carrito";

const App =()=> {
	const  productos =
    [
        {id: 1, nombre: "Producto 1"},
        {id: 2, nombre: "Producto 2"},
        {id: 3, nombre: "Producto 3"},
        {id: 4, nombre: "Producto 4"}
    ];
	
	const [carrito, cambiarCarrito]= useState([]);
	const agregarProductoAlCarrito = (idProductoAAgregar, nombre) => {
		// Si el carrito no tiene elementos agreguemos 1
		if (carrito.length === 0){
			cambiarCarrito ([{id:idProductoAAgregar, nombre: nombre, cantidad: 1}]);
	} else {
		//si tiene el producto actualizar el valor
		//si no tiene el producto debe agregarse

		//para poder editar el arreglo debo clonarlo
		const nuevoCarrito= [...carrito];
		//comprobar si el carrito ya tiene el id del producto a agregar
		const yaEnCarrito = nuevoCarrito.filter ((productoDeCarrito)=>{
			return productoDeCarrito.id === idProductoAAgregar
		}).length > 0;
		if (yaEnCarrito){
			//para ello tenemos que buscarlo y obtener posicion en el arreglo

			nuevoCarrito.forEach((productoDeCarrito,index) => {
			if (productoDeCarrito.id === idProductoAAgregar){
				const cantidad= nuevoCarrito [index].cantidad;
				nuevoCarrito[index] ={ id: idProductoAAgregar, nombre:nombre, cantidad: Cantidad + 1 }
			}	
		
			});
		} else {
			nuevoCarrito.push(
				{
					id: idProductoAAgregar,
					nombre: nombre,
					cantidad: 1
				}
			);
		}
			cambiarCarrito(nuevoCarrito);
	}
		}

  return (
    <Contenedor>
      <Menu>
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/Blog">Blog</NavLink>
        <NavLink to="/Tienda">Tienda</NavLink>
      </Menu>
      <main>
        <Routes>
        <Route path="*" element={<Error404/>}/>
      <Route path="/" element={<Inicio/>}/>
      <Route path="/Blog" element={<Blog/>}/>
      
	  <Route path="/Tienda" 
	  element={<Tienda  
	  productos={productos}
	  agregarProductoAlCarrito={agregarProductoAlCarrito}
	  />}>
		</Route>

      </Routes>
      </main>
      <aside>
        <Carrito carrito={carrito}/>
      </aside>
    </Contenedor>
  );
}

export default App;

const Contenedor = styled.div`
	max-width: 1000px;
	padding: 40px;
	width: 90%;
	display: grid;
	gap: 20px;
	grid-template-columns: 2fr 1fr;
	background: #fff;
	margin: 40px 0;
	border-radius: 10px;
	box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
`;

const Menu = styled.nav`
	width: 100%;
	text-align: center;
	background: #092c4c;
	grid-column: span 2;
	border-radius: 3px;

	a {
		color: #fff;
		display: inline-block;
		padding: 15px 20px;
	}

	a:hover {
		background: #1d85e8;
		text-decoration: none;
	}
`;