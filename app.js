var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible == false){
        menu.style.display = "block";
        menu_visible = true;
    }
    else {
        menu.style.display = "none";
        menu_visible = false;
    }
}

let links = document.querySelectorAll("nav a");
for(var x = 0; x <links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;

    }
}

function crearBarra(id_barra){
    for(i=0;i<=10;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}

let html = document.getElementById("html");
crearBarra(html);
let javascript = document.getElementById("javascript");
crearBarra(javascript);
let PHP = document.getElementById("PHP");
crearBarra(PHP);
let SQL = document.getElementById("SQL");
crearBarra(SQL);

let contadores = [-1,-1,-1,-1,];
let entro = false;
function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro = true;
        const intervalHtml = setInterval(function(){
            pintarBarra(html, 5, 0, intervalHtml);
        },100);
        const intervalJavascript = setInterval(function(){
            pintarBarra(javascript, 3, 1, intervalJavascript);
        },100);
        const intervalPhp = setInterval(function(){
            pintarBarra(PHP, 2, 2, intervalPhp);
        },100);
        const intervalSql = setInterval(function(){
            pintarBarra(SQL, 5, 3, intervalSql);
        },100);
    }
}

function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#940253";
    } else {
        clearInterval(inverval);
    }
}

window.onscroll = function(){
    efectoHabilidades();
}
