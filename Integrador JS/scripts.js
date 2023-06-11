
const ticket = 200

let formulario, nombre, apellido, correo, cantidad, categoria, total_p, btnBorrar, btnResumen;



formulario = document.querySelector('#formulario');
cantidad = document.querySelector('#cantidad');
categoria = document.querySelector('#categoria');
total_p = document.querySelector('#totalAPagar');
btnResumen = document.querySelector('#resumen');
btnBorrar = document.querySelector('#borrar');

function calcularPago() {

    let total = cantidad.value * ticket;
    
    switch (categoria.value) {
        case "estudiante":
            
            total = total * 20 / 100
            break;
        case "trainee":
            
            total = total * 50 / 100
            break;
        case "junior":
            
            total = total * 85 / 100
            break;
    }

    total_p.innerHTML = `Total a Pagar: $ ${total}`;

}


btnResumen.addEventListener('click', (event) => {
    event.preventDefault();
    comprobacion();
    calcularPago();
})

btnBorrar.addEventListener('click', () => formulario.reset());



function comprobacion() {
    nombre = document.querySelector('input[placeholder="Nombre"]').value;
    apellido = document.querySelector('input[placeholder="Apellido"]').value;
    correo = document.querySelector('input[placeholder="Correo"]').value;

    if (nombre == '' && apellido == '' && correo == '') {
        alert('COMPLETA LOS CAMPOS');
        return
    }
    else if ( nombre == ''){
        alert('ingresa tu nombre')
        return
    }
    else if(apellido == ''){
        alert('ingresa tu apellido')
        return
    }
    else if(correo == ''){
        alert('ingresa tu correo')
        return
    }
    else if(cantidad.value == '' || cantidad.value == 0){
        alert('ingresa la cantidad')
        return
    }

}

