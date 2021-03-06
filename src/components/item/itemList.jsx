import React from "react";
import Item from "./item";

const ItemList = ({ producto }) => {
  const listaItems = producto.length ? producto.map((data) => {
    return <Item data={data} />;
  })
    :
    <tr>
      <td colSpan={6}>Loading...</td>
    </tr>

  return (
    <div className="container my-5">
      <table className="table table-striped" style={{ backgroundColor: "#fff" }}>
        <tbody>
          <tr>

            <th className="text-center  ">Titulo</th>
            <th className="text-center">Descripcion</th>
            <th className="text-center">Precio</th>
            <th className="text-center">Imagen</th>
          </tr>
        </tbody>
        <tbody>{listaItems}</tbody>
      </table>
    </div>
  );
};

export default ItemList;
