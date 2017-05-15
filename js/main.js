function validateForm() {
    /* Escribe tú código aquí */
    //Asigno las variables, buscandolas en el html
    var nombre = document.getElementById('name').value;
    var apellido = document.getElementById('lastname').value;
    var email = document.getElementById('input-email').value;
    var contrasenia = document.getElementById('input-password').value;
    var twitter = document.getElementById('input-social').value;
    var firstChar = /([A-Z])[a-z]/; //expresion regular para validar q las 1ras letras sean mayusculas
    var validateEmail = /\w+@\w+\.+[a-z]/; //expresion regular para validar el email
    //var deslizador = document.getElementsByClassName("form-group input-box").value; Busco deslizador-selector 

    function className() {
        if (!firstChar.test(name)) { //The test() method tests for a match in a string.
            var papa = document.getElementsByClassName("name-container input-box")[0]; //busco el contenedor clase q sera mi padre
            var hijo = document.createElement("span"); //creo el elemento que quiero que se convierta en hijo
            var textohijo = document.createTextNode("Ingrese un nombre válido"); //creo el texto del elemento creado
            hijo.appendChild(textohijo); //de adentro hacia afuera, llamo al papá del texto(span)
            papa.appendChild(hijo); //de mi elemento hijo busco el papá (div)

        }
    }
    className();

    function lastName() {
        if (!firstChar.test(apellido)) { //The test() method tests for a match in a string.
            var papaLast = document.getElementsByClassName("lastname-container input-box")[0];
            var hijo2 = document.createElement("span"); //creo el elemento que quiero que se convierta en hijo
            var textohijo2 = document.createTextNode("Ingrese un apellido válido"); //creo el texto del elemento creado
            hijo2.appendChild(textohijo2); //de adentro hacia afuera, llamo al papá del texto(span)
            papaLast.appendChild(hijo2); //de mi elemento hijo busco el papá div

        }
    }
    lastName();

    function correo() {
        if (!validateEmail.test(email)) {
            var papa3 = document.getElementsByClassName("email-container input-box")[0];
            var hijo3 = document.createElement("span"); //creo el elemento que quiero que se convierta en hijo
            var textohijo3 = document.createTextNode("Debe ingresar un correo electrónico válido"); //creo el texto del elemento creado
            hijo3.appendChild(textohijo3); //de adentro hacia afuera, llamo al papá del texto(span)
            papa3.appendChild(hijo3); //de mi elemento hijo busco el papá div

        }
    }
    correo();


    function password() {
        if (contrasenia.length < 6) {
            var papaPassword = document.getElementsByClassName("form-group input-box")[0];
            var hijoPassword = document.createElement("span"); //creo el elemento que quiero que se convierta en hijo
            var textohijoPassword = document.createTextNode("La contraseña debe tener al menos 6 caracteres"); //creo el texto del elemento creado
            hijoPassword.appendChild(textohijoPassword); //de adentro hacia afuera, llamo al papá del texto(span)
            papaPassword.appendChild(hijoPassword); //de mi elemento hijo busco el papá div

        } else if (contrasenia === "password" || password === "123456" || password === "098754") {
            var papaPassword = document.getElementsByClassName("form-group input-box")[0];
            var hijoPassword = document.createElement("span"); //creo el elemento que quiero que se convierta en hijo
            var textohijoPassword = document.createTextNode("La contraseña no puede ser: password o 098754"); //creo el texto del elemento creado
            hijoPassword.appendChild(textohijoPassword); //de adentro hacia afuera, llamo al papá del texto(span)
            papaPassword.appendChild(hijoPassword); //de mi elemento hijo busco el papá div
            console.log(textohijoPassword);


        }
    }
    password();


    /*function formulario() {
        if (deslizador == null || deslizador == 0) {
            var papaDesliza = document.getElementsByClassName("form-control")[0];
            var hijoDesliza = document.createElement("span"); //creo el elemento que quiero que se convierta en hijo
            var textohijoDesliza = document.createTextNode("Seleccione una opción"); //creo el texto del elemento creado
            hijoDesliza.appendChild(textohijoDesliza); //de adentro hacia afuera, llamo al papá del texto(span)
            papaDesliza.appendChild(hijoDesliza); //de mi elemento hijo busco el papá div

        }
    }
    formulario();*/
}







// Expresiones regulares: http://www.regular-expressions.info/javascriptexample.html
//https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions




/*function vacio() {
    if (nombre === "" || apellido === "" || email === "" || contrasenia === "") {

        var papa = document.getElementsByClassName("name-container input-box")[0];
        var hijo = document.createElement("span"); //creo el elemento que quiero que se convierta en hijo
        var textohijo = document.createTextNode("Debe ingresar los campos obligatorios"); //creo el texto del elemento creado
        hijo.appendChild(textohijo); //de adentro hacia afuera, llamo al papá del texto(span)
        papa.appendChild(hijo); //de mi elemento hijo busco el papá div

    }
}
vacio();*/