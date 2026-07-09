import axios from "axios";

export default async function validarPalabra(palabras, palabra) {
    const word = palabra.trim().toLowerCase();
    const puntaje = word.length;
    
    if (word.length >= 36) {
        return {isValid: false, message: "La palabra no existe"};
    }

    if (palabras.some(e => e.palabra.toLowerCase() === word)) {
        return {isValid: false, message: `La palabra "${palabra}" ya fue utilizada`};
    }

    if (palabras.length > 0) {
        const ultimaPalabraValida = palabras[0].palabra;
        const ultimaLetra = ultimaPalabraValida.at(-1).toLowerCase();

        if (ultimaLetra !== word[0]) {
            return {
                isValid: false,
                message: `La palabra debe empezar con "${ultimaLetra.toUpperCase()}"`
            };
        }
    }

    try {
        const response = await axios.get(`/api/validate?word=${word}`);

        if (response.data.exists) {
            return {
                isValid: true,
                nuevaPalabra: {palabra: word, puntos: puntaje}
            };
        } else {
            return {isValid: false, message: `La palabra "${word}" no existe`};
        }
    } catch (error) {
        console.error(error)
        const message = error.response && error.response.status === 400
            ? `Palabra inválida "${word}"`
            : "Error de comunicación con el servidor";

        return {isValid: false, message};
    }
}
