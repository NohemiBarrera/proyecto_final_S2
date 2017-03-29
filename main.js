function agregarPendiente(){
    var texto=document.getElementById('liname').value;
    var li=document.createElement('LI');
    li.innerHTML=texto==''?'(nada)':texto;
    document.getElementById('lista').appendChild(li);
}

function clone(){
    function crearLista(){
    var nuLista = document.getElementById("lista");
    var cln = nuLista.cloneNode(true);
    document.getElementById("nu").appendChild(cln);
}
}



function borrarElemento(){
    lis=document.getElementById('lista').getElementsByTagName('li');
    for(var i=0; i<lis.length;i++){
        lis[i].onclick=function(){
            if(confirm('¿Borrar este pendiente?'))
            this.parentNode.removeChild(this);
        };
    }
    
}