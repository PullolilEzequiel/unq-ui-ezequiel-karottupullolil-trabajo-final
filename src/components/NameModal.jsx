import "./components.css"
import NameForm from "./NameForm.jsx";

export default function NameModal({onChangeName}) {
    return <div className="modal-overlay">
        <div className="modal-content">
            <h2>¡Bienvenido al Juego Palabras Encadenadas!</h2>
            <p>Por favor, ingresá tu nombre para comenzar:</p>
            <NameForm update={onChangeName}/>
        </div>
    </div>
}