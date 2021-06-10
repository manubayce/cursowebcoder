let nombre = document.getElementById("nombre")
let apellido = document.getElementById("apellido")
let telefono = document.getElementById("telefono")
let email = document.getElementById("email")
let form = document.getElementById("form")

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
    Email = email,
}

console.log(personaForm);

// Objeto 2

let objeto2 = {
    Nombre = "Manuel",
    Apellido = "Bayce",
    Telefono = "75889",
    Email = "fdsfdsf@SpeechGrammarList.com",
}

console.log(objeto2);