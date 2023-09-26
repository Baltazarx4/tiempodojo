function mostrarmensaje(element){
    alert("Loanding weather report");
}

function quitarcookie(element){
    element.closest(".cookies").remove();
}

function cambiartemperaturas(element){
    let opcion = element.value;
    let temperaturas = document.querySelectorAll('#grados');
    console.log(temperaturas);
    if(opcion === 'f'){
        for(let i = 0; i< temperaturas.length;i++){
            let temperaturacelcius = temperaturas[i].innerText;
            let temperaturafinal= (temperaturacelcius * 1.8) +32;
            temperaturas[i].innerText = Math.round(temperaturafinal);
        }
    }
    else{
        for(let i = 0; i< temperaturas.length;i++){
            let temperaturafaren = temperaturas[i].innerText;
            let temperaturafinal = (temperaturafaren -32) /1.8;
            temperaturas[i].innerText = Math.round(temperaturafinal);
        }
    }
}