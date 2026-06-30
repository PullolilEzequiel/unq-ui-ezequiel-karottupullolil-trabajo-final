import { useState } from "react"
import DataTable from "../components/DataTable";
import Timer from "../components/Timer";
import WordInput from "../components/WordInput";
import "../index.css";

export default function Game(){
    const [gameState, setGameState] = useState("START");
    
    return(
    <div id='container'>
        <Timer />
        <WordInput />
        <DataTable />
    </div>
    )
}