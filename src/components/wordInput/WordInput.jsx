import {useEffect, useState} from "react";

import "./word_input.css"

export default function WordInput({ultimaLetra, onAction, error, validating}) {
    const [palabra, setPalabra] = useState("")
    const [shake, setShake] = useState(false)
    const handleWordInput = (e) => {
        e.preventDefault();
        const parsed = palabra.trim()
        if (!parsed) return;

        onAction(parsed)

        setPalabra("")
    }

    useEffect(() => {
        if (error) {
            setShake(true);
        }

    }, [error]);

    const buttonClass = error ? "error-button" : validating ? "freeze" : "unfreeze"
    let placeHolderMsg = "Tu palabra es... "
    if (ultimaLetra) {
        placeHolderMsg = `Empezá con ${ultimaLetra.toUpperCase()}`
    }

    if (validating) {
        placeHolderMsg = `Esperando respuesta de la API`
    }
    if (error) {
        placeHolderMsg = error
    }

    return (
        <form id="word--input" className={shake ? "shake-animation" : ""} onSubmit={handleWordInput}
              onAnimationEnd={() => setShake(false)}>
            <input
                autoFocus
                type="text"
                value={palabra}
                placeholder={placeHolderMsg}
                className={`word-text-field ${error ? "error-input" : validating ? "freeze" : "unfreeze"}`}
                name="palabra"
                autoComplete="off"
                onChange={e => setPalabra(e.target.value)}
                readOnly={validating}
                maxLength={36}
            />
            <button disabled={validating} id="word-button" className={buttonClass}>Enviar</button>
        </form>

    );
}