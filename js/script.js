 // Aquí tu código
const boton = document.getElementById('agregar');
const lista = document.getElementById('lista');



boton.addEventListener('click', function(){
    const nuevoElemento = prompt ('Añade un elemento a la lista');
    if (nuevoElemento){
        const añadoElemento = document.createElement('li'); 
        añadoElemento.textContent = nuevoElemento; 
        lista.appendChild(añadoElemento);
    }
})


const titulo = document.querySelector('h1');
const nuevoTitulo = "Lista de la compra";
titulo.textContent= nuevoTitulo; 