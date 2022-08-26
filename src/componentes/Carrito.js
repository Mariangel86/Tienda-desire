import React, {useState} from "react";
import styled from "styled-components";


const Carrito = () => {
const [carrito, cambiarCarrito]= useState(

[{id: 1, cantidad: 1, nombre:'Producto 1'},
{id: 3, cantidad: 2, nombre:'Producto 2'},
{id: 4, cantidad: 2, nombre:'Producto 4'}
]);

    return (
      
              <div>
                <h3> Carrito de compras</h3>
                {carrito.length > 0 ? carrito.map((producto, index)=>{
                    return(
                            <Producto>
                                <NombreProducto>
                                    {producto.nombre}
                                </NombreProducto>
                               Cantidad: {producto.cantidad}
                            </Producto>
                    );
               })
                   : 
                <p>No hay productos en el carrito</p>
            }
              </div> 
              
    );
    
  }

  const Producto = styled.div `
    padding:10px;
    font-size: 14px;
    border-bottom: 1px solid #ebebf3;
  `;
  const NombreProducto = styled.p `
    font-weight: bold;
    font-size: 16px;
    color: #000;
  `;

  
  export default Carrito;