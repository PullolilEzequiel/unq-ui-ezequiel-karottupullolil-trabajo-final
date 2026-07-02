import { useState } from "react"
import DataTable from "../components/DataTable";
import Timer from "../components/Timer";
import WordInput from "../components/WordInput";
import "../index.css";
import {  useNavigate } from "react-router-dom";
import validarPalabra from "../services/wordServices";

export default function Game(){
    const navigate = useNavigate();
    const [isPlaying, setPlaying] = useState(false);
    const [palabrasUsadas, setPalabrasUsadas]=useState([]);
    const [error, setError] = useState("")
    const [resetTimer, setResetTimer] = useState(false);
    const [puntaje, setPuntaje] = useState(0)
    const gameOver = ()=>{
        setPlaying(false)
        navigate("/game-over")
    }

    const agregarPalabra = async (palabra) => {
        setError("")
        if(!isPlaying){
            setPlaying(true)
        }
        
        
        const [isValid, palabraYPuntaje, message] = await validarPalabra(palabrasUsadas, palabra);
        
        
        if(isValid){    
            setPalabrasUsadas([palabraYPuntaje, ...palabrasUsadas])
            setResetTimer(!resetTimer)
            setPuntaje(puntaje + palabraYPuntaje.puntos)
        }else{
            setError(message)
        }
    }


    const startGame = () => {
    
    }
    return(
    <div id='container'>
        <Timer onTimeUp={gameOver} active={isPlaying} trigger={resetTimer}/>
        <WordInput onAction={agregarPalabra} error={error} />
        <DataTable  data={palabrasUsadas} showIndex={false} puntaje={puntaje}/>
    </div>
    )
}