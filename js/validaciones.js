//Autor: Mar Mazuelas
//Version: 0.1
//Fecha: 24/05/2019

//const valida = document.getElementById("form");
const nombre = document.getElementById("campoNombre");
const apellidos = document.getElementById("campoApellidos");
const dia = document.getElementById("campoDia");
const mes = document.getElementById("campoMes");
const ano = document.getElementById("campoAnio");
const email = document.getElementById("campoEmail");
const lista = document.getElementById("campoLista");

//convocamos el evento en el cual se va a ejecutar la función
nombre.onpaste = validarTexto;
nombre.onblur = validarTexto;
nombre.onchange = validarTexto;
nombre.onkeyup = validarTexto;

document.form.enviar.disabled=true;
estado = false;

function validarDatos() {  }

function validarTexto(){
    //le quitamos los espacion en blanco a lo que haya introducido en la caja de texto
    this.value = this.value.trim();
    const patron = /^[a-zA-Z\sáéíóúÁÉÍÓÚ]+$/;

    if (this.value && patron.test(this.value)){
        estado = true;
        console.log(estado);
    }
}

function validarFecha(){
    const patron = /^[0-9]{2}$/;
    const patronAno = /^[0-9]{4}$/;

    if (patron.test(dia) && dia.value > 0 && dia.value){
        if (patron.test(mes) && mes.value > 0 && mes.value){
            if (patronAno.test(ano) && ano.value > 0 && ano.value){
                estado = true;
                console.log(estado);
            }
        }
    }
    
}

function validarEmail(){

}