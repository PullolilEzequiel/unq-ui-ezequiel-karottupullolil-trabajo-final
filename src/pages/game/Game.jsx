import {useEffect, useState} from "react"
import Timer from "../../components/Timer";
import WordInput from "../../components/wordInput/WordInput";
import "./game.css"
import {useNavigate} from "react-router-dom";
import validarPalabra from "../../services/wordServices";
import {crearUsuario, generarId, obtenerUsuario} from "../../services/gameServices.js";
import TablaDePalabras from "../../components/tables/TablaDePalabras";
import NameModal from "../../components/NameModal.jsx";

export default function Game() {
    const navigate = useNavigate();
    const [isPlaying, setPlaying] = useState(false);
    const [palabrasUsadas, setPalabrasUsadas] = useState([]);
    const [error, setError] = useState("")
    const [resetTimer, setResetTimer] = useState(false);
    const [puntaje, setPuntaje] = useState(0)
    const [cantidadDePalabrasValidas, setCantidadDePalabras] = useState(0);
    const [nombre, setNombre] = useState("")

    const [isValidating, setIsValidating] = useState(false);
    const gameOver = () => {
        setPlaying(false)
        navigate("/game-over", {state: {id: generarId(), puntaje, cantidadDePalabrasValidas}})
    }

    const agregarPalabra = async (palabra) => {
        if (isValidating) return;
        setError("")
        if (!isPlaying) {
            setPlaying(true)
        }

        setIsValidating(true);
        const {isValid, nuevaPalabra, message} = await validarPalabra(palabrasUsadas, palabra);
        

        if (isValid) {
            setPalabrasUsadas([nuevaPalabra, ...palabrasUsadas])
            setResetTimer(!resetTimer)
            setPuntaje(puntaje + nuevaPalabra.puntos)
            setCantidadDePalabras(
                cantidadDePalabrasValidas + 1
            )
        } else {
            setError(message)
        }

        setIsValidating(false);
    }

    const handleUsuario = (nombre) => {
        crearUsuario(nombre)
        setNombre(nombre)
    }

    useEffect(() => {
        const {nombre} = obtenerUsuario()
        setNombre(nombre)
    }, [])

    const errorClassName = error !== "" ? "error visible" : "error"

    return (
        <div id='container'>
            {nombre === "" && <NameModal onChangeName={handleUsuario}/>}
            <Timer validating={isValidating} onTimeUp={gameOver} active={isPlaying} trigger={resetTimer}/>
            <WordInput validating={isValidating} onAction={agregarPalabra} error={error}/>
            <div className={errorClassName}>{error}</div>
            <TablaDePalabras data={palabrasUsadas} puntaje={puntaje}/>
        </div>
    )
}