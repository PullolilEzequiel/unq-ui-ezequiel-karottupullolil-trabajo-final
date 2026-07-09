import {useEffect, useState} from "react";

import "./word_input.css"

export default function WordInput({onAction, error, validating}) {
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

    const freezeClass = validating ? "freeze" : "unfreeze"
    return (
        <form id="word--input" className={shake ? "shake-animation" : ""} onSubmit={handleWordInput}
              onAnimationEnd={() => setShake(false)}>
            <input
                type="text"
                value={nombre}
                placeholder={error !== "" ? error : "Tu palabra es..."}
                className={`word-text-field ${error ? "error-input" : validating ? "freeze" : "unfreeze"}`}
                name="palabra"
                autoComplete="off"
                onChange={e => setNombre(e.target.value)}
                readOnly={validating}
            />
            <button disabled={validating} id="word-button" className={freezeClass}>Enviar</button>
        </form>

    );
}