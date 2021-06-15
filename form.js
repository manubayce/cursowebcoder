let form = document.getElementById("form");
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let telefono = document.getElementById("telefono");
let email = document.getElementById("email");

form.addEventListener("submit", e=>{
    e.preventDefault()
    if(nombre.value.length <3 || apellido.value.length <3){
        alert("Este valor es demasiado corto")
    }
})

// Objeto

let personaForm = {    

    Nombre = nombre,    
    
    Apellido = apellido,    
    
    Telefono = telefono,    
    
    Email = email
    
    }

console.log(personaForm);

// Array

let personasFormulario = [
    {nombre: "manuel", apellido: "bayce", telefono: 456980, email: "manuelbayce@gmail.com"},
    {nombre: "Eduardo", apellido: "lopez", telefono: 693012, email: "eduardolopez@gmail.com"},
    {nombre: "sofía", apellido: "Alvarez", telefono: 421367, email: "sofiaalvarez@gmail.com"},
    {nombre: "mariana", apellido: "Gutierrez", telefono: 124368, email: "marianaalvarez@gmail.com"},
]

let nombreMayus = personasFormulario.map(nombre => nombre.toUpperCase())
let apellidoMayus = personasFormulario.map(apellido => apellido.toUpperCase())

console.log(nombreMayus);
console.log(apellidoMayus);