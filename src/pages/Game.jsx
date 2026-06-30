import { useState } from "react"
import DataTable from "../components/DataTable";
import Timer from "../components/Timer";
import WordInput from "../components/WordInput";
import "../index.css";

export default function Game(){
    const [gameState, setGameState] = useState("START");
    const [palabrasUsadas, setPalabrasUsadas]=useState([]);

    const agregarPalabra = (palabra)=>{

    }

    const gameOver = ()=>{
        console.log("lose")
    }
    return(
    <div id='container'>
        <Timer onTimeUp={gameOver}/>
        <WordInput onAction={agregarPalabra}/>
        <DataTable  data={palabrasUsadas} showIndex={false}/>
    </div>
    )
}