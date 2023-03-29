import { useState } from "react";
import style from "./SearchBar.module.css";

export default function SearchBar({onSearch}) {
//cuando hago click, necesito ejecutar la fn onSearch, pero necesito cambiar el id
   const [id,setId] = useState("");

const handleChange = (event)=> {
   setId(event.target.value);   
};
   return (
      <div className= {style.searchBtn}>
         <input type='search' placeholder = "Ingrese ID a buscar" onChange={handleChange} />
          <button className={style.searchClick}  
          onClick={()=> onSearch(id)}>Agregar</button> 
      </div>
   );
}

