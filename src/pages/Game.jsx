import { useState } from "react"
import DataTable from "../components/DataTable";
import Timer from "../components/Timer";
import WordInput from "../components/WordInput";
import "../index.css";
import {  useNavigate } from "react-router-dom";

export default function Game(){
    const navigate = useNavigate();
    const [isPlaying, setPlaying] = useState(false);
    const [palabrasUsadas, setPalabrasUsadas]=useState([]);
    const agregarPalabra = (palabra)=>{
        if(!isPlaying){
            setPlaying(true)
        }
    }

    const gameOver = ()=>{
        //navigate("/game-over")
        setPlaying(false)
    }

    const startGame = () => {

    }
    return(
    <div id='container'>
        <Timer onTimeUp={gameOver} active={isPlaying}/>
        <WordInput onAction={agregarPalabra}/>
        <DataTable  data={palabrasUsadas} showIndex={false}/>
    </div>
    )
}