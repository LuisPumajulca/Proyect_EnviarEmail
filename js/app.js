document.addEventListener('DOMContentLoaded', function() {


    // Seleccionar los elementos de la interfaz
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');

    // Asignar eventos
    inputEmail.addEventListener('blur', validar); // blur se ejecuta cuando abandona un campo
    inputAsunto.addEventListener('blur', validar);
    inputMensaje.addEventListener('blur' , validar);


    function validar(e) {
        if(e.target.value.trim() === '') { // .trim elimina espacios en blanco
            console.log('Esta vacio')
        } else {
            console.log('si hay algo...')
        }
    }
    
});
