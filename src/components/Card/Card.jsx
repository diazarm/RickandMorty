import style from "./Card.module.css";

export default function Card({id,name,species,gender,image,onClose}) {
   return (
<div className={style.preContainer}>
<div className={style.container}>
         <button onClick={()=> onClose (id)} className={style.closeButton}>X</button>
         <img  src={image} className={style.imagen} alt="imageCard" /> 
         <h2>{name}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>Card #{id}</h2>
      </div>
</div>      
   );
}



//!Aqui con destructorin, lo que hacemos es sacar los props, por ser un objeto. pero hay q poner {} en el ingreso
