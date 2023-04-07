import './App.css'
import Cards from './components/Cards/Cards.jsx'
import Nav from '../src/components/Nav/Nav.jsx'
import { useState } from 'react'
import { Routes, Route, useLocation, Navigate, useNavigate } from 'react-router-dom'
import About from './components/About/About'
import Detail from './components/Detail/Detail'
import NotFound from '../src/components/NotFound/NotFound';
import Form from '../src/components/Form/Form';
import { useEffect } from 'react';
import Favorites from './components/Favorites/Favorites';

// el export default del componente puede ir aca arriba porque no es una constante, sino debe ir abajo.
export default function App () {
  //! Hooks
  //Usamos useLocation para usar la locacion actual
  const {pathname} = useLocation();
  
  // creamos el estado characters y useCharaters y le dejamos como estado inicial []  
  const [characters, setCharacters] = useState([]);
  //? Simulacion de base de datos 
  const [access, setAccess] = useState(false);
  
  const navigate = useNavigate();
  
  useEffect(() =>{
    !access && navigate("/");
  }, [access]);
  
  //! ----- Hooks--
//! ---- credenciales falsa ---- y creamos una funcion loguin para usar ese user y pass antes del render
const username = "marcelo@gmail.com";
const password = "@Clave123";

  //creamos la fn onSearch, que cuando ingresa un id, pide a la Api, por medio del fetch. 
      const onSearch = (id) =>{
 
      //configuramos la urlBase y la Key para que nos de acceso    
      const URL_BASE = 'https://be-a-rym.up.railway.app/api';
      const KEY = 'fc8485faa954.32266e8830932b728fd1';
      
        if(characters.find((char)=> char.id === id)){
          return alert('Personaje repetido')};
        
      //el fetch hace la peticion al id y ? por la KEY si es correcto, sigue, sino no.   
      fetch(`${URL_BASE}/character/${id}?key=${KEY}`)
 
      //transforma el resultado de la api en un archivo json para que la pueda leer mi React
      .then(response=>response.json())
 
      //recibe data, y en la siguiente linea, pregunta si existe data, de ser asi continua, else 'Card no valida'
      .then(data=>{
//! Aca ademas de verificar que venga con name, osea que exista una card, verifica que no traiga una card que ya este en characters que seria el array que usamos  PERO lo ideal es ponerlo arriba, por eso lo sacamos.
      //  if (data.name && !characters.find((char)=> char.id === data.id)){  <--- asi estaba antes
      if (data.name){ 
        //setCharacters cambia el estado, con una CB que toma el viejo array, y luego lo suma (add card) con data que es lo nvo
        setCharacters((oldChars) => [...oldChars, data])
        }else{
          alert('Card no encontrada')
        }
      });
     };
//!funcion onClose, toma el id de la card, y mediante la fn filter, crea en el array charanters, un nuevo array con las cards Osea, un nuevo estado, con las cards PERO SIN la carta que tiene el id entregado por parametro (id)
    const onClose = (id) =>{
      setCharacters(characters.filter((char) => char.id !== id));
    };
const login = (userData) =>{
  if (userData.username === username && userData.password === password){
    setAccess(true);
    navigate('/home');
  }else {alert('Acceso No autorizado')};
};


//debajo del return() aqui, va todo lo renderizado, osea lo que se muestra en pantalla.
//! Render -----------------
    return (

      // Todo debe ir dentro de un div
        <div className='App'>

{/* Aca, en la linea 37 le paso la funcion onSearch a Nav */}
{/* //? Aca dejo al Nav fuera del Routes para que funcione siempre */}

          {pathname !== '/' && <Nav onSearch= {onSearch}/>}
        <Routes>
          {/* //? Aca en route agregamos el link por decirlo asi.. le asignamos el path y el elemento que necesitamos o props */} 
          {/* //! cuando este en path va a ese lugar, recien ahi ejecutar el elemento, diferente a Link que te lleva a   */}
          <Route path='/' element={<Form login={login} />}/>
          <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/> 
          <Route path='/about' element={<About/>}/>
          <Route path='/favorites' element={<Favorites/>}/>
          {/* cuando guardo /detail/:detailId (ese :detailId es el id que busco), !! que me lo da la URL y esto sucede porque en Card en Link to={`/detail/${id}} le dije que vaya al id  AHORA!!! en detail tomo params que seria el id y lo tomo con: const params = useParams() y params toma el valor del id*/}
          <Route path="/detail/:detailId" element={<Detail/>}/>
          <Route exact path="/*" element={<NotFound/>} />
        </Routes>

{/* !! le paso la fn onClose a Card mediante cards  la fn onClose esta mas arriba, fuera del return PERO en realidad lo que hace es que la propiedad character que seria el array de objetos, le pasa a Cards la propiedad al estar entre llaves, lo mismo pasas con onClose, entonces Cards, puede usarlos.  */}
   
        
    </div>
  )
}

//export default App
