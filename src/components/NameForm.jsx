import {useState} from "react"
import "./components.css";

export default function NameForm({update}) {
    const [nombre, setNombre] = useState("")

    const changeName = (e) => {
        e.preventDefault()
        update(nombre)
    }

    const handleAnonymous = () => {
        update("Anonimo")
    }


    return (
        <form id="name--input" onSubmit={changeName}>
            <input type="text"
                   value={nombre}
                   placeholder="Tu nombre es..."
                   className="word-text-field"
                   autoComplete="off"
                   onChange={e => setNombre(e.target.value)}/>
            <div id="action-container">
                <button className="modal-button unfreeze">Guardar nombre</button>
                <button type="button" onClick={handleAnonymous} className="modal-button unfreeze">Omitir por ahora
                </button>
            </div>

        </form>
    )
}