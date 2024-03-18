import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TablaComponent from "./components/TablaComponent";
import BuscadorComponent from "./components/BuscadorComponent";
import RegistradorComponent from "./components/RegistradorComponent";


function App() {
  const [searchInput, setSearchInput] = useState("");
  const [contador, setContador] = useState(5);

  const Materias = [
    {
      id: "1",
      areaConocimiento: "Matematicas",
      descripcion: "Estudio de números, formas y cambios.",
    },
    {
      id: "2",
      areaConocimiento: "Filosofia",
      descripcion: "Indagación sobre la realidad y la existencia.dndndhdhsndjn",
    },
    {
      id: "3",
      areaConocimiento: "Ciencias Sociales",
      descripcion: "Estudio del comportamiento humano y las interacciones sociales.rem imsdndndhdhsndjn",
    },
    {
      id: "4",
      areaConocimiento: "Ciencias Naturales",
      descripcion: "Estudio de fenómenos naturales y procesos universales.",
    },
    {
      id: "5",
      areaConocimiento: "Literatura",
      descripcion: "Exploración de la expresión artística a través del lenguaje escrito."
    },
      
    {
      id: "6",
      areaConocimiento: "Historia",
      descripcion: "Estudio de eventos pasados y su impacto en la sociedad."
    },
      
    {
      id: "7",
      areaConocimiento: "Física",
      descripcion: "Investigación de las leyes fundamentales del universo y su aplicación."
    },
      
    {
      id: "8",
      areaConocimiento: "Química",
      descripcion: "Estudio de la composición, estructura y propiedades de la materia."
    },
      
    {
      id: "9",
      areaConocimiento: "Biología",
      descripcion: "Exploración de la vida y los organismos vivos."
    },
      
    {
      id: "10",
      areaConocimiento: "Psicología",
      descripcion: "Estudio del comportamiento y los procesos mentales."
    },
      
    {
      id: "11",
      areaConocimiento: "Economía",
      descripcion: "Análisis de la producción, distribución y consumo de bienes y servicios."
    },
      
    {
      id: "12",
      areaConocimiento: "Arte",
      descripcion: "Manifestación creativa que refleja la imaginación y las emociones."
    },
      
    {
      id: "13",
      areaConocimiento: "Geografía",
      descripcion: "Estudio de la superficie terrestre y sus características."
    },
      
    {
      id: "14",
      areaConocimiento: "Informática",
      descripcion: "Ciencia que estudia el tratamiento automático de la información."
    },
      
    {
      id: "15",
      areaConocimiento: "Sociología",
      descripcion: "Análisis de las estructuras y dinámicas sociales."
    },
      
    {
      id: "16",
      areaConocimiento: "Derecho",
      descripcion: "Sistema de normas que regulan la conducta humana en la sociedad."
    },
      
    {
      id: "17",
      areaConocimiento: "Medicina",
      descripcion: "Ciencia y práctica relacionada con el diagnóstico y tratamiento de enfermedades."
    },
      
    {
      id: "18",
      areaConocimiento: "Astronomía",
      descripcion: "Estudio de los cuerpos celestes y el universo."
    },
      
    {
      id: "19",
      areaConocimiento: "Educación",
      descripcion: "Proceso de facilitar el aprendizaje y el desarrollo en los individuos."
    },
      
    {
      id: "20",
      areaConocimiento: "Ecología",
      descripcion: "Estudio de las interacciones entre los organismos y su entorno."
    }

  ];
  

  const handleSearch = (inputValue) => {
    if (inputValue) {
      setSearchInput(inputValue.toLowerCase());
    } else {
      setSearchInput("");
    }
  };

  const handleContador = (e)=>{
    setContador(Number(e.target.value))
  }
  const Contador = [5,10,15,20]
  
  const filteredMaterias = Materias.filter(
    (materia) =>
      materia.id.toLowerCase().includes(searchInput.toLowerCase()) ||
      materia.areaConocimiento.toLowerCase().includes(searchInput.toLowerCase()) ||
      materia.descripcion.toLowerCase().includes(searchInput.toLowerCase())
  ).slice(0, contador);

  return (

    <div>
     <select value={contador} name="" id="" onChange={handleContador} className="ll">
          {Contador.map((opcion)=>(
          <option key={opcion} value={opcion}>{opcion}</option>
          ))}
        </select>  
        

        <TablaComponent Materias={Materias} searchInput={searchInput} contador={contador} handleSearch={handleSearch} />
        <RegistradorComponent
        Tableregistros={filteredMaterias.length}
        Tablematerias={Materias.length}
      ></RegistradorComponent>

  </div>
  );
}

export default App;
