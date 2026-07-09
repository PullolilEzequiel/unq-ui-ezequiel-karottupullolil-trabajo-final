import {
    almacenarPuntaje,
    cambiarNombre,
    obtenerNombreDeJugador,
    obtenerPuntajes, ultimoIdRegistrado,
    vaciarNombre
} from "./ServicesStorage.js";

/**
 * Guarda en el localStorage el puntaje sí es mayor al ultimo puntaje de la lista
 * @param puntajeTotal puntaje de la partida jugada
 * @param cantidadDePalabras cantidad de palabras acertadas de la partida jugada
 */
export function guardarPuntaje({id, puntajeTotal, cantidadDePalabras}) {
    const nombre =  obtenerNombreDeJugador()
    almacenarPuntaje({id, nombre, puntajeTotal, cantidadDePalabras})
}


export function listarPuntajes(){
    return obtenerPuntajes()
}

export function quitarUsuario(){
    vaciarNombre()
}

export function crearUsuario({nombre}){
    cambiarNombre(nombre)
}

export function obtenerUsuario(){
    return {
        nombre: obtenerNombreDeJugador()
    }
}

export function generarId(){
    const id = ultimoIdRegistrado()

    return id + 1;
}