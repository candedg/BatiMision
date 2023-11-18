//traigo los elementos a trabajar y los establezco como variables
let sonidoON = document.querySelector(".sonidoON");
let batiClick = document.querySelector(".batiClick");
let batmanOFF = document.querySelector(".batmanOFF");
let batiBoton = document.querySelector(".batiBoton");

//establezco valor inicial
let estadoLinterna = false;

const controlarLinterna = () => {
  estadoLinterna = !estadoLinterna; 
  // la negación intercambia el valor booleano de estadoLinterna, ahora es el valor contrario al que ingresó a la función
  sonidoLinterna(); //ejecuta sonidoLinterna 
  estadoLinterna? batmanOFF.classList.add("batmanON") : batmanOFF.classList.remove("batmanON");
  //if ternario analiza booleanos mas simple
};

const sonidoLinterna = () => {
  batiClick.play();//en ambas opciones debo reproducir el click
  sonidoON.paused? sonidoON.play() : sonidoON.pause(), (sonidoON.currentTime = 0);
  //if ternario analiza booleano de sonido (si paused es true o false)
};

batiBoton.addEventListener("click", controlarLinterna);
//evento "escucha" click y ejecuta función



/*function controlarLinterna() {
  if (estadoLinterna == "apagado") {
    estadoLinterna = "encendido";
    sonidoLinterna();
    batmanOFF.classList.add("batmanON");
  } else {
    estadoLinterna = "apagado";
    sonidoLinterna();
    batmanOFF.classList.remove("batmanON");
  }
}*/

/*function sonidoLinterna() {
  if (sonidoON.paused) {
    batiClick.play();
    sonidoON.play();
  } else {
    batiClick.play();
    sonidoON.pause();
    sonidoON.currentTime = 0;
  }
}*/
