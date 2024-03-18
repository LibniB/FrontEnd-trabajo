import BuscadorComponent from "./BuscadorComponent";
import { useState } from "react";
const TablaComponent = ({Materias, searchInput, contador, handleSearch}) => {
  
    const filteredMaterias = Materias.filter((materia) =>
    materia.areaConocimiento.toLowerCase().includes(searchInput.toLowerCase()) ||
    materia.id.toLowerCase().includes(searchInput.toLowerCase()) ||
    materia.descripcion.toLowerCase().includes(searchInput.toLowerCase())
  ).slice(0, contador);

    return (
    <div className="container">
     <BuscadorComponent setSearch={handleSearch} />

      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Área de Conocimiento</th>
            <th>Descripción</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {filteredMaterias.map((materia) =>(
            <tr key={materia.id}>
              <td>{materia.id}</td>
              <td>{materia.areaConocimiento}</td>
              <td>{materia.descripcion}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    );
  };
  
  export default TablaComponent;