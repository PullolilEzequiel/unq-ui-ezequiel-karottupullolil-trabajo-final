/**
 * Guarda en el localStorage el puntaje sí es mayor al ultimo puntaje de la lista
 * @param puntajeTotal puntaje de la partida jugada
 * @param cantidadDePalabras cantidad de palabras acertadas de la partida jugada
 */
export function guardarPuntaje(puntajeTotal, cantidadDePalabras) {
    const nombre = localStorage.getItem("nombre");

    if (!nombre) {
        throw new Error("No existe nombre")
    }
    const puntajesActualesRaw = localStorage.getItem("puntajes");
    const listaPuntajes = puntajesActualesRaw ? JSON.parse(puntajesActualesRaw) : [];
    if (!seTieneQueRegistrar(listaPuntajes, puntajeTotal)) {
        return;
    }
    listaPuntajes.push({nombre, puntajeTotal, cantidadDePalabras})

    listaPuntajes.sort((a, b) => b.puntajeTotal - a.puntajeTotal);

    const top10Puntajes = listaPuntajes.slice(0, 10);

    localStorage.setItem("puntajes", JSON.stringify(top10Puntajes));
}


/**
 * Indica sí el puntaje obtenido debe ser registrado
 * @param listaPuntajes el top 10 de puntajes ordenados de mayor a menor
 * @param puntajeTotal el puntaje a registrar
 * @returns {boolean}
 */
function seTieneQueRegistrar(listaPuntajes, puntajeTotal) {

    if (listaPuntajes.length < 10) {
        return true
    }

    const ultimoPuntajeRegistrado = listaPuntajes[listaPuntajes.length - 1].puntajeTotal;

    return puntajeTotal >= ultimoPuntajeRegistrado;
}

export function cambiarNombre(nombre) {
    localStorage.setItem("nombre", nombre)
}

export function obtenerNombre() {
    return localStorage.getItem("nombre") || ""
}

export function obtenerPuntajes() {
    return JSON.parse(localStorage.getItem("puntajes")) || []
}

export function vaciarNombre() {
    localStorage.setItem("nombre", "")
}