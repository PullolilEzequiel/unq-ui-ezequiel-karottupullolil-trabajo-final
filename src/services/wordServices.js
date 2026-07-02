import axios from "axios";


export default async function validarPalabra(palabras, palabra) {
    const word = palabra.trim().toLowerCase();
    const puntaje = word.length;

    if (word.length >= 36) {
        return [false, undefined, "La palabra excede el maximo permitido"]
    }

    if (palabras.some(e => e.palabra.toLowerCase() == word)) {
        return [false, undefined, `La palabra ${palabra} ya fue usada`]
    }

    if (palabras.length > 0) {
        const ultimaPalabraValida = palabras[0].palabra;

        const ultimaLetra = ultimaPalabraValida.at(-1).toLowerCase();
        const primeraLetraNueva = word[0]
        if (ultimaLetra !== primeraLetraNueva) {
            return [
                false,
                undefined,
                `La palabra debe empezar con "${ultimaLetra.toUpperCase()}"`
            ];
        }
    }

    try {
        const response = await axios.get(`/api/validate?word=${word}`)

        return [
            response.data.exists,
            { palabra: word, puntos: puntaje },
            `Palabra valida "${palabra}"`]
    } catch (error) {
        if (error.response && error.response.status === 400) {
            return [false, undefined, `Palabra inválida "${word}"`];
        }

        return [false, undefined, "Error de comunicación con el servidor"];
    }


}
