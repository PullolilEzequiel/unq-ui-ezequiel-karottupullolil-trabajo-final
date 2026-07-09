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
    const [ultimaLetra, setUltimaLetra] = useState("")
    const [isValidating, setIsValidating] = useState(false);
    const gameOver = () => {
        setPlaying(false)
        navigate("/game-over", {state: {id: generarId(), puntaje, cantidadDePalabrasValidas}})
    }

    const agregarPalabra = async (palabra) => {
        if (isValidating) return;
        setError("")


        setIsValidating(true);
        const {
            isValid,
            nuevaPalabra,
            message,
            ultimaLetra} = await validarPalabra(palabrasUsadas, palabra);


        if (isValid) {
            setPalabrasUsadas([nuevaPalabra, ...palabrasUsadas])
            setResetTimer(!resetTimer)
            setPuntaje(puntaje + nuevaPalabra.puntos)
            setCantidadDePalabras(
                cantidadDePalabrasValidas + 1
            )
            setUltimaLetra(ultimaLetra)

            if (!isPlaying) {
                setPlaying(true)
            }
        } else {
            setError(message)
        }

        setIsValidating(false);
    }

    const handleUsuario = (nombre) => {
        crearUsuario(nombre)
        setNombre(nombre)
    }

    const irApuntajes = ()=>{
        navigate("/game-over")
    }

    useEffect(() => {
        const {nombre} = obtenerUsuario()
        setNombre(nombre)
    }, [])

    const errorClassName = error !== "" ? "error visible" : "error"

    return (
        <div id='container'>

            <div className="top-section-wrapper">
                {nombre === "" && <NameModal onChangeName={handleUsuario}/>}
                <Timer key={resetTimer} validating={isValidating} onTimeUp={gameOver} active={isPlaying} trigger={resetTimer}/>
            </div>
            <WordInput
                ultimaLetra={ultimaLetra}
                validating={isValidating}
                onAction={agregarPalabra}
                error={error}/>
            <div className={errorClassName}>{error}</div>
            <div className="tabla-wrapper-compartida">
            <TablaDePalabras data={palabrasUsadas} puntaje={puntaje} ultimaLetra={ultimaLetra}/>
            </div>
            <button onClick={irApuntajes} className="saltar-puntaje">Ver los mejores 10 puntajes historicos!</button>
        </div>
    )
}