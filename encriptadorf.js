var textarea = document.querySelector('textarea');

textarea.addEventListener('keydown', autosize);
             
function autosize(){
  var el = this;
  setTimeout(function(){
    el.style.cssText = 'height:auto; padding:0';
    el.style.cssText = 'height:' + el.scrollHeight + 'px';
  },0);
}

function encriptar(){
    var texto = document.getElementById("inputTexto").value;
    var txtCifrado = texto.replace(/e/g, "enter").replace(/o/g,"ober")
    .replace(/i/g,"imes").replace(/a/g,"ai").replace(/u/g,"ufat");

    limpiador(txtCifrado)
     
}

function deseencriptar(){
    var texto = document.getElementById("inputTexto").value;

    var txtCifrado = texto.replace(/enter/g,"e").replace(/ober/g,"o")
    .replace(/imes/g,"i").replace(/ai/g,"a").replace(/ufat/g,"u");

    limpiador(txtCifrado)

}
function copy(){
    var contenido = document.querySelector("#texto2").value;
    navigator.clipboard.writeText(contenido)
}
function limpiador(txtCifrado){
    document.getElementById("imgderecha").style.display ="none";
    document.getElementById("texto1").style.display ="none";
    document.getElementById("texto2").innerHTML = txtCifrado;
    document.getElementById("copy").style.display = "show"
    document.getElementById("copy").style.display = "inherit"
}