var inputTexto = document.querySelector("#input-texto");
var outInput = document.querySelector("#output");

function criptografar(){
	var texto = inputTexto.value;

	var mostraTexto = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g,"ufat")
    
	document.getElementById("output").innerHTML = '<textarea readonly id="output-texto">' + mostraTexto + '</textarea>' + '<button onclick="copiar()" class="copy" id="copiar">Copiar</button>'
}

function descriptografar(){
  // alert("descriptografar");
	var texto = inputTexto.value;

	var mostraTexto = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u")

	document.getElementById("output").innerHTML = '<textarea readonly id="output-texto">' + mostraTexto + '</textarea>' + '<button onclick="copiar()" class="copy" id="copiar">Copiar</button>'
}

function copiar(){
	var textCop = document.getElementById("output-texto");

	textCop.select();
	document.execCommand("copy");
	alert("Texto Copiado");	
}

 