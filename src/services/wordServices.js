import axios from "axios";


export default async function validarPalabra(palabras, palabra) {
    const word = palabra.trim()
    const puntaje = word.length;

    if (palabras.some(e => e.palabra == palabra)) {
        return [false, undefined, `La palabra ${palabra} ya fue usada`]
    }

    if (word.length >= 36) {
        return [false, undefined, "La palabra excede el maximo permitido"]
    }

    const response = await axios.get(`/api/validate?word=${palabra}`)

    if (response.status == 400) {
        return [false, undefined, `Palabra invalida "${palabra}"`]
    }


    return [
        response.data.exists,
        { palabra: word, puntos: puntaje },
        `Palabra valida "${palabra}"`]
}
