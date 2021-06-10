const nombre = document.getElementById("nombre")
const apellido = document.getElementById("apellido")
const telefono = document.getElementById("telefono")
const email = document.getElementById("email")
const form = document.getElementById("form")

form.addEventListener("submit", e=>{
    e.preventDefault()
    if(nombre.value.length <3 && apellido.value.length <3){
        alert("Este valor es demasiado corto")
    }
})