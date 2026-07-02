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
    const gameOver = ()=>{
        //navigate("/game-over")
        setPlaying(false)
    }

    const agregarPalabra = async (palabra) => {
        setError("")
        if(!isPlaying){
            setPlaying(true)
        }
        
        
        const [isValid, palabraYPuntaje, message] = await validarPalabra(palabrasUsadas, palabra);
        
        
        if(isValid){    
            setResetTimer(!resetTimer)
            setPalabrasUsadas([...palabrasUsadas, palabraYPuntaje])
        }else{
            setError(message)
        }
    }


    const startGame = () => {
    
    }
    return(
    <div id='container'>
        <Timer onTimeUp={gameOver} active={isPlaying} trigger={resetTimer}/>
        <WordInput onAction={agregarPalabra}/>
        {/* TODO: cambiar por comportamiento especial de WordInput */}
        {error != "" && <div className="error">{error}</div>} 
        <DataTable  data={palabrasUsadas} showIndex={false}/>
    </div>
    )
}