export function guardarPuntaje(puntajeTotal) {
    const nombre = localStorage.getItem("nombre");
    const puntajesActualesRaw = localStorage.getItem("puntajes");
    const listaPuntajes = puntajesActualesRaw ? JSON.parse(puntajesActualesRaw) : [];

    listaPuntajes.push({ nombre, puntajeTotal })

    listaPuntajes.sort((a, b) => b.puntajeTotal - a.puntajeTotal);

    const top10Puntajes = listaPuntajes.slice(0, 10);

    localStorage.setItem("puntajes", JSON.stringify(top10Puntajes));
}

export function cambiarNombre(nombre) {
    localStorage.setItem("nombre", nombre)
}

export function obtenerNombre() {
    return localStorage.getItem("nombre") || ""
}