 // Aquí tu código
console.log("hola");

 const boton = document.getElementById('agregar');
const lista = document.getElementById('lista');

console.log(boton);
console.log(lista);
/* DATA recomienda hacer la función a parte y luego solo llamarla
function addList { 
     const nuevoElemento = prompt ('Añade un elemento a la lista');
    if (nuevoElemento){
        const añadoElemento = document.createElement('li'); 
        añadoElemento.textContent = nuevoElemento; 
        lista.appendChild(añadoElemento);
    }
}

boton.addEventListener('click', addList());
*/

boton.addEventListener('click', function(){
    const nuevoElemento = prompt ('Añade un elemento a la lista');
    if (nuevoElemento){
        const añadoElemento = document.createElement('li'); 
        añadoElemento.textContent = nuevoElemento; 
        lista.appendChild(añadoElemento);
    } else {
        alert("por favor ingrese un valor válido")
} 
}
)

/*
Otra manera de hacerlo MUY BUENA:
en la función:
lista.insertAdjacentHTML("beforeeend", ("<li>" + ciudad + "</li>")

*/ 
const titulo = document.querySelector('h1');
const nuevoTitulo = "Lista de la compra";
titulo.textContent= nuevoTitulo; 