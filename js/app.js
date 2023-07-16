document.addEventListener('DOMContentLoaded', function() {

    // Seleccionar los elementos de la interfaz
    const inputEmail = document.querySelector('#email');
    const inputCC = document.querySelector('#cc');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');

    // Asignar eventos
    inputEmail.addEventListener('blur', validar); // blur se ejecuta cuando abandona un campo
    inputCC.addEventListener('blur', validar);
    inputAsunto.addEventListener('blur', validar);
    inputMensaje.addEventListener('blur' , validar);


    function validar(e) {
        if(e.target.value.trim() === '') { // .trim elimina espacios en blanco
            mostrarAlerta(`El campo ${e.target.id} es obligatorio!`, e.target.parentElement);
            return;
        } 

        limpiarAlerta(e.target.parentElement);

        console.log('despues del IF')
    }

    function mostrarAlerta(mensaje, referencia) {
       
        limpiarAlerta(referencia);

        // Generando alerta en HTML
        const error = document.createElement('P');
        error.textContent = mensaje;
        error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center');

        // Inyectar el error al formulario
        referencia.appendChild(error);
    }

    // Limpiando la alerta cuando se llena los datos correctos
    function limpiarAlerta(referencia) {
         // Comprueba si ya existe una alerta
        const alerta = referencia.querySelector('.bg-red-600');
        if(alerta) {
            alerta.remove();
        }
    }
    
});
