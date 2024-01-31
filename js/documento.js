document.getElementById('btn-mostrar').addEventListener('click', mostrar);

function mostrar(){
    document.getElementById('parrafo').style.display="block";
    document.getElementById('btn-ocultar').style.display="block";
    document.getElementById('btn-mostrar').style.display="none";
}

document.getElementById('btn-ocultar').addEventListener('click', ocultar)

function ocultar(){
    document.getElementById('parrafo').style.display="none";
    document.getElementById('btn-ocultar').style.display="none";
    document.getElementById('btn-mostrar').style.display="block";
}