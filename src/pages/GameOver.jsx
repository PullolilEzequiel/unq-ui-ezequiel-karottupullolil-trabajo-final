import { useEffect, useState } from "react";
import { obtenerPuntajes, vaciarNombre } from "../services/userServices";
import TablaDePuntajes from "../components/TablaDePuntajes";
import { useNavigate } from "react-router-dom";

export default function GameOver(){
    const navigate = useNavigate();
    const [puntajesData, setData] = useState([]);
    useEffect(()=>{
        setData(obtenerPuntajes())
    }, [])

    const volerAtras = ()=>{
        navigate("/")
    }

    const volerAtrasYCambiarNombre = ()=>{
        vaciarNombre()
        volerAtras()
    }
    return <div id="container">
        <div className="message"><h1>Perdiste!</h1></div>
        <div id="lose-actions">
            <button onClick={volerAtras} className="back-button" >Volver a jugar</button>
            <button onClick={volerAtrasYCambiarNombre} className="back-button" >Cambiar nombre y volver a jugar</button>
        </div>
        <TablaDePuntajes data={puntajesData} />
    </div>
}