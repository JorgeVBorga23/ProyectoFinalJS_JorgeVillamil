let contenido = document.getElementById("contenido")

if (localStorage.length === 0) {


    let mensaje = document.createElement("h2")
    contenido.appendChild(mensaje)
    mensaje.textContent = "No tienes ningun pais visitado!"
    mensaje.setAttribute("class", "text-center")
    let ancla = document.createElement("a")
    contenido.appendChild(ancla)
    ancla.setAttribute("href", "./crear-pais.html")
    ancla.setAttribute("class", "text-center")
    ancla.textContent = "Agrega uno nuevo"


} else {
    

    for (let i = 0; i < localStorage.length; i++) {

        var indice = localStorage.key(i)
        console.log(indice)
        var json = localStorage.getItem(indice)
        var pais = JSON.parse(json)
        console.log(pais)

        crearTarjeta(pais, contenido)




    }





}


function crearTarjeta(pais, contenido) {
    //tarjeta principal
    var card = document.createElement("div")
    contenido.appendChild(card)
    card.setAttribute("class", "col-3")
    card.setAttribute("style", "width: 18rem;box-shadow: 0 0 0 .3em "+pais.color+";margin: .7em;padding: 1em; ")



    //imagen
    var img = document.createElement("img")
    card.appendChild(img)
    img.setAttribute("class", "card-img-top")
    img.setAttribute("src", "https://flagcdn.com/256x192/"+pais.codigo.toLowerCase()+".png")
    img.setAttribute("alt", pais.nombre)

    //card body
    var body = document.createElement("div")
    card.appendChild(body)
    body.setAttribute("class", "card-body")

    //nombre pais
    var titulo = document.createElement("h5")
    body.appendChild(titulo)
    titulo.setAttribute("class", "card-title")
    titulo.textContent = pais.nombre

    //fecha visitado
    var fecha = document.createElement("p")
    body.appendChild(fecha)
    fecha.setAttribute("class", "card-text")
    fecha.textContent = "Visitado en: " + pais.fecha
    //capital
    var capital = document.createElement("p")
    body.appendChild(capital)
    capital.setAttribute("class", "card-text")
    capital.textContent = "Capital: " + pais.capital
    //Comentarios 
    var comentarios = document.createElement("p")
    body.appendChild(comentarios)
    comentarios.setAttribute("class", "card-text")
    comentarios.setAttribute("style", "color: green")
    comentarios.textContent = pais.comentarios
    //Botones 
    var editar = document.createElement("button")
    body.appendChild(editar)
    editar.textContent = "Editar"
    editar.setAttribute("class", "btn btn-primary")
    editar.setAttribute("style", "width: 5rem;height:2rem;font-size:.9rem;")
    editar.setAttribute("id", indice)
    editar.addEventListener("click", ()=>{

      
        sessionStorage.setItem(indice, indice)
       window.location = ("../paginas/actualizar.html")



    })

    var borrar = document.createElement("button")
    body.appendChild(borrar)
    borrar.textContent = "Eliminar"
    borrar.setAttribute("class", "btn btn-danger")
    borrar.setAttribute("style", "width: 5rem;height:2rem;font-size:.8rem;margin-left:2rem;")
    borrar.setAttribute("id", indice)
    borrar.addEventListener("click", ()=>{

        if(localStorage.getItem(borrar.getAttribute("id"))){

            localStorage.removeItem(borrar.getAttribute("id"))
            alert("Borrado correctamente!")
            window.location.reload()
        }


    })

}


