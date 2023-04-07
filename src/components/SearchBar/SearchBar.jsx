import { useState } from "react";
import style from "./SearchBar.module.css";

export default function SearchBar({onSearch}) {
//cuando hago click, necesito ejecutar la fn onSearch, pero necesito cambiar el id
   const [id,setId] = useState("");
//la fn handleChange va a recibir un evento que viene del input a travez del onChange y le va a asignar a setId que sera de esa forma, cambie el estado, con (event.target(lo que recibe).value(valor recibido))
const handleChange = (event)=> {
   setId(event.target.value);   
};
   return (
      <div className= {style.searchBtn}>       
      {/* imput es el ingreso del valor del id, y onChange es una propiedad de input, que cuando haya un cambio, ejecute la funcion handleChange que esta arriba     */}
         <input type='search' placeholder = "Ingrese ID a buscar" className={style.searchInput} onChange=
                     // en la linea de abajo, onKeyDown sirve para qye cuando apretemos enter ejecute la CB tamb
         {handleChange} onKeyDown={event => {if (event.key === 'Enter') {onSearch(id);}}}/>
          {/* Aca solo le da estilo al boton */}
          <button className={style.searchClick}  
          //Aqui tambien ejecuta la CB mediante el click en el boton.
          onClick={()=> onSearch(id)}>Agregar</button> 
      </div>
   );
}

