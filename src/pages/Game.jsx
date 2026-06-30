import { useState } from "react"
import DataTable from "../components/DataTable";
import Timer from "../components/Timer";
import WorldInput from "../components/WorldInput";
import "../index.css";

export default function Game(){
    const [gameState, setGameState] = useState("START");
    
    return(
    <div id='container'>
        <Timer />
        <WorldInput />
        <DataTable />
    </div>
    )
}