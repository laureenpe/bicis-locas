function validateForm () {
  /* Escribe tú código aquí */
  var nombre = document.getElementById('name').value
  var apellido = document.getElementById('lastname').value
  var email = document.getElementById('input-email').value
  var password = document.getElementById('input-password').value
  var twitter = document.getElementById('input-social').value
  var primeraLetra = /([A-Z])[a-z]/; // primera letra debe ser Mayúscula-expresión regular
  var validateEmail = /\w+@\w+\.+[a-z]/; // email debe tener formato valido @

  if (nombre === '' || apellido === '' || email === '' || password === '') {
     html += "<section><span class='alert'> Ingrese los campos obligatorios'" ; //+= para que concatene las cosas y me muestre todo
	return false
  }
  else if (!primeraLetra.test(nombre)) { // The test() method tests for a match in a string.This method returns true if it finds a match, otherwise it returns false
    var papa=document.getElementsByClassName("name-container input-box")
	var hijo= document.createElement("span");//creo el elemento que quiero que se convierta en hijo
	var textohijo= document.createTextNode("no puede quedar vacio");//creo el texto del elemento creado
	hijo.appendChild(textohijo);//de adentro hacia afuera, llamo al papá del texto(span)
	papa.appendChild(hijo);//de mi elemento hijo busco el papá div
	//html += "<span class='alert'> 'Ingrese un nombre válido,solo la primera letra debe ser mayúscula' " ; //+= para que concatene las cosas y me muestre todo

    return false
  }
  else if (!primeraLetra.test(apellido)) {
    html += "<span class='alert'> 'Ingrese un apellido válido,solo la primera letra debe ser mayúscula' " ; //+= para que concatene las cosas y me muestre todo
    return false

	
  }
  else if (!validateEmail.test(email)) {
    html += "<span class='alert'> 'Debe ingresar un correo electrónico válido' " ; //+= para que concatene las cosas y me muestre todo

	return false
  }
  else if (password.length < 6) {
  
	return false
  }
  else if (password === 'password' || password === '123456' || password === '098754') {
    alert ("Use una contraseña segura"); //+= para que concatene las cosas y me muestre todo
	return false
  }

}
// Expresiones regulares: http://www.regular-expressions.info/javascriptexample.html
/*function validarEmail(email ) {
    expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
    if ( !expr.test(email) )
        alert("Error: La dirección de correo " + email + " es incorrecta.")
}*/
