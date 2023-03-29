import './App.css'
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav.jsx'
import { useState } from 'react'

function App () {
    
  const [characters, setCharacters] = useState([]);
  
    const onSearch = (id) =>{
      const URL_BASE = 'https://be-a-rym.up.railway.app/api';
      const KEY = 'fc8485faa954.32266e8830932b728fd1';
    
      fetch(`${URL_BASE}/character/${id}?key=${KEY}`)
      .then(response=>response.json())
      .then(data=>{
       if (data.name){
        setCharacters((oldChars) => [...oldChars, data])
        }else{
          alert('Card no encontrada')
        }
      });
    } ;

    const onClose = (id) =>{
      setCharacters(characters.filter((char) => char.id !== id));
    };
//filter me devuelve un array nuevo el cual se lo paso a setCharacters
    return (
    <div className='App' style={{ padding: '25px' }}>
      
        <Nav onSearch= {onSearch}/>
        <Cards characters={characters} onClose={onClose}/>
{/* le paso la fn onClose a Card mediante cards     */}
    </div>
  )
}

export default App
