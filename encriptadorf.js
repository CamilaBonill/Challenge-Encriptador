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
    var txtCifrado = texto.replaceAll("e", "enter").replaceAll("o","ober")
    .replaceAll("i","imes").replaceAll("a","ai").replaceAll("u","ufat");

    limpiador(txtCifrado)
     
}

function deseencriptar(){
    var texto = document.getElementById("inputTexto").value;

    var txtCifrado = texto.replaceAll("enter","e").replaceAll("ober","o")
    .replaceAll("imes","i").replaceAll("ai","a").replaceAll("ufat","u");

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
    document.getElementById("texto2").style.display ="none";
    document.getElementById("txtresultado").innerText = txtCifrado;
    document.getElementById("copy").style.display = "show"
    document.getElementById("copy").style.display = "inherit"
}
