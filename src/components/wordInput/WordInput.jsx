import {useEffect, useState} from "react";

import "./word_input.css"

export default function WordInput({ultimaLetra, onAction, error, validating}) {
    const [nombre, setNombre] = useState("")
    const [shake, setShake] = useState(false)
    const handleWordInput = (e) => {
        e.preventDefault();
        const parsed = nombre.trim()
        if (!parsed) return;

        onAction(parsed)

        setNombre("")
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
    // {error ? error : ultimaLetra ? `Empezá con "${ultimaLetra.toUpperCase()}"...` : "Tu palabra es..."}
    return (
        <form id="word--input" className={shake ? "shake-animation" : ""} onSubmit={handleWordInput}
              onAnimationEnd={() => setShake(false)}>
            <input
                autoFocus={true}
                type="text"
                value={nombre}
                placeholder={placeHolderMsg}
                className={`word-text-field ${error ? "error-input" : validating ? "freeze" : "unfreeze"}`}
                name="palabra"
                autoComplete="off"
                onChange={e => setNombre(e.target.value)}
                readOnly={validating}
                maxLength={36}
            />
            <button disabled={validating} id="word-button" className={buttonClass}>Enviar</button>
        </form>

    );
}