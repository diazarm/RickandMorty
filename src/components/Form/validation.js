const validation = (userData, errors, setErrors) => {
    // Validación del nombre de usuario
    if (!userData.username) {
      setErrors({ ...errors, username: "Por favor completa con el email" });
    } else if (userData.username.length > 35) {
      setErrors({ ...errors, username: "No puede superar los 35 caracteres" });
    } else if (
      !/^[^@\s]{1,30}@[^\s@]+\.[^\s@]+$/.test(userData.username)
    ) {
      setErrors({ ...errors, username: "Email invalido"});
    } else {
      setErrors({ ...errors, username: "" });
    }
  
    // Validación de la contraseña
    if (!userData.password) {
      setErrors({ ...errors, password: "Por favor completa con una contraseña" });
    } else if (userData.password.length < 6 || userData.password.length > 10) {
      setErrors({...errors, password: "La longitud de la contraseña debe ser de 6 a 10 caracteres" });
    } else if (
      !/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,10}$/.test(userData.password)
    ) {
      setErrors({...errors, password: "La contraseña debe tener al menos un número, una letra minúscula, una letra mayúscula y un carácter especial (!@#$%^&*)"
      });
    } else {
      setErrors({ ...errors, password: "" });
    }
  };
  
  export default validation;
  


