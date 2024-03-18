import BuscadorComponent from "./BuscadorComponent";
import { useState } from "react";
const TablaComponent = ({personas}) => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (inputValue) => {
    setSearchInput(inputValue);
  };

  const filteredPersonas = personas.filter((persona) =>
    persona.areaConocimiento.toLowerCase().includes(searchInput.toLowerCase())
    ||
    persona.id.toLowerCase().includes(searchInput.toLowerCase())
  );
    return (
    <div className="container">
      <BuscadorComponent setSearch={handleSearch}/>
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
          {filteredPersonas.map((persona) =>(
            <tr key={persona.id}>
              <td>{persona.id}</td>
              <td>{persona.areaConocimiento}</td>
              <td>{persona.descripcion}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    );
  };
  
  export default TablaComponent;