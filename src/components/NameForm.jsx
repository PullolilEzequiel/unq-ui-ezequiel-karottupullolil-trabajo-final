import { useState } from "react"

export default function NameForm({update}){
    const [nombre, setNombre] = useState("")

    const changeName = (e)=> {
        e.preventDefault()
        update(nombre)
    }
    return (
        <form id="word--input" onSubmit={changeName}>
            <input type="text"
                    value={nombre}
                    placeholder="Tu nombre es..."
                    className="word-text-field"
                    onChange={e=> setNombre(e.target.value)} />

            <button>Enviar</button>
        </form>
    )
}