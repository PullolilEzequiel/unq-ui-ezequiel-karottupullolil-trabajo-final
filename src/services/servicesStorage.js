export function obtenerNombreDeJugador() {
    return localStorage.getItem("nombre") || ""
}

export function cambiarNombre(nombre) {
    const nombreFixed = nombre.trim()

    if (nombreFixed === "") {
        throw new Error("Nombre invalido")
    }

    localStorage.setItem("nombre", nombreFixed)
}

export function obtenerPuntajes() {
    try {
        return JSON.parse(localStorage.getItem("puntajes")) || []
    } catch {
        return []
    }
}

export function vaciarNombre() {
    localStorage.removeItem("nombre");
}

export function almacenarPuntaje(puntajeARegistrar) {
    const listaPuntajes = obtenerPuntajes()
    if (!seTieneQueRegistrar(puntajeARegistrar, listaPuntajes)) {
        return;
    }

    listaPuntajes.push(puntajeARegistrar)

    listaPuntajes.sort((a, b) => b.puntajeTotal - a.puntajeTotal);

    const top10Puntajes = listaPuntajes.slice(0, 10);
    localStorage.setItem("puntajes", JSON.stringify(top10Puntajes));
}

/**
 * Indica sí el puntaje obtenido debe ser registrado
 *
 * El puntaje debe ser registrado si no tiene el mismo ID que el anterior puntaje
 * y sí el puntaje es mayor al puntaje más chico de la lista
 * @param listaPuntajes el top 10 de puntajes ordenados de mayor a menor
 * @param puntajeTotal el puntaje a registrar
 * @returns {boolean}
 */
function seTieneQueRegistrar({puntajeTotal}, listaPuntajes) {
    if (listaPuntajes.length < 10) {
        return true
    }

    const ultimoPuntajeRegistrado = listaPuntajes[listaPuntajes.length - 1].puntajeTotal;

    return puntajeTotal >= ultimoPuntajeRegistrado;
}
