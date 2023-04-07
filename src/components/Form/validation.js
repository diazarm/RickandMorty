const validation = (userData, errors, setErrors) => {
    // Validación del nombre de usuario
    if (!userData.username) {
      setErrors({ ...errors, username: "Por favor completa con el email" });
    } else if (userData.username.length > 35) {
      setErrors({ ...errors, username: "No puede superar los 35 caracteres" });
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        userData.username
      )
    ) {
      setErrors({ ...errors, username: "Email invalido" });
    } else {
      setErrors({ ...errors, username: "" });
    }
  
    // Validación de la contraseña
    if (!userData.password) {
      setErrors({ ...errors, password: "Por favor completa con una contraseña" });
    } else if (userData.password.length < 6 || userData.password.length > 10) {
      setErrors({
        ...errors,
        password: "La longitud de la contraseña debe ser de 6 a 10 caracteres",
      });
    } else if (
      !/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,10}$/.test(
        userData.password
      )
    ) {
      setErrors({
        ...errors,
        password: "La contraseña debe tener al menos un número, una letra minúscula, una letra mayúscula y un carácter especial (!@#$%^&*)",
      });
    } else {
      setErrors({ ...errors, password: "" });
    }
  };
  
  export default validation;
  



// const validation = (userData, errors, setErrors) =>{
// //empezamos con userName
// if(!userData.username) setErrors({...errors, username: "Por favor completa con el email"});
// else if (userData.username.length > 35) setErrors({...errors, username:"No puede superar los 35 caracteres"});
// else if (!/^(([^<>()\[\]\.,;:\s@"]+(\.[^<>()\[\]\.,;:\s@"]+)*)|(".+"))@(([^<>()\[\]\.,;:\s@"]+\.)+[^<>()\[\]\.,;:\s@"]{2,})$/.test(userData.username)) {
// setErrors({...errors, username: "Email invalido"});
// }else{
// //y si esta bien.. 
// setErrors({...errors, username:""});
// }

// //password

// if (userData.password.length <6 || userData.password.length >10){
//     setErrors({...errors, password:"Longitud de password invalida"});
// }else if(!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,10}$/.test(userData.password)) {
//     setErrors({...errors, password:"Debe contener al menos un numero"}); 
// } else{
//     setErrors({...errors, password:""})
// }
// };

// export default validation;