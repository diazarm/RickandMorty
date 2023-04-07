//importamos Card desde su path 
import Card from '../Card/Card';
//importa el archivo con module que lleva los estilos
import style from "../Cards/changeContainer.module.css";
//es la funcion Cards que recibe dos propiedades characters y onClose, asi desp puede trabajar con ellas, quienes fueron enviadas desde App
export default function Cards({characters, onClose}) {
   //const { characters } = props;
   return (
      //un poco de estilo
      <div className= {style.cardsContainer}>{
 //utiliza el metodo map asi las puede iterar y crear una Card nueva.  
         characters.map(({name, species, gender, image,id}) => {
 //Aca devuelve un contenedor Card que contiene todas las tarjetas creadas    
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


// !Algunos de los métodos más comunes de la clase Component de React son:

// render(): este es el método más importante y se utiliza para definir cómo se renderizará el componente en la interfaz de usuario. Este método debe devolver un elemento de React, como un componente o un elemento HTML.

// componentDidMount(): este método se ejecuta después de que el componente se haya montado en la interfaz de usuario. Se utiliza comúnmente para realizar tareas de inicialización que requieren acceso al DOM, como hacer solicitudes de red o configurar eventos.

// componentDidUpdate(): este método se ejecuta cada vez que el componente se actualiza. Se utiliza comúnmente para realizar tareas que deben realizarse después de que el componente se haya actualizado, como actualizar el estado o realizar cambios en el DOM.

// componentWillUnmount(): este método se ejecuta justo antes de que el componente se elimine de la interfaz de usuario. Se utiliza comúnmente para limpiar cualquier recurso que el componente haya asignado, como cancelar solicitudes de red o eliminar eventos.

// shouldComponentUpdate(): este método se utiliza para optimizar el rendimiento de los componentes. Se ejecuta antes de que el componente se vuelva a renderizar y se utiliza para determinar si el componente realmente necesita ser actualizado. Si el método devuelve false, el componente no se actualizará.

// setState(): este método se utiliza para actualizar el estado del componente y hacer que se vuelva a renderizar. Cuando se llama a setState(), React actualizará el estado del componente y volverá a llamar al método render() para volver a renderizar el componente con el nuevo estado.

// Estos son solo algunos de los métodos más comunes de la clase Component. La biblioteca React proporciona muchos más métodos y herramientas que se pueden utilizar para crear componentes de alta calidad.