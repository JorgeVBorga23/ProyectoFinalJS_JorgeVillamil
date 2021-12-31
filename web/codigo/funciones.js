//funcion para guarsar un pais en localstorage
let guardarPais = () => {

    let nombre = document.getElementById("nombre").value
    let fecha = document.getElementById("fecha").value
    let comentarios = document.getElementById("comentarios").value
    let color = document.getElementById("color").value

    //verificamos que tenga escritos datos
    if (nombre == "" || comentarios == "" || fecha == "") {

        alert("Debe llenar los campos!")




    } else {



        //verificamos si el nombre es valido con expresion regular

        if (validarFormulario(nombre)) {

            //codigo y capital
            let cod, cap
            //fetch


            fetch("https://restcountries.com/v3.1/name/" + nombre).then((response) => {
                if (!response.ok) {
                    alert("El pais que ingreso parece no coincidir con alguno de nuestra base de datos!")

                } else {

                    return response.json()
                }


            }).then((data) => {
                console.log(data[0])
                cap = data[0].capital[0]

                cod = data[0].altSpellings[0]
                crearObjeto(cap, cod)
            })

        } else {
            alert("Ingrese un pais valido!!")
        }

    }
}


//creacion del pais 
function crearObjeto(cap, cod) {
    //creamos un objeto pais
    let pais = new Pais(nombre, fecha, color, comentarios, cap, cod)
    console.log(cap)

    //agregamos la bandera del pais

    fetch("https://flagcdn.com/256x192/" + pais.getCodigo().toLowerCase() + ".png")
        .then((res) => {

            if (res.ok) {

                return res.blob()
            } else {
                alert("No se encontro la bandera, verifique pais")
            }
        })
        .then((data) => {
            console.log(data.text())
            pais.guardarPaises(data)

        })
    //una vez encontrados, guardamos en localstorage


}

//redireccion con eventos

let boton = document.getElementById("botonredirect")


boton.addEventListener("click", () => {

    window.location = "../paginas/mostrarpaises.html"

})


//validacion de formulario con expresion regular
//validar que solo se permita ingresar palabras sin numeros y 
//con espacios para validar nombres de paises

function validarFormulario(cadena) {

    let expresion = new RegExp("^[a-zA-Z_ ]{3,16}$")



    if (expresion.test(cadena)) {

        return true

    } else {

        return false
    }




}
