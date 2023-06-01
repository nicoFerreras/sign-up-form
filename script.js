
function validarContraseña(contraseña) {
    const regex = /^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9]+$/;
    const longitud = contraseña.length;
  
    if (longitud < 6 || longitud > 8) {
      return false;
    }
  
    if (!regex.test(contraseña)) {
      return false;
    }
  
   
    return true;
  }