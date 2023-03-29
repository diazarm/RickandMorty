import Card from '../Card/Card';
import style from "../Cards/changeContainer.module.css";

export default function Cards({characters, onClose}) {
   //const { characters } = props;
   return (
      <div className= {style.cardsContainer}>{
         characters.map(({name, species, gender, image,id}) => {
            return (<Card
               id = {id}
               name = {name}
               species = {species}
               gender = {gender}
               image = {image}
               onClose={onClose}
               />);
            })
         }
      </div>
   )
  
}
