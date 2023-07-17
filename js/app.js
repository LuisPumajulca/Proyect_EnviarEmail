document.addEventListener('DOMContentLoaded', function() {

    const email = {
        email: '',
        asunto: '',
        mensaje: ''
    }

    // Seleccionar los elementos de la interfaz
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');
    const btnSubmit = document.querySelector('#formulario button[type="submit"]');
    const btnReset = document.querySelector('#formulario button[type="reset"]');
    const spinner = document.querySelector('#spinner');

    // Asignar eventos
    inputEmail.addEventListener('input', validar); // blur se ejecuta cuando abandona un campo
    inputAsunto.addEventListener('input', validar);
    inputMensaje.addEventListener('input' , validar);
    formulario.addEventListener('submit' , enviarEmail);

    btnReset.addEventListener('click' , function(e) {
        e.preventDefault();

        resetFormulario();
    })

    function enviarEmail(e) {
        e.preventDefault();

        spinner.classList.add('flex');
        spinner.classList.remove('hidden');

        setTimeout(() => {
            spinner.classList.remove('flex');
            spinner.classList.add('hidden');

        resetFormulario();

        }, 3000);
    }


    function validar(e) {
        if(e.target.value.trim() === '') { // .trim elimina espacios en blanco
            mostrarAlerta(`El campo ${e.target.id} es obligatorio!`, e.target.parentElement);
            email[e.target.name] = '' // reiniciamos 
            comprobarEmail();
            return;
        } 

        if(e.target.id === 'email' && !validarEmail(e.target.value)) {
            mostrarAlerta('El email no es válido' , e.target.parentElement);
            email[e.target.name] = '' // reiniciamos 
            comprobarEmail();
            return;
        }

        limpiarAlerta(e.target.parentElement);

        // Asignar los valores
        email[e.target.name] = e.target.value.trim().toLowerCase();

        // Comprobar el objeto de email
        comprobarEmail();
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
    function validarEmail(email){
        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/  // Expresion regular , va a buscar un patron en un cadena de texto o en una serie de numeros 
        const resultado = regex.test(email);
        return resultado;
    }
    
    function comprobarEmail() {
        if(Object.values(email).includes('')) {
            btnSubmit.classList.add('opacity-50');
            btnSubmit.disabled = true;
            return
        } 
            btnSubmit.classList.remove('opacity-50');
            btnSubmit.disabled = false;
    }
    function resetFormulario() {
        // reiniciar el objeto
        email.email = '';
        email.asunto = '';
        email.nebsaje = '';

        formulario.reset();
        comprobarEmail();
    }
});
