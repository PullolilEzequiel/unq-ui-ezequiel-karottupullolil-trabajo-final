import { useEffect, useState } from "react"
import Timer from "../../components/Timer";
import WordInput from "../../components/wordInput/WordInput";
import "./game.css"
import {  useNavigate } from "react-router-dom";
import validarPalabra from "../../services/wordServices";
import { guardarPuntaje, obtenerNombre, cambiarNombre} from "../../services/userServices";
import NameForm from "../../components/NameForm";
import TablaDePalabras from "../../components/tables/TablaDePalabras";

export default function Game(){
    const navigate = useNavigate();
    const [isPlaying, setPlaying] = useState(false);
    const [palabrasUsadas, setPalabrasUsadas]=useState([]);
    const [error, setError] = useState("")
    const [resetTimer, setResetTimer] = useState(false);
    const [puntaje, setPuntaje] = useState(0)

    const [nombre, setNombre] = useState("")
    const gameOver = ()=>{
        setPlaying(false)
        guardarPuntaje(puntaje) 
        navigate("/game-over")
    }

    const agregarPalabra = async (palabra) => {
        setError("")
        if(!isPlaying){
            setPlaying(true)
        }
        
        
        const {isValid, nuevaPalabra, message} = await validarPalabra(palabrasUsadas, palabra);
        console.log(isValid, nuevaPalabra,message)
        
        if(isValid){    
            setPalabrasUsadas([nuevaPalabra, ...palabrasUsadas])
            setResetTimer(!resetTimer)
            setPuntaje(puntaje + nuevaPalabra.puntos)
        }else{
            setError(message)
        }
    }

    const actualizarNombre = (nombre)=>{
        cambiarNombre(nombre)
        setNombre(nombre)
    }

    useEffect(()=>{
        setNombre(obtenerNombre())
    }, [])

    if (nombre === ""){
        return <div id="container"> <NameForm update={actualizarNombre} /> </div> 
    }

    return(
    <div id='container'>
        <Timer onTimeUp={gameOver} active={isPlaying} trigger={resetTimer}/>
        <WordInput onAction={agregarPalabra} error={error} />
        <TablaDePalabras data={palabrasUsadas} puntaje={puntaje}/>
    </div>
    )
}