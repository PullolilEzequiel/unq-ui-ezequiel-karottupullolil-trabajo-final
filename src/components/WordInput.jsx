import { useState } from "react";
export default function WordInput({onAction}){
    const [nombre, setNombre] = useState("")
    const handleWordInput = (e)=>{
        e.preventDefault();
        const parsed = nombre.trim()
        if(!parsed) return;

        onAction(parsed)
        setNombre("")
    }
    return (
    <form id="word--input" onSubmit={handleWordInput}>
        <input 
            type="text"
            value={nombre}
            placeholder="Tu palabra es..."
            name="palabra"
            onChange={e=>setNombre(e.target.value)}
             />
        <button>Send</button>
    </form>
    
    );
}