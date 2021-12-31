class Pais{

    #nombre
    #fechavisitado
    #color
    #comentarios 
    
    #capital
    #codigo
    constructor(nombre, fechavisitado, color, comentarios, capital, codigo){

        this.#nombre = nombre
        this.#fechavisitado = fechavisitado
        this.#color = color
        this.#comentarios = comentarios
        this.#codigo = codigo
        this.#capital = capital
        

    }

    setNombre(nombre){this.#nombre = nombre}
    getNombre(){return this.#nombre}
    setFecha(fecha){this.#fechavisitado = fecha}
    getFecha(){return this.#fechavisitado}
    setColor(color){this.#color = color}
    getColor(){return this.#color}
    setComentarios(coment){this.#comentarios = coment}
    getComentarios(){return this.#comentarios}


    setCapital(capital){this.#capital = capital}
    getCapital(){return this.#capital}
    setCodigo(codigo){this.#codigo = codigo}
    getCodigo(){return this.#codigo}


    //guardar los paises
guardarPaises(bandera){
    
   var objeto = {
        
        "nombre" : this.getNombre(),
        "fecha": this.getFecha(),
        "comentarios": this.getComentarios(),
        "color": this.getColor(),
        "capital": this.getCapital(),
        "codigo": this.getCodigo(),
        "bandera": bandera

   }

   var obj = JSON.stringify(objeto)

    localStorage.setItem(this.generateId(),obj)

    alert("Pais guardado satisfactoriamente!")
    window.location="../paginas/index.html"
}

//generador de id unico
generateId = () => Math.random().toString(36).substring(2,18);

}