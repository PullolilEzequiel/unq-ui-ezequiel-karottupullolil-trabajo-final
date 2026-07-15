import axios from "axios";

export function empiezaPor(palabra, letra) {
    if (!palabra || !letra) return false;
    return palabra.trim().toLowerCase().startsWith(letra.trim().toLowerCase());
}

export async function validarPalabra(palabras, palabra, ultimaLetraRequerida) {
    const word = palabra.trim().toLowerCase();
    const puntaje = word.length;

    if (!word) {
        return {isValid: false, message: "La palabra no puede estar vacía"};
    }

    if (word.length >= 36) {
        return {isValid: false, message: "La palabra no existe"};
    }

    const primeraLetra = word[0];
    const grupoLetra = palabras[primeraLetra] || [];

    if (grupoLetra.some(e => e.palabra.toLowerCase() === word)) {
        return {isValid: false, message: `La palabra "${palabra}" ya fue utilizada`};
    }

    if (ultimaLetraRequerida) {
        const ultimaLetra = ultimaLetraRequerida.toLowerCase();

        if (!empiezaPor(word, ultimaLetra)) {
            return {
                isValid: false,
                message: `La palabra debe empezar con "${ultimaLetra.toUpperCase()}"`,
                ultimaLetra: null
            };
        }
    }

    try {
        const response = await axios.get(`/api/validate?word=${word}`);

        if (response.data.exists) {
            const proximaLetraInicial = word.at(-1).toLowerCase();
            return {
                isValid: true,
                nuevaPalabra: {palabra: word, puntos: puntaje},
                ultimaLetra: proximaLetraInicial
            };
        } else {
            return {isValid: false, message: `La palabra "${word}" no existe`, ultimaLetra: null};
        }
    } catch (error) {
        console.error(error)
        const message = error.response && error.response.status === 400
            ? `Palabra inválida "${word}"`
            : "Error de comunicación con el servidor";

        return {isValid: false, message, ultimaLetra: null};
    }
}
