// //Arrays en JS
// const listaAsado=["asado","vacio","chori","provoleta","chinchu","carbon","ensalada","pan","fernet","vino","gaseosa"];
// console.log(listaAsado[3]);
// console.log(listaAsado);

// // for(let i=0;i<11;i++){
// //     console.log("Producto posicion "+i+": "+listaAsado[i]);
// // }

// console.log("Cantidad de elementos del array: "+listaAsado.length);

// for(let i=0;i<listaAsado.length;i++){
//     console.log("Producto posicion "+i+": "+listaAsado[i]);
// }

// //metodo push
// listaAsado.push("postre");
// console.log(listaAsado);

// //metodo unshift
// listaAsado.unshift("servilletas");
// console.log(listaAsado);

// //metodo pop
// listaAsado.pop();

// //metodo shift
// listaAsado.shift();
// console.log(listaAsado);

// //metodo splice
// listaAsado.splice(2,3);
// console.log(listaAsado);

// //metodo join
// let pasadoAString=listaAsado.join(" --*-- ");//un string
// console.log(pasadoAString);

// //metodo concat
// const perros   = ["Pupy", "Ronnie"];
// const gatos = ["Mishi", "Garfield", "Zuri"];
// const mascotas = perros.concat(gatos); //nuevo array
// console.log(mascotas);
// // ["Pupy", “Ronnie”, "Mishi", “Garfield”, "Zuri"]

// //metodo slice
// const bebidas=listaAsado.slice(5,8);
// console.log(bebidas);
// console.log(listaAsado);//intacta

// //indexof
// let aBuscar=prompt("Ingresa el producto a buscar").toLowerCase();
// let posicion=listaAsado.indexOf(aBuscar);//si lo encuentra te dice la posicion sino -1
// if(posicion != -1){
//     alert(aBuscar +" está en la lista en la posicion "+ posicion);
// }else{
//     alert("No se encuentra en la lista");
// }

// //includes
// let existe=listaAsado.includes("leña");
// console.log(existe);//false

// //reverse
// const cursos=["js","python","html"];
// cursos.reverse();
// console.log(cursos);

//Array de objetos
const libros=[
    {
        isbn:"2345123",
        titulo:"Harry Potter",
        genero:"Aventuras",
        precio:230.90
    },
    {
        isbn:"9099777",
        titulo:"Elige tu propia aventura",
        genero:"Aventuras",
        precio:199.00
    },
    {
        isbn:"12121212",
        titulo:"JS para principiantes",
        genero:"Educacion",
        precio:290.00
    },
    {
        isbn:"3333333",
        titulo:"Diccionario de Frances-Español",
        genero:"Diccionario",
        precio:99.90
    }
];


libros.push({
    isbn:"7890098",
    titulo:"Diccionario de Ingles-Español",
    genero:"Diccionario",
    precio:129.90
});

console.table(libros);
//recorrer la lista de libros iterando sobre cada libro
for(const libro of libros){
    console.log("Titulo: "+libro.titulo+" Precio $"+libro.precio);
}

// for(let i=0;i<libros.length;i++){
//     console.log("Titulo: "+libros[i].titulo+" Precio $"+libros[i].precio);
// }

//ejercicio con indexof
let isbn=prompt("Ingresa el isbn a buscar");
let libroEncontrado;
for (const libro of libros){
    if(libro.isbn == isbn){
        alert("Libro encontrado:");
        let aString=libro.isbn+"\n"+libro.titulo+"\n"+libro.genero+"\n"+libro.precio;
        alert(aString);
        libroEncontrado=libro;
    }
}

console.log("El libro se encuentra en el indice: "+libros.indexOf(libroEncontrado));