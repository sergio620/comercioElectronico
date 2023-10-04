import Nav from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import { useState, useEffect, useRef } from "react";
import React from "react";
import data from "../db/data";

//creamos un contexto para pasar las variables o funciones directamente al hijo mas alejado (se pasara la funcion "updateFilter" a Input.jsx de padre a hijo)
export const ThemeContext = React.createContext();

function App() {
  //Declaramos el filtro con un estado inicial conteniendo una serie de multiples condiciones
  let [filter, setFilter] = useState({
    category: "all",
    newPrice: "all",
    color: "all",
    conpamy: "all",
    title: "",
  });
  //Declaramos los items filtrado con un estado inicial igual a los datos ya que al inicio se debe mostrar todos los calzados
  let [filteredItems, setFilteredItems] = useState(data);
  //Esto es para dar un seguimiento a lo que se escribe en el buscador
  let [input, setInput] = useState("");
  //Como useEffect ejecuta el codigo la primera vez que se renderiza, se utiliza este hook para prevenirl como se ve mas adelante
  //https://www.youtube.com/watch?v=81faZzp18NM&ab_channel=DaveGray
  //https://www.youtube.com/watch?v=4RGObDegoXw&ab_channel=FalconMasters
  const ref = useRef(false);

  //Si el usuario da click en Categoria, Precio, Colores, o en recomendados entonces se ejecutara directamente esta funcion
  function updateFilter(event) {
    const { name, value } = event.target;
    setFilter((prevFilter) => {
      return { ...prevFilter, [name]: value };
    });
  }
  //onChange no tiene event.key, pero si tiene event.target.value
  function handleChange(event) {
    setInput(event.target.value);
    if (event.target.name !== "title") {
      updateFilter(event);
    }
  }
  //onKeyDown tiene event.key, tambien tiene event.target.value
  function handleKeyDown(event) {
    if (event.key === "Enter") {
      updateFilter(event);
    }
  }

  function filter2(dataFiltered) {
    //filtra una vez mas el resultado del filtro 1 con lo ingresado en la barra de busqueda
    dataFiltered = dataFiltered.filter((item) =>
      item.title.toLowerCase().includes(input.toLowerCase())
    );
    setFilteredItems(dataFiltered);
  }

  function filter1() {
    //retorna los elementos con las condiciones del filtro actual excepto "title"
    /* https://stackoverflow.com/questions/31831651/javascript-filter-array-multiple-conditions */
    let dataFiltered = data.filter((item) => {
      for (let key in filter) {
        if (
          key !== "title" &&
          filter[key].toLowerCase() !== "all" &&
          (item[key].toLowerCase() === undefined ||
            item[key].toLowerCase() !== filter[key].toLowerCase())
        ) {
          return false;
        }
      }

      return true;
    });

    filter2(dataFiltered);
  }

  //Cualquier cambio de estado en el objeto "filtro" ejecutara el bloque de codigo dentro de este useEffect ("setFilter" cambia el estado del filtro)
  useEffect(() => {
    //La primera vez que se renderiza se ejecuta useEffect, se ejecuta el if y se retorna (para salir del array function) el valor de ref cambiado a "true"
    if (ref.current === false) {
      return () => (ref.current = true);
    }
    console.log("renderizo");

    filter1();
  }, [filter]);

  return (
    <div>
      <ThemeContext.Provider value={{ updateFilter }}>
        <Sidebar />
        <Nav
          input={input}
          handleKeyDown={handleKeyDown}
          handleChange={handleChange}
        />
        <Recommended updateFilter={updateFilter} />
        <Products filteredItems={filteredItems} />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
