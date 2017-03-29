function agregarPendiente(){
    var texto=document.getElementById("linombre").value;
    var li=document.createElement("LI");
    li.innerHTML=texto==''?'(nada)':texto;
    document.getElementById("lista").appendChild(li);
}


function crearLista(){
    var nuLista = document.getElementById("listaPen");
    var cln = nuLista.cloneNode(true);
    document.getElementById("nu").appendChild(cln);


}
/*la lista se clona, pero al presionar sobre sus elementos estos no se borran :(
Creo que podría usar un objeto, pero no estoy segura, así que lo dejo así*/


function borrarElemento(){
    lis=document.getElementById("lista").getElementsByTagName("li");
    for(var i=0; i<lis.length;i++){
        lis[i].onclick=function(){
            if(confirm("¿Eliminar este pendiente?"))
            this.parentNode.removeChild(this);
        };
    }
};


/*function borrarLista(){
    var seccion = document.getElementsByTagName("section");
    if(seccion.hasChildNodes()){
        seccion.removeChild(seccion.childNodes[1]);
    }
}*/

function borrarLista(){
    var eliminar = document.getElementById("listaPen");
    eliminar.onclick=function(){
    if(confirm("¿Eliminar esta lista?")){
        this.removeChild(this);
        }
    }
}

//Ya no sé qué estoy haciendo...