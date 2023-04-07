import React from 'react';
import style from './Form.module.css';
import { useState } from 'react';
import validation from './validation';

const Form = ({login}) => {
  //aca le da un estado inicial que va a tener un objeto con usuario y password
  const [userData, setUserData] = useState({
    username: '',
    password: '',
  });

//genera otro estado para los errores
  const [errors, setErrors] = useState({
    username: '',
    password: '',
  });

  //genera una fn que ante un evento haga algo.. 
  const handleInputChange = (event) => {
//toma el nombre, que puede ser name o password y el valor de cada uno
    const property = event.target.name;
    const value = event.target.value;
//aca, con setUserData, cambia el estado 
    setUserData({...userData, [property]: value});
//! Aca va la validacion del email y le paso errors y setErrors para q la fn valida.. la pueda utilizar.
    validation ({...userData, [property]: value}, errors, setErrors)

  };
//cuando hago en submit linea 37, toma el evento 
  const submitHandler = (event) =>{
    event.preventDefault();  // <--- con esto NO me recarga la pagina(prevengo el comportam x defalut.)
    login(userData);
  };

  return (
      <form className={style.intro} onSubmit={submitHandler}>
    <h1 className ={style.logo}>Welcome</h1>
            <div className={style.formInput}>
            <label htmlFor="username">Email:</label>
            {/* en el input le pone un valor que despues lo vamos a usar, pero va dentro del estado */}
            <input type="text" name='username' className={style.input} value={userData.username} onChange={handleInputChange}/>
{/* Aqui irian los mensajes de errores */}
            <p>{errors.username}</p>

        </div>
        <div className={style.formInput}>
            <label htmlFor="password">Password:</label>
            {/* onChange le colocamos que va a ser igual a la fn handleInpoutChange */}
            <input type="text" name='password' value={userData.password} onChange={handleInputChange}/>
            <p>{errors.password}</p>
        </div>
        <button className={style.formInput}>Login</button>
    </form>
  )
}

export default Form