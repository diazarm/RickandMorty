// importamos style y le pasamos el path del arhivo module para agregarle estilos.
import { Link } from "react-router-dom";
import style from "./Card.module.css";
import {connect} from "react-redux";
import {addFavorite, removeFavorite} from "../../redux/actions"
import { useState, useEffect } from "react";

//Aqui con destructorin, lo que hacemos es sacar los props, por ser un objeto. pero hay q poner {} en el ingreso
function Card({id,name,species,gender,image,onClose, addFavorite, removeFavorite,myFavorites}) {

   const [isFav, setIsFav] = useState(false);
const handleFavorite = () => {
   if (isFav) {
      setIsFav(false);
      removeFavorite(id);
   } else{
      setIsFav(true);
      addFavorite({
         id,name,species,gender,image,onClose, addFavorite, removeFavorite, myFavorites,
      });
   }
};

useEffect (() => {
   myFavorites.forEach((fav) => {
      if(fav.id === id){
         setIsFav(true);
      }
   });
}, [myFavorites]);

//a partir de aqui, va renderizado
   return (
//los dos div de className son solamente para darle estilo.
      <div className={style.preContainer}>
         {
            isFav ? (
               <button onClick = {handleFavorite}>&#x2764 </button>
            ) : (
               <button onClick={ handleFavorite}>&#x2661</button>
            )
         }
      <div className={style.container}>
{/* Aqui llega la funcion que hicimos en App y paso por Nav y esta dentro de una CB para que no se ejecute sola. */}
         <button onClick={()=> onClose (id)} className={style.closeButton}>X</button>
 {/* Aca en Link abraza a name para que nos lleve al detalle del nombre por el id */}        
         <Link to={`/detail/${id}`}><h2>{name}</h2></Link>
{/* llamamos a image, que seria la foto de la card, y solo lo ponemos asi {image} porque esta desectrucutrada */}
         <img  src={image} className={style.imagen} alt="imageCard" /> 
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>Card #{id}</h2>
      </div>
</div>      
   );
}
// Gracias a connect puede hacer dispatch, porque sola no la puede hacer.
const mapDispatchToProps = (dispatch) => {
   return {
      addFavorite: (character) => {dispatch(addFavorite(character))},
      removeFavorite: (id)=> {dispatch(removeFavorite(id))},
   };
};

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites,
   };
};

// al final (Card) es el componente al cual quiero que actue mi connect
export default connect(mapStateToProps, mapDispatchToProps)(Card);

