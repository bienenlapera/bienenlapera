
const somos = document.getElementById("somos");
const prod = document.getElementById("prod");
const what = document.getElementById("what");
const escritos = document.getElementById("escritos");
const archivo = document.getElementById("archivo");

const modal = document.getElementById("modal");
const klose = document.getElementById("klose");
const textoSomos = document.getElementById("texto-somos");
const galeriaMemes = document.getElementById("galeria-memes")
const sliderProd = document.getElementById("slider");
const botonera = document.getElementById("botonera");
const slider = document.getElementById("slider");
const input =document.getElementsByName('mensaje')[0];
const logo = document.getElementById('logo');

prod.setAttribute('data-content', "Videos");
somos.setAttribute('data-content', "Quiénes somos");
what.setAttribute('data-content', "Colaborá");
escritos.setAttribute('data-content', "Escritos");
archivo.setAttribute('data-content', "Archivo de Memes");

// Función Display lo que diga la botonera

function displayInfo(idDisplay) {
  if (idDisplay === "somos"){
    textoSomos.classList.remove('display-none');
    slider.classList.add("display-none");
    galeriaMemes.classList.add("display-none");
    modal.classList.add("mostrar-modal");

  } else if (idDisplay === "prod"){
    slider.classList.remove("display-none");
    textoSomos.classList.add("display-none");
    galeriaMemes.classList.add("display-none");
    modal.classList.add("mostrar-modal");
    
  } else if (idDisplay === "archivo"){
   galeriaMemes.classList.remove("display-none");
   slider.classList.add("display-none");
   textoSomos.classList.add("display-none");
   modal.classList.add("mostrar-modal");
  }else{
    console.log("na")
  } 
}

// Cerrar Modal --------------------------


klose.addEventListener("click", () => {
    modal.classList.remove("mostrar-modal");
    textoSomos.classList.add("display-none");
    slider.classList.add("display-none");
});


// FUNCION MAQUINA DE ESCRBIR -------------------

  let isRun = false;
  let intervalId;

  function maquinaDeEscribir(texto, display) {
    if (isRun === true) {
        clearInterval(intervalId);
    }
    isRun = true;
    let i = 0;  
    display.placeholder = '';
    intervalId = setInterval(() => {
      display.placeholder += texto.charAt(i);
      i++;
      if (i >= texto.length) {
        clearInterval(intervalId);  
      }   
    }, 50);
}

// TEXTO PLACEHOLDER //
const textopla = "Dejanos acá tu consulta y te constestaremos a la brevedad...";

logo.addEventListener("click", myFunction);
logo.addEventListener("click", contadorClicks);

function myFunction() {
  maquinaDeEscribir(textopla, input);
} 

count = 0;

function contadorClicks(){
  count++;
  if (count <= 10 && count >= 15){
    maquinaDeEscribir("¡Más 10 clicks en la imagen! ¡Que ansiedad hermane!", input);
  }
  if (count > 15){
    maquinaDeEscribir(`¡${count} veces! Una ametralladora de clicks...`,input)
  }

  if (count == 100){
    maquinaDeEscribir("💯😅😅😅😅",input);
  }
}

  
  


