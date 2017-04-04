var usuario = document.getElementById("usuario")
var texto= document.getElementById("texto")
var boton= document.getElementById("twittear")
var cont = 0;


document.addEventListener("click", numClick);
usuario.addEventListener("click", noClick);
texto.addEventListener("click" , noClick);
boton.addEventListener("click" , noClick);
	

function numClick() {
	cont++;
	document.getElementById("clicks").innerHTML= cont;
}

function noClick(){
	event.stopPropagation();
}

function contador(texto){
	var caracteres = texto.length;
	var contador= document.getElementById("caracteres");
	contador.innerHTML = caracteres;
}

function publicacion(){

	var usuario = document.getElementById("usuario");
  	var texto = document.getElementById("texto");
  	 var twitte = document.getElementById("twitee");

  	var sec = document.createElement("section"); 
    var parrafo= document.createElement("p");
    var linea= document.createElement("hr");
   

    var formatoPublicacion= "@" + " " +usuario.value + " " +texto.value;

    parrafo.innerHTML= formatoPublicacion;
    sec.appendChild(parrafo);
    sec.appendChild(linea);
    twitte.appendChild(sec);

   }
 	





