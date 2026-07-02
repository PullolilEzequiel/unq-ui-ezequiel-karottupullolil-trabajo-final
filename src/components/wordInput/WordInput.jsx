import {useState } from "react";

import "./word_input.css"

export default function WordInput({onAction, error}){
    const [nombre, setNombre] = useState("")
    const handleWordInput = (e)=>{
        e.preventDefault();
        const parsed = nombre.trim()
        if(!parsed) return;
        setNombre("")
        onAction(parsed)

    }

    return (
    <form id="word--input" onSubmit={handleWordInput}>
        <input 
            type="text"
            value={nombre}
            placeholder={error != "" ? error : "Tu palabra es..."}
            className={`word-text-field ${error ? "error-input" : ""}`}
            name="palabra"
            autoComplete="off"
            onChange={e=>setNombre(e.target.value)}
             />
        <button>Enviar</button>
    </form>
    
    );
}