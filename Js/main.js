document.addEventListener("click", numClick);
var hola=document.getElementById("clicks")

  var cont = 0;

function numClick() {
	console.log("jdngj");
	cont++;
	hola.innerHTML= cont;
}

function contador(texto){
	var caracteres = texto.length;
	var contador= document.getElementById("caracteres");
	contador.innerHTML = caracteres;
}



 	



