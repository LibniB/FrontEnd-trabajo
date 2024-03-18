import React  from "react";

const RegistradorComponent = ({ Tableregistros, Tablematerias }) => {

  return (
    <div >
        <p>Total registros: {Tableregistros} de {Tablematerias}</p>
    </div>
  )
};

export default RegistradorComponent;